import { use } from "react";
import Reviwes from "./Reviwes";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";



const Review = ({reviwsload}) => {

  const data=use(reviwsload)
  // console.log(data);
  
    
    
    return (
        
        <div>
            <Swiper
             effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
       
        coverflowEffect={{
          rotate: 30,
          stretch: 50,
          depth: 200,
          scale:0.75,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
            
            >
               
   {data.map(reviw => 
       <SwiperSlide key={reviw.id}>
           <Reviwes reviw={reviw} />
       </SwiperSlide>
   )}

          
        
            </Swiper>

            
        </div>
    );
};

export default Review;