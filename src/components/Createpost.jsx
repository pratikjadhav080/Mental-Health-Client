import "../styles/createpost.css"
import { Bottom } from "./Bottom"
import { Heading } from "./Heading"
import { StaticHeader } from "./Staticheader"
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useHistory } from "react-router"

function Createpost() {

    const history = useHistory();

    const { user } = JSON.parse(localStorage.getItem("data"))

    const [btns, setbtns] = useState([])
    const [issue,setIssue] = useState("")

    const [postData, SetpostData] = useState({
        message: "",
        category: "",
        userid: user._id,
        replycount: 0,
        likescount: 0
    })

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = () => {
        axios
            .get("http://localhost:7765/categories", { withCredentials: true })
            .then(res => {
                setbtns(res.data.categories)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    const handleChangeInselect = (e) => {

        const { name, value,options, selectedIndex } = e.target;

        SetpostData({
            ...postData,
            [name]: value
        })

        setIssue(options[selectedIndex].textContent)
        console.log(name, value,options[selectedIndex].textContent)
    }


    const handleChange = (e) => {

        const { name, value } = e.target;

        SetpostData({
            ...postData,
            [name]: value
        })

        console.log(name, value)
    }

    const sendData = (e) => {
        e.preventDefault()
        console.log(postData)

        axios.post("http://localhost:7765/posts", postData)
            .then(res => {
                console.log(res);
                console.log(res.data);
                history.push("/community");
            })
    }


    return (
        <div id="create-post-cont">
            <StaticHeader />
            <Heading heading={"Create Post"} image={"leftarrow.png"} route={`/community`}/>
            <div id="write-issue-text">WRITE YOUR ISSUE HERE </div>

            <p id="hashtag">Add hashtag</p>
            <p id="postcategory">{issue}</p>

            <form id="formdata" onSubmit={sendData}>
                <select name="category" id="create-post-select" onChange={handleChangeInselect}>
                    <option value="">Choose Category</option>
                    {btns.map((e, index) => (
                        <option key={index} value={e._id}>{e.categoryname}</option>
                    ))}
                </select>

                <textarea id="create-post-text-area" onChange={handleChange} name="message"> </textarea>

                <input id="create-post-btn" type="submit" value="POST" />
            </form>

            <Bottom />

        </div>
    )
}

export { Createpost }
