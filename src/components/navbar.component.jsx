import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../img/logo.png';
// import { UserContext } from '../App';
// import UserNavigationPanel from './user-navigation.component';


const Navbar = () => {

    // For toggling search box visibility
    const [ searchBoxVisibility, setSearchBoxVisibility ] = useState(false);

    // For toggling user navigation panel
    const [ userNavPanel, setUserNavPanel ] = useState(false);

    // let navigate = useNavigate(); 

    // Show user profile and logout button not signin button
    // const { userAuth, userAuth: { access_token, profile_img } } = useContext(UserContext);

    const handleUserNavPanel = () => {
        setUserNavPanel(currentVal => !currentVal);
    }

    const handleSearch =(e) => {
        let query = e.target.value;

        if(e.keyCode === 13 && query.length) {
            navigate(`/search/${query}`)
        } 
    }

    // for working of signOUT button due to onBlur properties
    const handleBlur = () => {

        setTimeout(() => {
            setUserNavPanel(false);
        }, 200);

    }

    const handleLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log("Latitude:", latitude);
                console.log("Longitude:", longitude);
                // Do something with the latitude and longitude, e.g., show on a map
            },
            (error) => {
                console.error("Error getting geolocation:", error.message);
                // Handle error, e.g., show a message to the user
            }
        );
    };


    return (
        <>
        <nav className="navbar mb-14">

            <Link to="/" className='flex-none w-10'>
                <img src={logo} alt="logo" className='w-full' />
            </Link>
                    
                    

            <div className={"absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " + ( searchBoxVisibility ? "show" : "hide")}>
                <input 
                    type="text"
                    placeholder='Search'
                    className='w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12'
                    onKeyDown={handleSearch}
                />

                <i className='fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey'></i>
                <i className="fi fi-rr-marker absolute right-[10%] md:left-15 top-1/2 -translate-y-1/2 text-xl text-dark-grey cursor-pointer z-10" onClick={handleLocation}></i>
                

            </div>

            <div className='flex items-center gap-3 md:gap-6 ml-auto'>
                <button className='md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center'
                onClick={() => setSearchBoxVisibility(currentVal => !currentVal)}
                >
                    <i className='fi fi-rr-search text-xl'></i>
                </button>

                <Link to="/editor" className='btn-dark py-2 text-white bg-black '>
                    <p>Book</p>
                </Link>

                {
                    // access_token ?
                    // <>
                    //     <Link to="/dashboard/notification">
                    //         <button className='w-12 h-12 rounded-full bg-grey relative hover:bg-black/10'>
                    //             <i className='fi fi-rr-bell text-2xl block mt-1'></i>
                    //         </button>
                    //     </Link>

                    //     <div className='relative' onClick={handleUserNavPanel} onBlur={handleBlur}>
                    //         <button className='w-12 h-12 mt-1'>
                    //             <img src={profile_img} alt="profile_img" className='w-full h-full object-cover rounded-full' />
                    //         </button>

                    //         {/* {
                    //             userNavPanel ? 
                    //             <UserNavigationPanel />
                    //             : ""
                    //         } */}

                    //     </div>
                    // </>
                    // :
                    <>
                        <Link className='btn-dark py-2' to="/signin">
                            Sign In
                        </Link>

                        <Link className='btn-light py-2 hidden md:block' to="/signup">
                            Sign Up
                        </Link>
                    </>
                }


            </div>

        </nav>
        <Outlet></Outlet>
        </>
    )
}

export default Navbar;