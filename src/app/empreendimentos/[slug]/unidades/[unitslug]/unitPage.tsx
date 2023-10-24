'use client'

import styled from 'styled-components';
import { Section } from "../../../../components/grid";
import { FontRoboto } from '@/app/fonts';
import { AncorMenu } from '@/app/components/enterpriseAncorMenu';
import { RWebShare } from "react-web-share";

import { AiOutlineShareAlt } from 'react-icons/ai';
import { AboutViews } from '@/app/sections/AboutViews';
import { AboutUnitsDetails } from '@/app/sections/AboutUnitsDetails';
import { AboutValues } from '@/app/sections/AboutValues';
import { AboutContact } from '@/app/sections/AboutContact';
import { AboutUnitGallery } from '@/app/sections/AboutUnitGallery';
import { AboutUnitsPlans } from '@/app/sections/AboutUnitsPlans';
  
  export interface EnterpriseProps {
    unit:any;
    menuItems:any;
    formInputs:any;
  }

export const UnitPage: React.FC<EnterpriseProps> = ({unit, menuItems, formInputs}) => {

    return (
      <>
        <TopFixed>
          <Section className="padding-top" background="var(--color-red-primary)" >
            <ExtraContainer>
              <h5 className={FontRoboto.className}>{unit?.enterprise?.title} - {unit?.type?.name} - {unit?.unit}</h5>
              <div>
                <RWebShare
                  data={{
                    text: unit?.title,
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
          <Section  className="no-mobile" background="var(--color-grey-100)" padding="0">
            <AncorMenu menuItems={menuItems}/>
          </Section>
        </TopFixed>
        <div id="galeria">
            <AboutUnitGallery
                photos={unit?.galleries?.filter((gallery : any) => gallery?.title === 'Galeria de imagens')[0].files}
            />
        </div>
        {unit?.differentials.length > 0 &&
        <div id="informacoes">
            <AboutUnitsDetails
                aboutDetails={unit?.differentials}
                unit={unit}
            />
        </div>}
        {unit?.view_from_apartment.length > 0 &&
        <div id="vista">
            <AboutViews
                aboutImages={unit?.view_from_apartment}
            />
        </div>}
        {unit?.galleries?.filter((gallery : any) => gallery.title === 'Galeria de plantas')[0].files.length > 0 &&
        <div id="planta">
            <AboutUnitsPlans
                photos={unit?.galleries?.filter((gallery : any) => gallery.title === 'Galeria de plantas')[0].files}
            />
        </div>}
        {unit?.offers.length > 0 &&
        <div id="valores">
            <AboutValues
                aboutValues={unit?.offers}
            />
        </div>}
        <div id="disponiveis">
            <AboutContact
                formInputs={formInputs}
            />
        </div>
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
  top:58px;
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

    span {
        @media(max-width:768px){
            display:none;
        }
    }
  }

  @media(max-width:1640px){
    padding:0 15px;
  }
`;