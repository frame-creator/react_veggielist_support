import React from "react";
import './Hero.css';
import Lottie1 from '../images/lottie1.gif';
import Lottie2 from '../images/lottie2.gif';
import Lottie3 from '../images/lottie3.gif';
import Android from '../images/download-app-android.png';
import Ios from '../images/download-app.svg';
import Logo from '../images/logo.png';
const Hero = () => {
    return (
    <React.Fragment>
        <div className="logo-box">
       
  
        
       <img src={Logo} alt="logo" className="logo"/>
           <a className="mobile-nav-icon js--nav-icon"><i className="ion-navicon-round"></i></a>
       </div>
    <section className="section-hero">
    
    <div className = "hero"> 
    <div className = "hero-text-box">
    <h1 className = "heading-primary">    
         베지리스트
    </h1>
     <p className = "hero-sub-description">
         내가 찾던 채식 메뉴 식당 리스트 
     </p>
     <p className = "hero-description">
          더 이상 채식 메뉴 식당을 찾아 헤매지 마세요.
     </p>
     <a href="" className="btn-app rec"><img src={Ios} alt="App Store Button"/></a>
     <a href="" className="btn-app-two rec"><img src={Android}  alt="Play Store Button"/></a>
          
     </div>
     <div className="hero-img-box">
     <img src={Lottie3} alt="right lottie" className="hero-img"/>
    </div>
    </div>
    </section>
    </React.Fragment>
    )
}

export default Hero;