import styled from 'styled-components';
import { Section } from "../../components/grid";
import { useState } from 'react';
import { SectionTitle } from '@/app/components/sectionTitle';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Fancybox from './Fancybox';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import 'swiper/css';
import { FontRoboto } from '@/app/fonts';
import { SlideLegend } from '@/app/components/slideLegend';
import getStorageFile from '@/helpers/getStorageFile';


  interface AboutPlansProps{
    photos:any;
  }


export const AboutUnitsPlans: React.FC<AboutPlansProps> = (props) => {
    const [contentClass, setContentClass] = useState('');


    const swiper = useSwiper();

    const handlePrevClick = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };


    return (
      <ContainerPlans>
        <Section className="plansPadding">
            <SectionTitle text={'Plantas'}  mini={true}/>
              <ContainerSwiper  className={FontRoboto.className}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    centeredSlides={true}
                    loop={true}
                    navigation={{
                        prevEl: '.custom-prev-button',
                        nextEl: '.custom-next-button',
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    modules={[Navigation, Mousewheel, Keyboard]}
                    className={`mySwiper ${contentClass}`}
                >
                    {props.photos.map((item: any, index: number) => (
                        <SwiperSlide key={index}>
                            <Fancybox options={{ infinite: false }} delegate="[data-fancybox='gallery']">
                                {/* eslint-disable */}
                                <img
                                    width={900}
                                    height={670}
                                    alt={item.alt}
                                    loading="eager" 
                                    data-fancybox="gallery"
                                    src={getStorageFile(item.path)}/>
                                    {/* eslint-disable */}
                                <SlideLegend data={props.photos} index={index + 1} description={'Empreendimento'}/>                            </Fancybox>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <ContainerNav>
                    <CustomNavButton onClick={handlePrevClick} className="custom-prev-button"><SlArrowLeft size="2rem"/></CustomNavButton>
                    <CustomNavButton onClick={handleNextClick} className="custom-next-button"><SlArrowRight size="2rem"/></CustomNavButton>
                </ContainerNav>
            </ContainerSwiper>
        </Section>
      </ContainerPlans>
    )
}

const ContainerPlans = styled.div`
  .plansPadding{
    padding:75px 0 75px;
  }

  @media(max-width:768px){
    .plansPadding{
      padding:100px 0 0;
    }
  }
`;

const ContainerSwiper = styled.div`
    max-width:1020px;
    margin:30px auto;
    position:relative;
    padding:0 20px;

    .mySwiper{
        width:calc(100% - 40px);
    }

    .fade-out{
        transition: 0.3s ease-in-out;
        opacity:0;
    }

    .fade-in{
        transition: 0.3s ease-in-out;
        opacity:1;
    }

    @media(max-width:768px){
      img {
        height:257px;
        width:100%;
      }

      .swiper-wrapper{
        padding-bottom:30px;
      }

      .mySwiper{
        width:100%;
      }
    }
`;

const ContainerNav = styled.div`
    width:100%;
    max-width:1045px;
    margin:auto;
    position:absolute;
    left:49%;
    top:50%;
    transform:translate(-50%, -50%);
    z-index:98;

    @media(max-width:768px){
      padding:0 20px;
      width:calc(100% - 40px);
    }
`;

const CustomNavButton = styled.div`
    color: var(--color-red-primary);
    width:45px;
    height:45px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 50%;
    cursor: pointer;
    z-index:9;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity:0.8;

    &:hover {
        opacity:1;
    }

    &.custom-next-button{
        right:20px;
    }

    &.custom-prev-button{
        left:0px;
    }

    @media(max-width:768px){
      width:20px;
      height:20px;
      transform: translateY(670%);

      &.custom-next-button{
        right:0px;
      }

      &.custom-prev-button{
        left:0px;
      }
    }
`;