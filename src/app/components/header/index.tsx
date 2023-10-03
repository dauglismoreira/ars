'use client';

import styled from 'styled-components';
import { Section } from '../grid';
import { useEffect, useState } from 'react';

export const Header = () => {

  const [home, setHome] = useState(false)

  useEffect(() => {
    if (window.location.pathname === "/") {
      setHome(true)
    }
  },[])

    return(
        <BarContent>
        <Section background="var(--color-grey-0)" padding={'0'}>
            {home ?
            <ExtraContainerHome>
                <a href="./../../" target="_parent"><Logo cover="/images/logo_color.png"/></a>
            </ExtraContainerHome>
            :
            <ExtraContainer>
              <a href="./../../../../../" target="_parent"><Logo cover="/images/logo_color.png"/></a>
              <a href="./../../../../../" target="_parent"><span>Ver todos os empreendimentos</span></a>
            </ExtraContainer>
            }
        </Section>
        </BarContent>
    )
}

const BarContent = styled.div`
  position:fixed;
  width:100%;
  z-index:99;
`;

const ExtraContainerHome = styled.div`
  width:100%;
  max-width:1640px;
  height:57px;
  margin:auto;

  @media(max-width:1640px){
    padding:0 20px;
  }

  @media(max-width:768px){
    display:flex;
    justify-content:center;
    height:58px;
    align-items:center;
  }
`;


const ExtraContainer = styled.div`
  width:100%;
  max-width:1640px;
  height:57px;
  margin:auto;
  display:flex;
  justify-content:space-between;
  align-items:center;

  @media(max-width:1640px){
    padding:0 20px;
  }

  @media(max-width:768px){
    height:58px;
  }

  span{
    font-size:var(--overline);
    color:var(--color-red-primary);
    text-decoration:underline;
    font-weight:500;
  }
`;



const Logo = styled.div<{cover: string}>`
  background-image:url('${props => props.cover}');
  background-size:contain;
  background-position:center center;
  background-repeat:no-repeat;
  height:50px;
  width:95px;

  @media(max-width:768px){
    height:35px;
    width:95px;
  }
`;