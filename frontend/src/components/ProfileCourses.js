import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

const loggedInFlag = sessionStorage.getItem("user") != null;

const ProfileCourses = (props) => {

    let user = JSON.parse(sessionStorage.getItem("user"));
    if (user == null) { user = { id: "" } }

    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:7072/helthify/user/userServices/${user.id}`)
            .then(response => { setApiData(response.data) });
    }, []);

    var usersCourses = apiData.map(obj => {
        return (
            <div class="courseCard">
                <img src={obj.imagePath} height='100px' width='100px' />
                <div className='courseCardInfo'>
                    <h3>{obj.serviceName}</h3>
                    <p>{obj.mentor}</p>
                    <Link to="/" class="buy">Go To Course</Link>
                </div>
            </div>
        );
    });

    return (
        <div class="profileContainer">
            <div class="profileSidebar">
                <ol>
                    <li><Link to="/" class="links">Home</Link></li>
                    <li><Link to="/profile" class="links">Profile</Link></li>
                    <li><Link to="/profileCourses" class="links active">My Services</Link></li>
                    <li><Link to="/profileSettings" class="links">Settings</Link></li>
                    {loggedInFlag ?
                        <li><Link to="/logout" class="links">Logout</Link></li> : null
                    }
                </ol>
            </div>
            {loggedInFlag ?
                <div class="courseContainer">
                    <h3>Enrolled Services</h3>
                    <div class="courseCardContainer">
                        {usersCourses}
                    </div>
                </div> :
                <div className='profileMainDiv'>
                    <form className='notLoggedIn'>
                        <h3>You are not logged in.</h3>
                        <Link to="/login" class="links">Click here to login?</Link>
                    </form>
                </div>
            }
        </div >
    );
}
export default ProfileCourses;