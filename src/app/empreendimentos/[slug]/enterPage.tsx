'use client'

import styled from 'styled-components';
import { Section } from "../../components/grid";
import { FontRoboto } from '@/app/fonts';
import { AboutGallery } from '@/app/sections/AboutGallery';
import { AboutDetails } from '@/app/sections/AboutDetails';
import { EnableUnits } from '@/app/sections/EnabledUnits';
import { AboutPlans } from '@/app/sections/AboutPlans';
import { AboutLocal } from '@/app/sections/AboutLocal';
import { AboutVideos } from '@/app/sections/AboutVideos';
import { AboutTour } from '@/app/sections/AboutTour';
import { AboutBuild } from '@/app/sections/AboutBuild';
import { AncorMenu } from '@/app/components/enterpriseAncorMenu';
import {useState} from 'react';
import { RWebShare } from "react-web-share";

import { AiOutlineShareAlt } from 'react-icons/ai';
import { EnterpriseBanner } from '@/app/sections/EnterpriseBanner';
import { AboutIntro } from '@/app/sections/AboutIntro';
  
  export interface EnterpriseProps {
    enterprise:any;
    menuItems:any;
    aboutButtons:any;
    aboutDetails:any;
  }

export const EnterPage: React.FC<EnterpriseProps> = ({aboutDetails, enterprise, menuItems, aboutButtons}) => {

    const [activeButtonLabel, setActiveButtonLabel] = useState('Empreendimento');
    const [typeChange, setTypeChange] = useState('');

    const handleActiveButtonChange = (label: string) => {
      setActiveButtonLabel(label);
    };

    const handleTypeChange = (label: string) => {
      setTypeChange(label);
    };

    console.log(enterprise)

    return (
      <>
        <TopFixed>
          <Section className="padding-top" background="var(--color-red-primary)">
            <ExtraContainer>
              <h5 className={FontRoboto.className}>{enterprise.title}</h5>
              <div>
                <RWebShare
                  data={{
                    text: enterprise.title,
                    url: window.location.href,
                    title: "Ars Kammer",
                  }}
                  onClick={() => console.log("compartilhado!")}
                >
                  <button><AiOutlineShareAlt size="1.5rem"/><span>Compartilhar</span></button>
                </RWebShare>
              </div>
            </ExtraContainer>
          </Section>
          <Section className="no-mobile" background="var(--color-grey-100)" padding="0">
            <AncorMenu menuItems={menuItems}/>
          </Section>
        </TopFixed>
        <div id="banner"><EnterpriseBanner enterprise={enterprise}/></div>
        <div id="informacoes"><AboutIntro enterprise={enterprise}/></div>
        <div id="galeria"><AboutGallery
          typePhotos={enterprise.types}
          photos={enterprise.galleries}
          onTypeChange={handleTypeChange}
          activeButtonLabel={activeButtonLabel}
          onActiveButtonChange={handleActiveButtonChange}
        /></div>
        <div id="detalhes"><AboutDetails
          activeButtonLabel={activeButtonLabel}
          onActiveButtonChange={handleActiveButtonChange}
          aboutDetails={aboutDetails}
          typeDetails={enterprise.types}
          typeActive={typeChange}
          details={enterprise.galleries}
        /></div>
        <div id="disponiveis"><EnableUnits/></div>
        <div id="plantas"><AboutPlans
          aboutButtons={aboutButtons}
          photos={enterprise.galleries}
          onActiveButtonChange={handleActiveButtonChange}
          typePhotos={enterprise.types}
        /></div>
        <div id="local"><AboutLocal
          enterprise={enterprise}
        /></div>
        <div id="videos"><AboutVideos
          videos={enterprise.video}
        /></div>
        <div id="tour"><AboutTour
          tour={enterprise.virtual_tours}
        /></div>
        <div id="obra"><AboutBuild
          videos={enterprise.videos}
          progress={enterprise.work_progress}
          start={enterprise.begin_date}
          end={enterprise.end_date}
        /></div>
        <BottomFixed>
          <Section className="no-desktop" background="var(--color-grey-100)" padding="0">
            <AncorMenu menuItems={menuItems}/>
          </Section>
        </BottomFixed>
      </>
    )
}

const TopFixed = styled.div`
  position:fixed;
  top:56px;
  z-index:99;
  left:0;
  width:100%;

  .padding-top{
    padding:10px 0;
  }

  @media(max-width:768px){
    .padding-top{
      padding:5px 0;
    }

    span{
      display:none;
    }

    .no-mobile{
      display:none;
    }
  }
`;

const BottomFixed = styled.div`
  position:fixed;
  z-index:99;
  left:0;
  bottom:0;
  width: 100%;


  @media(min-width:768px){
    .no-desktop{
      display:none;
    }
  }
`;

const ExtraContainer = styled.div`
  width:100%;
  max-width:1640px;
  margin:auto;
  display:flex;
  justify-content:space-between;
  align-items:center;

  h5 {
    color:var(--color-grey-0);
  }

  button {
    font-size:var(--h5-text-size);
    color:var(--color-grey-0);
    text-decoration:underline;
    display:flex;
    gap:5px;
    align-items:center;
    border:none;
    background-color:transparent;
    cursor:pointer;
  }

  @media(max-width:1640px){
    padding:0 15px;
  }
`;