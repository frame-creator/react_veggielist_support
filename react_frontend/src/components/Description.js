import React from 'react';
import './Description.css';
import Phone1 from '../images/veggie_pm1.png';
import Phone2 from '../images/veggie_pm2.png';

const Description = () => {
 return (
 <React.Fragment>
 <div className = "section-description">
 <div className = "container grid grid--two-columns grid-center-v">
 
<div className = "description-image-box">
<img src={Phone1} alt="app1 on iPhone" className="app-screen-one"/>
 
</div>

<div className = "description-text-box">
<h1 className = "description-heading-primary">    
         채식 메뉴 식당을 찾아 보세요.
</h1>
<p className = "description-text">

채식메뉴가 있는 식당을 등록도 하고 함께 찾아볼 수 있어요. 
채식 메뉴가 있는 식당 정보를 등록하고 같이 공유해 보세요.
</p>

</div>
 </div>


 <div className = "container grid grid--two-columns grid-center-v">
 


<div className = "description-text-box">

<h1 className = "description-heading-primary">    
         건강도 함께 챙기세요.
</h1>
<p className = "description-text">
비타민과 미네랄이 풍부한 채소와 견과류, 콩, 통곡물 위주의 건강 메뉴를 이용하면 탄소배출을 줄이고 건강도 챙길 수 있어요.

지구와 나를 위해 채식 메뉴가 있는 맛집을 랜선 여행하세요.
 </p>

</div>

<div className = "description-image-box">
<img src={Phone2} alt="app2 on iPhone" className="app-screen-one"/>
 
</div>
 </div>
 </div>

 </React.Fragment>
)
}

export default Description;