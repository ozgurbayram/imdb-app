import React, { useCallback, useEffect, useState } from "react"
import { useFeed } from "../context/FeedContext"
import { getFeed } from "../services/getFeed"
import '../styles/Feed.css'
import dots from '../public/dots.png'
import downvoteIcon from '../public/arrow-alt.png'
import upwoteIcon from '../public/arrow-down.png'
import comment from '../public/comment.png'


const FeedItem = ({item})=>{
    const {activeTopic,setActiveTopic} = useFeed()
    
    return (
        <button onClick={()=>{
            setActiveTopic(item.id)
        }} className="feed-item">
            <div className="top">
                <h2>{item.title}</h2>
                <img src={dots} alt="dots" />
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="left-item">
                        <img src={upwoteIcon} alt="" />
                        <span>{item.upvote}</span>
                    </div>
                    <div className="left-item">
                        <img src={downvoteIcon} alt="" />
                        <span>{item.downvote}</span>
                    </div>
                    <div className="left-item">
                        <img src={comment} alt="" />
                        <span>{item.comments}</span>
                    </div>
                </div>
                <span>{new Date(item.created_at).toLocaleDateString()}</span>
            </div>
        </button>
    )
}
const Feed = ()=>{
    const {feed,setFeed} = useFeed()
    const [tab, setTab] = useState('Popular')
    const filterByDate = (feed) =>{
        const newFeed = feed.sort((a,b)=>{return new Date(b.created_at)-new Date(a.created_at)})
        setTab("Recent")
        setFeed(newFeed)
    }
    const filterByUpvotes = (feed) =>{
        const newFeed = feed.sort((a,b)=>{return b.upvote-a.upvote})
        setTab("Popular")
        setFeed(newFeed)
    }
    useEffect(() => {
        filterByUpvotes(getFeed())
    }, [])
    return(
        <div className="feed">
            <div className="selection">
                <button onClick={()=>{
                    filterByUpvotes(feed)
                }} className={`button ${tab=='Popular'&&'active'}`}>
                    Popular
                </button>
                <button  onClick={()=>{filterByDate(feed)}} className={`button ${tab=='Recent'&&'active'}`}> 
                    Recent
                </button>
            </div>
            <div className="feed-list">
                {!feed&&(<div><span>Loading...</span></div>)}
                {feed && feed.map((item)=>{
                    return (<FeedItem item={item}/>)
                })}
            </div>
        </div>
    )
}

export default Feed