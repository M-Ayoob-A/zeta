import logo from './Logo.png';
import bn from './banner.png';
import React from 'react';
import { createBrowserRouter, RouterProvider, Link, Outlet, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

const Navblock = styled.div`
  text-align: center;
  width: 120px;
  transition: all 160ms ease-in-out;
  margin: auto;
  line-height: 100px;
  font-size: 1.2rem;
  font-family: 'Segoe UI, sans-serif';

  &:hover {
    background-color: #eeeeee
  }

  ${props => props.$primary && `
    background-color: black;
    color: white;
    width: 150px;

    &:hover {
      background-color: #222222
    }
  `}
`

const About = () => {
  return (<div className="text-segment" style={{paddingLeft: '15%', paddingRight: '15%', paddingTop: '40px', fontFamily: 'Quicksand, sans-serif'}}>
    <span style={{fontSize: '3rem'}}>
      About
    </span>
    
    <span style={{paddingLeft: '0.5rem'}}>
      <p>
        Our name spells it out - we make high-quality examination papers and questions for high schools
      </p>
      <p>
        We currently only produce Mathematics papers, but we do plan to extend our services to other subjects, primarily English and the Sciences
      </p>
      <p>
        If you would like to see our order form and price list for the next batch of exams, you'll find it here
      </p>
      <p>
        If you've bought some of our resources and would like to provide feedback, or if you simply have any specific questions, please contact us here
      </p>
    </span>

    <span style={{fontSize: '1.8rem'}}>
      About the writer
    </span>

    <span>
      <p>
        I'm a third year student at UNSW Sydney, currently studying a double degree in Advanced Maths (Statistics major) and Computer Science. I graduated as the DUX student from Al-Faisal College in 2020 with an ATAR of 99.80, achieving 100 in Extension 1 Maths (9th in state) and 98 in Extension 2.
      </p>
      <p>
        For the two and a half years since I left school, I've been tutoring Advanced and Extension 1 Maths to Year 11 and 12 students at Profectus High School Tutoring (based in Auburn) and - aside from minor contributions by others - I've also developed the entire suite of resources for these classes. This constitutes over 25 work booklets, each with collections of worked examples and questions I've prepared for my students, going through the entirety of the Advanced/Extension 1 mathematics syllabi, alongside a few tests/quizzes I've created for various topics.
      </p>
      <p>
        In my first year of university (2021), I co-wrote a pair of Mock HSC Extension 1 and 2 Mathematics papers for a (currently dormant) Discord server that I'm part of, named The Lambert Network. I was also the lead writer for the Extension 1 paper, preparing the majority of the questions for the final product. I've linked the papers at the bottom of this bio. Please note that these papers are quite challenging (as they were intended to be), and neither reflect the actual difficulty of the HSC, nor the planned difficulty of the papers I'm working on at the moment. My work on these papers has been recognised on the 'Events' of the Lambert Network website (see link below).
      </p>
    </span>

  </div>);
}

const HomePageCont = () => {
  return (<div className="text-segment" style={{paddingLeft: '15%', paddingRight: '15%', paddingTop: '40px', fontFamily: 'Quicksand, sans-serif'}}>
    
    <p>
    Hello from Zeta Examination Materials! We've started off in 2023 with our first set of HSC Mathematics trial papers for the Advanced and Extension 1 syllabi.
    </p>
    
    <p>
      You can find our 2023 HSC trial papers for Advanced and Extension 1 Mathematics <Link to={`/past`} style={{textDecoration: 'none', color: 'black'}}>here.</Link>
    </p>

    <p>
      You can find the order form for our 2024 HSC trials <Link to={`/order`} style={{textDecoration: 'none', color: 'black'}}>here.</Link>
    </p>

  </div>);
}

const Contact = () => {
  return (<div className="text-segment" style={{paddingLeft: '15%', paddingRight: '15%', paddingTop: '40px', fontFamily: 'Quicksand, sans-serif'}}>
    <span style={{fontSize: '3rem'}}>
      Contact
    </span>
    
    <p>
      P: 0403 728 308
    </p>
    
    <p>
      E: zetatrials@gmail.com
    </p>
  </div>);
}

const Past = () => {
  return (
    <div style={{paddingLeft: '15%', paddingRight: '15%', paddingTop: '40px', fontFamily: 'Quicksand, sans-serif'}}>
      <div style={{fontSize: '3rem'}}>
        2023 Papers
      </div>
      <div>
        <div>
          Zeta HSC Mathematics Advanced Trial Paper 2023: <a>question paper</a>, <a>solutions</a>
        </div>
        <div>
          Zeta HSC Mathematics Extension 1 Trial Paper 2023: <a>question paper</a>, <a>solutions</a>
        </div>
      </div>
      
    </div>
  );
}

const Order = () => {
  return (
  <div className="text-segment" style={{paddingLeft: '15%', paddingRight: '15%', paddingTop: '40px', fontFamily: 'Quicksand, sans-serif'}}>
    Hello from Zeta Examination Materials! We've started off in 2023 with our first set of HSC Mathematics trial papers for the Advanced and Extension 1 syllabi.
        
    <div>
      You can find our 2023 HSC trial papers for Advanced and Extension 1 Mathematics here.  
    </div>
    <div>
      You can find the order form for our 2024 HSC trials here. 
    </div>

  </div>
  );
}


const HomeScreen = () => {

  return <div style={{height: '100vh'}}>
    <div className="header" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100px', width: '100%', borderBottom: '0.02rem solid #cccccc'}}>
      <div style={{float: 'left'}}>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <img src={logo} style={{width: '172px', height: '100px'}}/>
        </Link>
      </div>

      <div style={{display: 'flex', float: 'right', height: '100%'}}>
        <Link to={`about`} style={{textDecoration: 'none', color: 'black'}}>
          <Navblock style={{fontFamily: 'Quicksand, sans-serif'}}>
            About
          </ Navblock>
        </Link>
        <Link to={`contact`} style={{textDecoration: 'none', color: 'black'}}>
          <Navblock style={{fontFamily: 'Quicksand, sans-serif'}}>
            Contact
          </ Navblock>
        </Link>
        <Link to={`past`} style={{textDecoration: 'none', color: 'black'}}>
          <Navblock style={{fontFamily: 'Quicksand, sans-serif'}}>
            Past Exams
          </ Navblock>
        </Link>
        <Link to={`order`} style={{textDecoration: 'none', color: 'white'}}>
          <Navblock $primary style={{fontFamily: 'Quicksand, sans-serif'}}>
            Order Exams
          </ Navblock>
        </Link>
      </div>
    </div>
    <div className="cover-image" style={{width: '100%', height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
      <img src={bn} style={{maxHeight: '30vh'}}/>
    </div>

    <Outlet/>

    <div className="footer" style={{position: 'fixed', width: '100%', bottom: '0', backgroundColor: '#dddddd', fontFamily: 'Quicksand, sans-serif', fontSize: '0.7rem'}}>
      Copyright © 2023 Zeta Examination Materials <br/>
      <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
    </div>
  </div>
}



const ErrorPg = () => {
  return <div>An error occurred</div>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <ErrorPg />,
    children: [
      {
        index: true,
        element: <HomePageCont />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'order',
        element: <Order />
      },
      {
        path: 'past',
        element: <Past />
      }
    ]
  },
]);

function App() {
  

  return (
    <RouterProvider router={router} />
  );
}

export default App;
