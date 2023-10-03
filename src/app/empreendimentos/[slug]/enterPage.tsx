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

    const handleActiveButtonChange = (label: string) => {
      setActiveButtonLabel(label);
    };

    return (
      <>
        <TopFixed>
          <Section background="var(--color-red-primary)" padding="10px 0">
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
                  <button><AiOutlineShareAlt size="1.5rem"/>Compartilhar</button>
                </RWebShare>
              </div>
            </ExtraContainer>
          </Section>
          <Section background="var(--color-grey-100)" padding="10px 0 10px">
            <AncorMenu menuItems={menuItems}/>
          </Section>
        </TopFixed>
        <div id="banner"><EnterpriseBanner enterprise={enterprise}/></div>
        <div id="informacoes"><AboutIntro enterprise={enterprise}/></div>
        <div id="galeria"><AboutGallery
          photos={enterprise.enterprise_gallery}
          activeButtonLabel={activeButtonLabel}
          onActiveButtonChange={handleActiveButtonChange}
          aboutButtons={aboutButtons}
        /></div>
        <div id="detalhes"><AboutDetails
          activeButtonLabel={activeButtonLabel}
          onActiveButtonChange={handleActiveButtonChange}
          aboutDetails={aboutDetails}
        /></div>
        <div id="disponiveis"><EnableUnits/></div>
        <div id="plantas"><AboutPlans
          aboutButtons={aboutButtons}
          aboutImages={enterprise.aboutImages}
        /></div>
        <div id="local"><AboutLocal
          enterprise={enterprise}
        /></div>
        <div id="videos"><AboutVideos
          videos={enterprise.videos}
        /></div>
        <div id="tour"><AboutTour
          tour={enterprise.tour}
        /></div>
        <div id="obra"><AboutBuild
          videos={enterprise.videos}
          progress={enterprise.progress}
        /></div>
      </>
    )
}

const TopFixed = styled.div`
  position:fixed;
  top:58px;
  z-index:99;
  left:0;
  width:100%;
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