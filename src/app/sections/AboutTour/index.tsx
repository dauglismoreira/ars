import styled from 'styled-components';
import { Section } from "../../components/grid";
import { SectionTitle } from '@/app/components/sectionTitle';
import {BsFillPlayFill} from 'react-icons/bs';

import 'swiper/css';
import { FontRoboto } from '@/app/fonts';
import { useRef, useState } from 'react';

interface AboutTourProps{
  tour:any;
}

export const AboutTour: React.FC<AboutTourProps> = ({tour}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const iframeContainerRef = useRef<HTMLDivElement | null>(null);

  const openFullscreen = () => {
    const container = iframeContainerRef.current;

    if (container) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if ((container as any).mozRequestFullScreen) {
        (container as any).mozRequestFullScreen();
      } else if ((container as any).webkitRequestFullscreen) {
        (container as any).webkitRequestFullscreen();
      } else if ((container as any).msRequestFullscreen) {
        (container as any).msRequestFullscreen();
      }

      setIsFullScreen(true);

      const iframe = container.querySelector('iframe');
      if (iframe) {
        iframe.classList.add('fullscreen-iframe');
      }
    }
  };

    return (
      <TourContainer>
        {tour[0]?.iframe &&
        <>
        <LineDivider></LineDivider>
        <Section className="tourPadding">
            <SectionTitle text={'Tour 360'}/>
            <ContainerSwiper  className={FontRoboto.className}>
              <p>Visite sem sair de casa.</p>
                <Button className="no-mobile" href={'#'} target="_blank" onClick={openFullscreen}>Iniciar Tour 360</Button>
                <TourCover
                  ref={iframeContainerRef}
                  onClick={openFullscreen}
                >
                  <div dangerouslySetInnerHTML={{__html: tour[0]?.iframe}}/>
                </TourCover>
                <Button className="no-desktop" href={'#'} target="_blank" onClick={openFullscreen}>Iniciar Tour 360</Button>
            </ContainerSwiper>
        </Section>
        </>}
      </TourContainer>
    )
}

const TourContainer = styled.div`
  .tourPadding{
    padding:0 0 75px;
  }

  @media(max-width:768px){
    .tourPadding{
      padding:75px 0 0;
    }
    .no-mobile{
      display:none;
    }
  }
  @media(min-width:768px){
    .no-desktop{
      display:none;
    }
  }

  p {
    padding:0 20px;
    color:var(--color-grey-80);
    margin:-25px 0 0;
  }

  .fullscreen-iframe {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    right:0;
    border: none;
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

const ContainerSwiper = styled.div`
    max-width:980px;
    margin:30px auto 30px;
    position:relative;
    padding:0 20px;

    p{
      margin-left:-20px;
      margin-bottom:30px;
      margin-top:-15px;
      color:var(--color-grey-100);
    }
`;

const TourCover = styled.div`
    width:100%;
    max-width:900px;
    height:670px;
    background-size:cover;
    background-position:center center;
    position:relative;

    iframe{
      height:670px!important;
      width:100%!important;
    }
  
    @media(max-width:768px){
      height:257px;

      iframe{
        height:257px!important;
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

const Button = styled.a`
    color:var(--color-grey-100);
    border:solid 1px var(--color-grey-100);
    height:48px;
    width:168px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:20px;

    @media(max-width:768px){
      width:100%;
      margin-top:20px;
      font-weight:600;
    }

    &:hover{
      color:var(--color-red-primary);
      border:solid 1px var(--color-red-primary);
    }
`;