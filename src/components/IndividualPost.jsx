import { useParams } from 'react-router'
import '../styles/individualpost.css'
import { StaticHeader } from './Staticheader'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Heading } from './Heading';

export const Individualpost = () => {

    const { user } = JSON.parse(localStorage.getItem("data"))

    const obj = useParams();
    const [post, setPost] = useState({})
    const [replies, setReplies] = useState([])
    const [like, setLike] = useState(null)
    const [allLike, setAll] = useState(null)
    const [comments, setComment] = useState(null)

    const [replyData, SetreplyData] = useState({
        message: "",
        postid: obj.id,
        likes: 0,
    })

    console.log(obj.id)

    useEffect(() => {
        fetchPost()
        fetchReplies()
        likedornot()
    }, [])

    useEffect(() => {
        AllLikes()
    }, [like])

    const fetchPost = () => {
        axios
            .get(`http://localhost:7765/posts/${obj.id}`, { withCredentials: true })
            .then(res => {
                console.log("data", res.data)
                setPost(res.data.post)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    const fetchReplies = () => {
        axios
            .get(`http://localhost:7765/replies/post/${obj.id}`, { withCredentials: true })
            .then(res => {
                console.log("data", res.data)
                setReplies(res.data.reply)
                setComment(res.data.reply.length)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }


    const AllLikes = () => {
        axios
            .get(`http://localhost:7765/likes/post/${obj.id}`, { withCredentials: true })
            .then(res => {
                console.log("Alllikes", res.data.like.length)
                setAll(res.data.like.length)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    const likedornot = () => {
        axios
            .get(`http://localhost:7765/likes/percomment/${obj.id}/${user._id}`, { withCredentials: true })
            .then(res => {
                console.log("likedata", res.data)
                res.data.like.length > 0 ? setLike(true) : setLike(false)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }


    const LikeDislike = () => {

        if (like) {
            axios
                .delete(`http://localhost:7765/likes/deletelike/${obj.id}/${user._id}`, { withCredentials: true })
                .then(res => {
                    console.log("likedata", res.data)
                    setLike(false)
                })
                .catch(err => {
                    console.log("Error", err);
                })

        } else {
            //post the like

            axios
                .post(`http://localhost:7765/likes`, { userid: user._id, postid: obj.id })
                .then(res => {
                    console.log("likedata", res.data)
                    setLike(true)
                })
                .catch(err => {
                    console.log("Error", err);
                })

        }

    }

    const handleChange = (e) => {

        const { name, value } = e.target;

        SetreplyData({
            ...replyData,
            [name]: value
        })

        console.log(name, value)
    }

    const sendData = (e) => {
        e.preventDefault()
        console.log(replyData)

        axios.post("http://localhost:7765/replies", replyData)
            .then(res => {
                console.log(res);
                console.log(res.data);
                fetchReplies()
                SetreplyData({
                    message: "",
                    postid: obj.id,
                    likes: 0,
                })
            })
    }

    return (
        <>
            <div id="individualpost">
                <StaticHeader />
                <Heading image="/leftarrow.png" heading={post?.category?.categoryname} route={`/postshow/${post?.category?._id}`}/>

                <div id="insideDiv">
                    <div id="contentDiv">

                        <div id="postHeading">
                            <img src="/dummypic.png"></img>
                            <p>{post?.category?.categoryname}</p>
                        </div>

                        <p id="indpostMessage">{post.message}</p>

                        <div id="likeCommentDiv">
                            <p id="postDateposted">POSTED ON {post?.createdAt?.slice(0, 10)}</p>
                            <i onClick={LikeDislike} className="fa fa-heart" style={{ fontSize: "20.25px", color: like ? "#FC8282" : "grey" }}></i>
                            <p id="postlikecount">{allLike}{" "}{allLike===1?"like":"likes"}</p>
                            <img src="/commentbox.png"></img>
                            <p id="postreplycount">{comments}{" "}{comments===1?"comment":"comments"}</p>
                        </div>

                        <form onSubmit={sendData}>
                            <textarea id="create-reply-text-area" value={replyData.message} onChange={handleChange} name="message"> </textarea>
                            <input id="replybtn" type="submit" value="Reply" />
                        </form>

                        <p id="commentsHeading">Comments</p>

                        {replies.map((e) => {
                            return <div id="MainReplyDiv">
                            <div id="replyDiv">
                                <img id="dummypic2" src="/dummypic.png"></img>
                                <p id="replyMessages">{e.message}</p>
                            </div>
                            <p id="replypostedon">POSTED BY ANONYMOUS ON {e.createdAt.slice(0, 10)}</p>
                            </div>
                        })}


                    </div>
                </div>
                <div id="docbottom">
                    <hr id="docbottom1" />
                </div>
            </div>
        </>
    )

}