import { Routes, Route } from "react-router-dom";
import { Link, Outlet } from 'react-router-dom';
import MySQLChapters from '../courseContents/MySQL/Chapters';
import Chapter1 from '../courseContents/MySQL/TypesOfPrimaryKeys';

const CourseContent = (props) => {
    return (
        <div className='courseContentPanel'>
            <div className='courseContentHeading'>
                <img src='/Images/thislogo.webp' alt='MySQL Course' height='100px' width='100px' />
                <h3>Diet Plan</h3>
            </div>
            <div className='courseContent'>
                <p>
                    <h6>Breakfast</h6>
                    <h6>Lunch</h6>
                    <h6>Snacks</h6>
                    <h6>Dinner</h6>
                    
                </p>
                

                <Outlet/>
            </div>
        </div>
    );
}
export default CourseContent;