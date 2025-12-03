import React from 'react';
import Home from './Home';
import Card1 from './Card1';
import Survices from './Survices';
import Brands from './Brands';
import Review from './review/Review';
import SurviceCard from './SurviceCard';
import ProjectOverview from './ProjectOverviwe/ProjectOverview';
import HeroSection from './HeroSection/HeroSection';

const reviwsload=fetch("/reviews.json")
    .then(res=>res.json())
   
const Homepage = () => {
  
    return (
        <div className='w-full overflow-hidden'>
              <Home/>
            <HeroSection/>
            <Brands/>
            {/* <Card1/> */}
            {/* <Survices/> */}
            <ProjectOverview/>
            
            <SurviceCard/>
           <Review reviwsload={reviwsload}></Review>
        </div>
    );
};

export default Homepage;