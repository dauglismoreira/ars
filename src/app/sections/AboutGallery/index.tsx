'use client'

import styled from 'styled-components';
import { Section } from "../../components/grid";
import Image from 'next/image';
import { SectionTitle } from '@/app/components/sectionTitle';
import { ContainerButtons } from '@/app/components/containerButtons';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Fancybox from './Fancybox';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import 'swiper/css';
import { FontRoboto } from '@/app/fonts';
import { SlideLegend } from '@/app/components/slideLegend';
import getStorageFile from '@/helpers/getStorageFile';
  
interface PhotoImage {
    title: string;
    files: {
      path: string;
      alt: string;
    }[];
  }

  interface AboutGalleryProps {
    activeButtonLabel: string;
    onActiveButtonChange: (label: string) => void;
    onTypeChange: (label: string) => void;
    photos:PhotoImage[];
    typePhotos:any;
  }

export const AboutGallery: React.FC<AboutGalleryProps> = (props) => {
  

  const { activeButtonLabel, onActiveButtonChange } = props;
  const [swiperClass, setSwiperClass] = useState('');

  const handleActiveButtonChange = (label : string) => {
     setSwiperClass('fade-out');
     setTimeout(() => {
     onActiveButtonChange(label);
       setSwiperClass('fade-in');
     }, 500);
  };

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


  const allFiles: any[] = [];
  props.typePhotos.forEach((type:any) => {
    type.galleries
      .filter((gallery:any) => gallery.title === "Galeria de imagens")[0]
      .files.forEach((file:any) => {
        allFiles.push({file: file, title: type.name});
      });
  });

  const handleSlideChange = (swiper:any) => {
    props.onTypeChange(allFiles[swiper.realIndex].title);
  };

  const [aboutButtons, setAboutButtons] = useState<any[]>([]);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const updatedAboutButtons: any[] = [];

    if(props.photos.filter(photo => photo.title === "Galeria: Empreendiemento")[0].files.length > 0){
      updatedAboutButtons.push({
        label:'Empreendimento',
        link:'#'
      },)
    }
    if(props.photos.filter(photo => photo.title === "Galeria: Área de lazer")[0].files.length > 0){
      updatedAboutButtons.push({
        label:'Lazer',
        link:'#'
      },)
    }
    if(allFiles.length > 0){
      updatedAboutButtons.push({
        label:'Apartamento',
        link:'#'
      },)
    }
    setAboutButtons(updatedAboutButtons);
  }, [props])
  /* eslint-disable react-hooks/exhaustive-deps */
  
    return (
      <ContainerGallery>
        {aboutButtons.length > 0 &&
        <Section className="galleryPadding">
              <SectionTitle text={'Conheça'}/>
              <ContainerButtons
                buttons={aboutButtons}
                onActiveButtonChange={handleActiveButtonChange}
              />
              <ContainerSwiper  className={FontRoboto.className}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    centeredSlides={true}
                    onSlideChange={handleSlideChange}
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
                    className={`mySwiper ${swiperClass}`}
                >
                    {activeButtonLabel === 'Empreendimento' &&
                    props.photos.filter(photo => photo.title === "Galeria: Empreendiemento")[0].files.map((item, index) => (
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
                                <SlideLegend data={props.photos.filter(photo => photo.title === "Galeria: Empreendiemento")[0].files} index={index + 1} description={'Empreendimento'}/>                            </Fancybox>
                        </SwiperSlide>
                    ))}
                    {activeButtonLabel === 'Lazer' &&
                    props.photos.filter(photo => photo.title === "Galeria: Área de lazer")[0].files.map((item, index) => (
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
                                <SlideLegend data={props.photos.filter(photo => photo.title === "Galeria: Área de lazer")[0].files} index={index + 1} description={'Lazer'}/>                            </Fancybox>
                        </SwiperSlide>
                    ))}
                    {activeButtonLabel === 'Apartamento' &&
                    allFiles.map((file : any, index : number) => (
                        <SwiperSlide key={index}>
                            <Fancybox options={{ infinite: false }} delegate="[data-fancybox='gallery']">
                                {/* eslint-disable */}
                                <img
                                    width={900}
                                    height={670}
                                    alt={file.file.alt}
                                    loading="eager" 
                                    data-fancybox="gallery"
                                    src={getStorageFile(file.file.path)}/>
                                    {/* eslint-disable */}
                                <SlideLegend data={allFiles} index={index + 1} description={file.title}/>
                              </Fancybox>
                        </SwiperSlide>
                    ))
                    }
                    <ContainerNav>
                        <CustomNavButton onClick={handlePrevClick} className="custom-prev-button"><SlArrowLeft size="2rem"/></CustomNavButton>
                        <CustomNavButton onClick={handleNextClick} className="custom-next-button"><SlArrowRight size="2rem"/></CustomNavButton>
                    </ContainerNav>
                </Swiper>
            </ContainerSwiper>
        </Section>}
      </ContainerGallery>
    )
}

const ContainerGallery = styled.div`
  .galleryPadding{
      padding:200px 0 100px;
  }

  @media(max-width:768px){
    .galleryPadding{
      padding:100px 0 40px;
    }
  }
`;

const ContainerNav = styled.div`
    width:100%;
    max-width:900px;
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

const ContainerSwiper = styled.div`
    margin-top:30px;

    .fade-out{
        transition: 0.3s ease-in-out;
        opacity:0;
    }

    .fade-in{
        transition: 0.3s ease-in-out;
        opacity:1;
    }

    @media(max-width:768px){
      padding:0 20px;
      img {
        height:257px;
        width:100%;
      }

      .swiper-wrapper{
        padding-bottom:30px;
      }
    }
`;