import Feed from "./Feed"
import PopularUsers from "./PopularUsers"
import Posts from "./Posts"
import '../styles/MainLayout.css'
const MainLayout = ()=>{
    return(
        <div className="main-layout">
            <Feed/>
            <Posts/>
            <PopularUsers/>
        </div>
    )
}

export default MainLayout