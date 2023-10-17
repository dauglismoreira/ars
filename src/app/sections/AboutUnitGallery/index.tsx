'use client'

import styled from 'styled-components';
import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Fancybox from './Fancybox';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FontRoboto } from '@/app/fonts';
import 'swiper/css';
import useScreenSize from '@/hooks/useScreenSize';

interface PhotoImage {
      url: string;
      alt: string;
      description: string;
  }

  interface AboutGalleryProps {
    photos:PhotoImage[];
  }

export const AboutUnitGallery: React.FC<AboutGalleryProps> = ({photos}) => {
  const isLargeScreen = useScreenSize(1200);

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
      <ContainerGallery className={FontRoboto.className}>
        {isLargeScreen.isLargeScreen ?
          <ContainerGridImages>
            <ColLeft>
              <Fancybox options={{ infinite: false }} delegate="[data-fancybox='gallery']">
                <Image
                  width={900}
                  height={670}
                  quality={100}
                  loading="eager" 
                  data-fancybox="gallery"
                  src={photos[0].url} alt={`photos[0].alt`}/>
                </Fancybox>
                <UserViews><p>2 pessoas interessadas nesse apartamento</p></UserViews>
            </ColLeft>
            <ColRight>
              {photos.slice(1,5).map((item, index) => (
                <div className="containerImage" key={index}>
                  <Fancybox options={{ infinite: false }} delegate="[data-fancybox='gallery']">
                      <Image
                          width={900}
                          height={673}
                          quality={100}
                          loading="eager" 
                          data-fancybox="gallery"
                          src={item.url} alt={`Imagem ${index}`}/>
                    </Fancybox>
                </div>
              ))}
              <AllImagesButton data-fancybox="gallery"><Image
              width={25}
              height={16}
              quality={100}
              loading="eager" 
              data-fancybox="false"
              src={'/icons/gallery_thumbnail_FILL0_wght300_GRAD0_opsz48.png'} alt={`Galeria`}
              />Mostrar todas as fotos</AllImagesButton>
            </ColRight>
          </ContainerGridImages>
        :
        <ContainerSwiper>
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
              breakpoints={{
                  640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  },
                  768: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  },
                  1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  },
              }}
              modules={[Navigation, Mousewheel, Keyboard]}
              className={`unitGallery`}
          >
              {photos.map((item, index) => (
                  <SwiperSlide key={index}>
                      <Fancybox options={{ infinite: false }} delegate="[data-fancybox='gallery']">
                          <Image
                              width={900}
                              height={670}
                              quality={100}
                              loading="eager" 
                              data-fancybox="gallery"
                              src={item.url} alt={`Imagem ${index}`}/>
                          </Fancybox>
                  </SwiperSlide>
              ))}
              <ContainerNav>
                  <CustomNavButton onClick={handlePrevClick} className="custom-prev-button"><SlArrowLeft size="2rem"/></CustomNavButton>
                  <CustomNavButton onClick={handleNextClick} className="custom-next-button"><SlArrowRight size="2rem"/></CustomNavButton>
              </ContainerNav>
          </Swiper>
          <UserViews><p>2 pessoas interessadas nesse apartamento</p></UserViews>
        </ContainerSwiper>
        }
      </ContainerGallery>      
    )
}

const ContainerGallery = styled.div`
  margin-top:210px;
  padding:0 30px;
  margin-bottom:20px;

  @media(max-width:768px){
    margin-top:90px;
    padding:0;
  }
`;

const ContainerGridImages = styled.div`
  display:flex;
  gap:10px;
  width:100%;
`;

const AllImagesButton = styled.button`
  background-color:var(--color-grey-100);
  border:none;
  color:var(--color-grey-0);
  height:48px;
  width:218px;
  cursor:pointer;
  font-size:var(--h5-text-size);
  display:flex;
  align-items:center;
  gap:5px;
  justify-content:center;
  position:absolute;
  bottom:30px;
  right:30px;

  &:hover{
    border:solid 1px var(--color-red-primary);
  }
`;

const UserViews = styled.div`
  border:solid 1px var(--color-grey-0);
  border-radius:30px;
  color:var(--color-grey-0);
  padding:5px 15px;
  position:absolute;
  bottom:30px;
  right:120px;

  @media(max-width:768px){
    z-index:99;
    bottom:45px;
    right:auto;
    left:10px;
  }
`;

const ColLeft = styled.div`
  flex:1;
  position:relative;

  img{
    width:100%;
    object-fit:cover;
  }
`;

const ColRight = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:7px 10px;
  flex:1;
  position:relative;
  
  .containerImage{
    width:100%;

    img{
      width:100%;
      height:330px;
      object-fit:cover;
    }
  };
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
        left:20px;
    }

    @media(max-width:768px){
      color: var(--color-grey-0);
      width:20px;
      height:20px;
      transform: translateY(-150%);

      &.custom-next-button{
        right:20px;
      }

      &.custom-prev-button{
        left:20px;
      }
    }
`;

const ContainerSwiper = styled.div`
    @media(max-width:768px){
      position:relative;
      padding:0;
      img {
        height:280px;
        width:100%;
        object-fit:cover;
      }

      .swiper-wrapper{
        padding-bottom:30px;
      }
    }
`;