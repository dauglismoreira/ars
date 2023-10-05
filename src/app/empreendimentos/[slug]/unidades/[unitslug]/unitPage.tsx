'use client'

import styled from 'styled-components';
import { Section } from "../../../../components/grid";
import { FontRoboto } from '@/app/fonts';
import { AncorMenu } from '@/app/components/enterpriseAncorMenu';
import { RWebShare } from "react-web-share";

import { AiOutlineShareAlt } from 'react-icons/ai';
import { AboutPlans } from '@/app/sections/AboutPlans';
import { AboutViews } from '@/app/sections/AboutViews';
import { AboutUnitsDetails } from '@/app/sections/AboutUnitsDetails';
import { AboutValues } from '@/app/sections/AboutValues';
import { AboutContact } from '@/app/sections/AboutContact';
import { AboutUnitGallery } from '@/app/sections/AboutUnitGallery';
  
  export interface EnterpriseProps {
    unit:any;
    menuItems:any;
    formInputs:any;
  }

export const UnitPage: React.FC<EnterpriseProps> = ({unit, menuItems, formInputs}) => {

    return (
      <>
        <TopFixed>
          <Section background="var(--color-red-primary)" padding="10px 0">
            <ExtraContainer>
              <h5 className={FontRoboto.className}>{unit.title} - {unit.type} - {unit.unit}</h5>
              <div>
                <RWebShare
                  data={{
                    text: unit.title,
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
          <Section className="ancorFixed" background="var(--color-grey-100)" padding="10px 0 10px">
            <AncorMenu menuItems={menuItems}/>
          </Section>
        </TopFixed>
        <div id="galeria">
            <AboutUnitGallery
                photos={unit.photos}
            />
        </div>
        <div id="informacoes">
            <AboutUnitsDetails
                aboutDetails={unit.differences}
                aboutSkills={unit.skills}
                unit={unit}
            />
        </div>
        <div id="vista">
            <AboutViews
                aboutImages={unit.views}
            />
        </div>
        <div id="planta">
            <AboutPlans
                aboutImages={unit.plans}
            />
        </div>
        <div id="valores">
            <AboutValues
                aboutValues={unit.payment}
                price={unit.price}
            />
        </div>
        <div id="disponiveis">
            <AboutContact
                formInputs={formInputs}
            />
        </div>
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