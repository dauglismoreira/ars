import styled from 'styled-components';
import { Section } from "../../components/grid";
import { SectionTitle } from '@/app/components/sectionTitle';
import {BsFillPlayFill} from 'react-icons/bs';

import 'swiper/css';
import { FontRoboto } from '@/app/fonts';

interface AboutTourProps{
  tour:any;
}

export const AboutTour: React.FC<AboutTourProps> = ({tour}) => {

    return (
      <TourContainer>
        <LineDivider></LineDivider>
        <Section className="tourPadding">
            <SectionTitle text={'Tour 360'}/>
            <p className="no-desktop">Visite sem sair de casa.</p>
            <ContainerSwiper  className={FontRoboto.className}>
                <Button className="no-mobile" href={tour.link} target="_blank">Iniciar Tour 360</Button>
                <TourCover background={tour.cover} onClick={() => {
                  setTimeout(() => {
                    window.open(tour.link, '_blank')
                  }, 0);
                }}>
                  <PlayButton>
                    <BsFillPlayFill size="2rem" />
                  </PlayButton>
                </TourCover>
                <Button className="no-desktop" href={tour.link} target="_blank">Iniciar Tour 360</Button>
            </ContainerSwiper>
        </Section>
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
`;

const TourCover = styled.div<{background: string}>`
    width:100%;
    max-width:900px;
    height:670px;
    background-size:cover;
    background-position:center center;
    position:relative;
    background-image:url('${props => props.background}');

    @media(max-width:768px){
      height:257px;
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
`;