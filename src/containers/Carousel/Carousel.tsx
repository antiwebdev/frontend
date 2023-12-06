import React, { FC } from 'react'

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { IItems } from "../Layout/Layout";

import * as Styled from './Carousel.styles'

interface TCarousel {
    items: Array<IItems>
}

const Carousel: FC<TCarousel>  = ({
    items
}) => {
    return(
        <Styled.Wrapper>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={80}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper: any) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    items.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Styled.SwiperSlide>
                                <Styled.Title>
                                    {item.date}
                                </Styled.Title>
                                <Styled.Description>
                                    {item.description}
                                </Styled.Description>
                            </Styled.SwiperSlide>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Styled.Wrapper>
    )
}

export default Carousel
