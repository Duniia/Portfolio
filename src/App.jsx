import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import { useEffect, useState } from "react"
export default function App() {

// const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         async function getData() {
//             const response = await fetch("https://portfolio.mydunia.dk/wp-json/wp/v2/posts?_embed");
//             const data = await response.json();
//             console.log("Hej");
// 						console.log(data);
//             setPosts(data);
//         }
//         getData();
//     }, []);

// let _header = [];

// async function getHeader() {
//   let response = await fetch("https://portfolio.mydunia.dk/wp-json/wp/v2/posts?_embed")
//   let data = await response.json();
//   _header = data;
//   appenHeader(data);
//   showLoader(false);
// }
// getHeader();

// const App = () => {
  return (
    <>
    <Header/>
    {/* <h1>{parseFloat(posts.title.rendered)}</h1> */}
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
    
    )
}
// }