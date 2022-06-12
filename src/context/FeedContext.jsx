import React, { useState } from "react"
const FeedContext = React.createContext()

const FeedContextProvider = ({children}) =>{
    const [feed, setFeed] = useState()
    const [activeTopic, setActiveTopic] = useState(0)
    const value = {feed,setFeed,activeTopic,setActiveTopic}
    return(
        <FeedContext.Provider value={value}>
            {children}
        </FeedContext.Provider>
    )    
}

const useFeed = ()=>{
    const feed = React.useContext(FeedContext)
    return feed
}

export {FeedContextProvider,useFeed}