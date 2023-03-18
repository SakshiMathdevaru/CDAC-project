import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {

    useEffect(() => {
        let flag = localStorage.getItem("Refresh");
        if (flag == "1") {
            localStorage.setItem("Refresh", "0");
            window.location.reload();
        }
    }, []);

    return (
        <>
            <header>
                <h2>Your health journey starts here</h2>
                <p>A fit body, a calm mind, a house full of love. These things cannot be bought – they must be earned</p>
                <Link to="/products" class="button">Let's Get Started</Link>
            </header>

            <main>
                <div id="section0">
                    <img src="/Images/headerImg.svg" alt="header" />
                </div>
                <div id="section1">
                    <div class="section1-heading" id="products">
                        <h2>Service Description</h2>
                        <p>MealPrepPro project provides user with affordable options to get customized diet plan, customized workouts, various books. </p>
                    </div>
                    <div class="card-view">
                        <div class="card">
                            <img src="/Images/diet.png" alt="Learn" />
                            <h2>Diet</h2>
                            <p>Get customized diet plan that aligns with your health journey whether it may be weight gain or weight loss</p>
                        </div>
                        <div class="card">
                            <img src="/Images/health.png" alt="Build" />
                            <h2>Workouts</h2>
                            <p>Get customized workouts schedudle that are aligned with your schedule, needs and requirement</p>
                        </div>
                        <div class="card">
                            <img src="/Images/connect.png" alt="Connect" />
                            <h2>Connect</h2>
                            <p>Check transformation of previous users and follow their journey</p>
                        </div>
                    </div>
                </div>
                
                
            </main>
        </>
    );
}
export default Home;
