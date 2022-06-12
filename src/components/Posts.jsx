import React, { useEffect, useState } from 'react'
import { useFeed } from '../context/FeedContext'
import '../styles/Posts.css'
import dots from '../public/dots.png'
import downvote from '../public/arrow-alt.png'
import upvote from '../public/arrow-down.png'
import scale from '../public/scale.png'
import replyGreen from '../public/replyGreen.png'
const Reply = ()=>{
    return(
        <div className='reply-comp'>
            <input type="text" placeholder='Reply to this thread'/>
            <img src={scale} alt="scale" />
        </div>
    )
}
const Comment = ({comment}) =>{
    const date = new Date(comment.created_at)
    return (
        <div className='comment post'>
            <div className='top'>
                <div className='left'>
                    <img src={comment.avatar} className="avatar" alt="avatar" />
                    <span className='username'>{comment.username}</span>
                    <span className='date'> &#x2022; {date.toDateString()}&#x2022; {date.getHours()}:{date.getMinutes()}</span>
                </div>
                <img className='dots' src={dots} alt="" />
            </div>
            <div className='center'>
                <span className='body'>{comment.body}</span>
                <img className='post-image' src={comment.image} alt="" />
            </div>
            <div className='row bottom'>
                <span className='reply'>Reply</span>
                <div className='row downvote'>
                    <img src={downvote} alt="downvote"/>
                    <span>{comment.downvotes}</span>
                </div>
                <div className='row upvote'>
                    <img src={upvote} alt="upvote" />
                    <span>{comment.upvotes}</span>
                </div>
            </div>
        
        </div>
    )
}
const Post = ({post}) =>{
    const date = new Date(post.created_at)

    
    return (
        <div className='post'>
            <div className='top'>
                <div className='left'>
                    <img src={post.avatar} className="avatar" alt="avatar" />
                    <span className='username'>{post.username}</span>
                    <span className='date'> &#x2022; {date.toDateString()}&#x2022; {date.getHours()}:{date.getMinutes()}</span>
                </div>
                <img className='dots' src={dots} alt="" />
            </div>
            <div className='center'>
                <span className='body'>{post.body}</span>
                <img className='post-image' src={post.image} alt="" />
            </div>
            <div className='row bottom'>
                <span className='reply'>Reply</span>
                <div className='row downvote'>
                    <img src={downvote} alt="downvote"/>
                    <span>{post.downvotes}</span>
                </div>
                <div className='row upvote'>
                    <img src={upvote} alt="upvote" />
                    <span>{post.upvotes}</span>
                </div>
            </div>

            {post['comments'] &&(
                <>
                    <div className='comment-count-container'>
                        <img src={replyGreen}/>
                        <span className='comment-count'>{post['comments'].length}</span>
                    </div>
                    <Comment comment={post['comments'][0]} />
                </>
            )}
        </div>
    )
}

const Posts = ()=>{
    const {feed,activeTopic} = useFeed()
    const [posts, setPosts] = useState()
    useEffect(() => {
        if(feed){
            setPosts(feed.filter((i)=>{return i.id===activeTopic})[0].posts)
        }
    }, [feed,activeTopic])
    
    return (
        <div className="posts">
            {posts && posts.map((post,i)=>{
                return (
                    <Post key={i} post={post}/>
                )
            })}
            <Reply/>
        </div>
    )
}

export default Posts