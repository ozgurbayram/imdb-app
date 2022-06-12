import { useEffect, useState } from "react"
import { getProfiles } from "../services/getProfiles"
import avatar from '../public/user.png'
import '../styles/PopularUsers.css'
const User = (user) =>{
    user = user.user
    return(
        <div className="user">
            <img src={avatar} alt="" className="avatar" />
            <div className="right">
                <h3 className="username">
                    {user.name}
                </h3>
                <h4 className="entry-count">{user.entry_count} entry</h4>
            </div>
        </div>
    )
}

const PopularUsers = ()=>{
    const [profiles, setProfiles] = useState(null)
    useEffect(() => {
        setProfiles(getProfiles())
    }, [])

    return (
        <div className="popular-users">
            <div className="popular-users-header">
                <h2>Popular users</h2>
            </div>
            <div className="popular-users-list">
                {!profiles&&(<span>Loading</span>)}
                {profiles&&(
                    profiles.map((profile)=>{
                        return (
                            <User user={profile}/>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default PopularUsers