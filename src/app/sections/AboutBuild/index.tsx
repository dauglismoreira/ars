import styled from 'styled-components';
import { Section } from "../../components/grid";
import { SectionTitle } from '@/app/components/sectionTitle';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import {BsFillPlayFill} from 'react-icons/bs';
import {useEffect, useRef, useState} from 'react';

import 'swiper/css';
import { FontRoboto } from '@/app/fonts';
import { ProgressBar } from '@/app/components/progressBar';
import { ContainerButtons } from '@/app/components/containerButtons';
import { SlideLegend } from '@/app/components/slideLegend';


export interface VideoBuild {
  url:string;
  alt:string;
  description:string;
}

export interface AboutBuildProps {
  videos:VideoBuild[];
  progress:any;
}

export const AboutBuild: React.FC<AboutBuildProps> = ({videos, progress}) => {


    const aboutButtons=[
      {
        label:'Andamento',
        link:'#'
      },
      {
        label:'Vídeos',
        link:'#'
      },
    ]


    const [activeButtonLabel, setActiveButtonLabel] = useState('');

    const handleActiveButtonChange = (label : string) => {
        setActiveButtonLabel(label);
    };

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

    const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(0);

    const handleButtonClick = (index: number) => {
        setActiveButtonIndex(index);
    };

    return (
      <BuildContainer>
        <LineDivider></LineDivider>
        <Section className="buildPadding">
            <SectionTitle text={'Obra'}/>
            <p className="no-desktop">Acompanhe a atualizações das obras</p>
            <Dates>
              <p><span>Início:</span> Janeiro/2020</p>
              <p><span>Entrega:</span> Dezembro/2024</p>
            </Dates>
            <ButtonsContainer>
              {aboutButtons.map((button, index) => (
                <Button
                    key={index}
                    active={activeButtonIndex === index}
                    className={FontRoboto.className}
                    onClick={() => handleButtonClick(index)}
                >{button.label}</Button>
              ))}
            </ButtonsContainer>
            {activeButtonIndex === 0 &&
              <ContainerProgress  className={FontRoboto.className}>
                <ProgressBar label="Progresso Total" progress={progress.total}/>
                <ProgressBar label="Fundação" progress={progress.fundation}/>
                <ProgressBar label="Estrutura" progress={progress.structure}/>
                <ProgressBar label="Alvenaria" progress={progress.alvenaria}/>
                <ProgressBar label="Hidráulica e Elétrica" progress={progress.hidraulic}/>
                <ProgressBar label="Pintura e Acabamento" progress={progress.paint}/>
              </ContainerProgress>
            }
            {activeButtonIndex === 1 &&
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
            }
        </Section>
      </BuildContainer>
    )
}

const BuildContainer = styled.div`
  .buildPadding{
    padding:0 0 75px;
  }
  @media(max-width:768px){
    .buildPadding{
      padding:75px 0 75px;
    }
    .no-desktop{
      padding:0 20px;
      margin:-20px 0 0;
      color:var(--color-grey-80);
    }
  }
  @media(min-width:768px){
    .no-desktop{
      display:none;
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

const LineDivider = styled.div`
  @media(min-width:768px){
    display:none;
  }

  height:1px;
  width:calc(100% - 40px);
  margin:20px auto;
  background-color:var(--color-grey-40);
`;

const ContainerProgress = styled.div`
    max-width:980px;
    margin:60px auto 30px;
    position:relative;
    padding:0 20px;

    @media(max-width:768px){
      margin:30px auto 30px;
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


const Dates = styled.div`
    max-width:980px;
    margin:60px auto 40px;
    padding:0 20px;
    display:flex;
    flex-direction:column;
    gap:10px;

    p{
      color:var(--color-grey-60);

      span{
        color:var(--color-grey-100);
      }
    }

    @media(max-width:768px){
      margin:30px auto 40px;
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
        height:257px;
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

const Button = styled.div<{active: boolean}>`
    border:solid 1px ${props => !props.active ? 'var(--color-grey-100)' : 'var(--color-red-primary)'};
    height:48px;
    width:168px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:var(--button-size);
    font-weight:500;
    color: ${props => !props.active ? 'var(--color-grey-100)' : 'var(--color-red-primary)'};
    cursor:pointer;

    &:hover{
        border:solid 1px var(--color-red-primary);
        color: var(--color-red-primary);
    }

    @media(max-width:768px){
        width:auto;
        padding:0 20px;
    }
`;

const ButtonsContainer = styled.div`
    margin:auto;
    max-width:940px;
    position:relative;

    display:flex;
    flex-direction:row;
    gap:32px;

    @media(max-width:768px){
        display:flex;
        overflow-x:auto;
        white-space: nowrap;
        gap:16px;
        padding:0 20px 10px;
        margin-top:-10px;

        ${Button}{
          width:50%;
        }
    }
`;