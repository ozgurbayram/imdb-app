import '../styles/Header.css'
import logo from '../public/logo.png'
import user from '../public/user.png'
import search from '../public/search.svg'
const Logo =()=>{
	return (
		<div className='logo'>
            <img 
                src={logo}
                style={{
                    width:106,
                    height:32
                }}
                alt="logo"
            />
		</div>
	)
}

const Search = ()=>{
	return (
		<div className='search'>
            <i>
                <img src={search} alt="search" className='search-icon'/>
            </i>
			<input className='search-input' type='text' />
		</div>
	)
}

const Profile = ()=>{
	return (
		<div  className='profile'>
            <img src={user} alt="user" style={{
                width:34,
                height:34,
                borderRadius:100
            }}/>
		</div>
	)
}

const Header = ()=>{
	return (
		<header className='header'>
			<div className='container' >
				<Logo/>
				<div className='header-right'>
 					<Search/>
					<Profile/>
				</div>
			</div>
		</header>
	)
}

export default Header
