import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

const Products = (props) => {

    const [apiData, setApiData] = useState([]);
    const [purcahsedCourses, setPurcahsedCourses] = useState([]);

    let user;
    let myCourseIds = [];
    let cartApi = { cartId: "", healthServiceId: "" }

    const setMyCourseIds = (value, index, array) => { myCourseIds.push(value.id); }

    useEffect(() => {

        user = JSON.parse(sessionStorage.getItem("user"));
        if (user == null) { user = { fullname: "", email: "", phone: "", dob: "", id: "" } }


        axios.get(`http://localhost:7072/helthify/user/userServices/${user.id}`)
            .then(response => {
                setPurcahsedCourses(response.data)
            });

        axios.get('http://localhost:7072/helthify/services')
            .then(response => {
                setApiData(response.data)
            });
    }, []);

    purcahsedCourses.forEach(setMyCourseIds);

    const addToCart = () => {
        axios.post('http://localhost:7072/helthify/cart/add', cartApi)
            .then(response => alert(response.data));
    }

    var courseCards = apiData.map(obj => {
        return (
            <div class="product">
                <div class="image">
                    <img src={obj.imagePath} alt="" />
                </div>
                <div class="description">
                    <h3>{obj.serviceName}</h3>
                    <p>{obj.mentor}</p>
                    <h2 class="price">{obj.price}</h2>
                    <Link to="/coursedetail" id={obj.id} onClick={() => localStorage.setItem("CourseId", obj.id)} class="buy">View</Link>
                    {myCourseIds.includes(obj.id) ?
                        <Link to="/coursedetail" className='add'>Go To Course</Link> :
                        <a onClick={() => {
                            user = JSON.parse(sessionStorage.getItem("user"));
                            cartApi.cartId = user.id;
                            cartApi.healthServiceId = obj.id;
                            addToCart();
                        }} class="add">Add to Cart</a>
                    }
                </div>
            </div>
        );
    });

    return (
        <>
            <div class="productSection1">
                <div class="main_container">
                    <div class="vertical_sec">
                        <div class="horizontal_sec">
                            <div class="box" id="box1">
                                <h3>Meditation Guide Book</h3>
                                <p>trengthen Coping Skills And Reduce Triggers Due To Anxiety & Depression. Treat Autism & ADHD Anxiety & Depression. Improve your mind-body.</p>
                            </div>
                            <div class="box" id="box2">
                                <h3>Vegan recipe book</h3>
                                <p>Improve your health, help the planet, save animals from suffering & help feed the world. Healthier people on a healthier planet.</p>
                            </div>
                        </div>
                        <div class="horizontal_sec">
                            <div class="box" id="box3">
                                <h3>Get Customized diet plan</h3>
                                <p>The Healthy Diet Book covers dieting foods recipes, comfort food recipes, and the blood type diet. All of the recipes follow healthy diet plans which include ingredients that are made from healthy diet foods. You will enjoy good dieting tips along with the healthy diet recipes and even recipes from the comfort food diet.</p>
                            </div>
                            <div class="box" id="box4">
                                <h3>Self care guide </h3>
                                <p>The Complete Guide to Self Care features 100 accessible activities that help you reconnect with your body, mind, spirit, and surroundings, and leave you feeling refreshed and ready to face the world again.</p>
                            </div>
                        </div>
                    </div>
                    <div class="vertical_sec">
                        <div class="box" id="box5">
                            <h3>Cheat day recipe book</h3>
                            <p>Cheat Day is a cookbook full of athlete's favorite recipes. Ranging from your Average Joe to the All-Star Pro, this book is for everyone.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="productSection2">
                <div class="productGrid">
                    {courseCards}
                </div>
            </div>
        </>
    );
}
export default Products;