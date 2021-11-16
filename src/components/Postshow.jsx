import { StaticHeader } from "./Staticheader";
import "../styles/postshow.css";
import axios from 'axios';
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Heading } from './Heading';

export const Postshow = () => {

    const obj = useParams();
    const [postlist, setPostList] = useState([])
    const [cat, setCat] = useState("")

    useEffect(() => {
        fetchposts()
        fetchCatgory()
    }, [])

    const fetchposts = () => {

        const URL = obj.id === "all" ? "http://localhost:7765/posts" : `http://localhost:7765/posts/category/${obj.id}`

        axios
            .get(URL, { withCredentials: true })
            .then(res => {
                console.log("data", res.data.post)
                setPostList(res.data.post)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    const fetchCatgory = () => {

        if (obj.id === "all") {
            setCat("All")
            return;
        }

        axios
            .get(`http://localhost:7765/categories/${obj.id}`, { withCredentials: true })
            .then(res => {
                // console.log("data", res.data.category.categoryname)
                setCat(res.data.category.categoryname)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }


    return (
        <>
            <div id="postshow">
                <StaticHeader></StaticHeader>
                <Heading image="/leftarrow.png" heading={cat} route={`/categories`}/>

                <div id="postmainDiv">
                    {
                        postlist.map((e) => (
                            <Link to={`/individualpost/${e._id}`}>
                                <div id="postInDiv">
                                    <p id="postCategory">{e.category.categoryname}</p>
                                    <p id="postMessage">{e.message}</p>
                                    <p id="postDate">POSTED ON {e.createdAt.slice(0, 10)}</p>
                                    <i id="hearticon" className="fa fa-heart" style={{fontSize:"24px",color:"#FC8282"}}></i>
                                    <img id="commenticon" src="/commentbox.png"></img>
                                    <p id="postReply">{e.replycount}{" "}{e.replycount===1?"comment":"comments"}</p>
                                    <p id="postLike">{e.likescount}{" "}{e.likescount===1?"like":"likes"}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div id="docbottom">
                    <hr id="docbottom1" />
                </div>
            </div>
        </>
    )
}