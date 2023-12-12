import styled from "styled-components";

export const Wrapper = styled.div`
padding-top: 100px;
height: 100%;
max-width: 100%;
padding-left: 30px;


@media (min-width: 1024px){
  .swiper-pagination {
    display: none;
  }
}

@media (max-width: 1024px) {
  margin-top:40%;

  .swiper-button-prev,
    .swiper-button-next {
      display: none;
  }

  .swiper-pagination {
    display: block
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
}

.swiper-button-disabled {
  display: none;
}

`;

export const SwiperSlide = styled.div`
  height: 270px;
  width: 70%;
  padding-left: 10%;
  margin-bottom: 20%;
  
`

export const Title = styled.div`
  color: #3877EE;
  //font-family: Bebas Neue;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 30px */
  text-transform: uppercase;
  padding-bottom: 15px;
`

export const Description = styled.div`
  color: #42567A;
  //font-family: PT Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
`
