import styled from 'styled-components';
import { Section } from "../../components/grid";
import { SectionTitle } from '@/app/components/sectionTitle';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import {BsFillPlayFill} from 'react-icons/bs';
import {useRef, useState} from 'react';

import 'swiper/css';
import { FontRoboto } from '@/app/fonts';
import { SlideLegend } from '@/app/components/slideLegend';

interface VideoProps{
  url:string;
  alt:string;
  description:string;
}


interface AboutVideosProps{
  videos:VideoProps[];
}

export const AboutVideos: React.FC<AboutVideosProps> = ({videos}) => {


    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handlePlayClick = () => {
      if (videoRef.current) {
        if (!isPlaying) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
  
        setIsPlaying(!isPlaying);
      }
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

    return (
      <VideosContainer>
        <Section className="videosPadding">
            <SectionTitle text={'Vídeos'}/>
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
                    className={`videosSwiper`}
                >
                    {videos.map((item, index) => (
                        <SwiperSlide key={index}>
                          <VideoContainer>
                            <div dangerouslySetInnerHTML={{__html: item.url}}/>
                          </VideoContainer>  
                          {!isPlaying && (
                            <PlayButton>
                              <BsFillPlayFill size="2rem" onClick={handlePlayClick} />
                            </PlayButton>
                          )}
                          <SlideLegend data={videos} index={index} description={item.description}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <ContainerNav>
                    <CustomNavButton onClick={handlePrevClick} className="custom-prev-button"><SlArrowLeft size="2rem"/></CustomNavButton>
                    <CustomNavButton onClick={handleNextClick} className="custom-next-button"><SlArrowRight size="2rem"/></CustomNavButton>
                </ContainerNav>
            </ContainerSwiper>
        </Section>
      </VideosContainer>
    )
}

const VideosContainer = styled.div`
  .videosPadding{
    padding:0 0 75px;
  }
  @media(max-width:768px){
    .videosPadding{
      padding:75px 0 0;
    }
  }
`;

const VideoContainer = styled.div`
  iframe{
    width:calc(100% - 40px);
    margin:auto;
    height:673px;
  }

  @media(max-width:768px){
    iframe{
      height:193px;
      width:100%;
    }
  }
`;

const ContainerSwiper = styled.div`
    max-width:1020px;
    margin:60px auto 30px;
    position:relative;
    padding:0 20px;

    .videosSwiper{
        width:calc(100% - 40px);
    }

    @media(max-width:768px){
      margin:30px auto 30px;

      video {
        height:193px;
        width:100%;
      }

      .videosSwiper{
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
      transform: translateY(500%);

      &.custom-next-button{
        right:0px;
      }

      &.custom-prev-button{
        left:0px;
      }
    }
`;

const PlayButton = styled.div`
    width:80px;
    height:80px;
    border:solid 5px var(--color-red-primary);
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    transition:0.3s;
    position:absolute;
    top:49%;
    left:48%;
    transform:translate(-50%, -50%);

    svg {
      color:var(--color-red-primary);
      margin:0 0 0 5px;
    }
`;