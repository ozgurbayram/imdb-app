import React,{useEffect} from "react"
import Header from "./components/Header"
import MainLayout from "./components/MainLayout"
import { useFeed } from "./context/FeedContext"
import { getFeed } from "./services/getFeed"

const App = () =>{
    const {feed,setFeed} = useFeed()
    useEffect(() => {
        setFeed(getFeed())
    }, [])

    return (
        <>
            <Header/>
            <MainLayout/>
        </>
    )
}

export default App