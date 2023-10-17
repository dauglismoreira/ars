'use client'

import styled from 'styled-components';
import { Section } from '../grid';
import { BiShareAlt } from 'react-icons/bi';


interface UnitsFixedTitleProps {
    unitsResum: any;
}

export const UnitsFixedTitle: React.FC<UnitsFixedTitleProps> = ({
    unitsResum
}) => {

  return (
    <ContainerFixedTitle>
        <Section className="fixedTitle" background="var(--color-grey-100)">
            <ExtraContainer>
            <Logo>
                <Cover background={unitsResum.logo}></Cover>
            </Logo>
            <MiddleContainer>
                <Dates>
                    <Now>{unitsResum.mes_atual}<span> • CUB-SC R$ {unitsResum.cub_value}</span></Now>
                    <Delivery>Previsão de entrega: <span>{unitsResum.delivery}</span></Delivery>
                </Dates>
                <TotalUnits>
                    <p><span className="active"></span>{unitsResum.units_available} unidades disponíveis</p>
                    <p><span className="inactive"></span>{unitsResum.units_unavailable} unidades indisponíveis</p>
                </TotalUnits>
            </MiddleContainer>
            <Share>
                <BiShareAlt size="1.5rem" color="var(--color-grey-0)"/>
            </Share>
            </ExtraContainer>
        </Section>
    </ContainerFixedTitle>  
  );
}

const ContainerFixedTitle = styled.div`
    .fixedTitle{
        position:fixed;
        padding:0;
    }

    @media(max-width:768px){
      .fixedTitle{
        padding:5px 0;
      }
    }
`;

const ExtraContainer = styled.div`
  max-width:1640px;
  margin:auto;
  display:flex;
  padding:10px 20px;
  align-items:center;

  @media(max-width:768px){
    padding:5px 20px 0;
  }
`;

const Logo = styled.div`
  width:120px;

  @media(max-width:768px){
    width:70px;
  }
`;

const Cover = styled.div<{background:string}>`
  background-image:url('${props => props.background}');
  background-position:center center;
  background-size:contain;
  width:90px;
  height:84px;

  @media(max-width:768px){
    width:66px;
    height:63px;
  }
`;

const MiddleContainer = styled.div`
    width:calc(100% - 140px);
    display:flex;
    justify-content:space-between;
    padding:0 20px;

    @media(max-width:1100px){
        flex-direction:column;
    }
    @media(max-width:768px){
        width:calc(100% - 70px);
        padding:0 10px;
      }
`;

const Dates = styled.div`
  color:var(--color-grey-0);
`;

const Now = styled.div`
  font-size:var(--h3-text-size);
  text-transform:uppercase;
  span{
    font-size:var(--p-desktop-text-size);
  }

    @media(max-width:768px){
        font-size:var(--overline);
        span{
            font-size:var(--overline);
          }
    }
`;

const Delivery = styled.div`
  font-size:var(--p-desktop-text-size);
  margin-top:5px;
  font-weight:300;

  span{
    font-weight:500;
  }

  @media(max-width:768px){
    font-size:var(--overline);
    }
`;

const TotalUnits = styled.div`
  display:flex;
  gap:20px;
  font-size:var(--p-desktop-text-size);
  color:var(--color-grey-0);

  p{
    display:flex;
    gap:5px;
    align-items:center;
  }

  span{
    width:9px;
    display:block;
    height:9px;
    border-radius:50%;

    &.active{
      background-color:#16B835;
    }

    &.inactive{
      background-color:var(--color-grey-60);
    }
  }

  @media(max-width:1100px){
    margin-top:10px;
    }

    @media(max-width:768px){
        flex-direction:column;
        gap:5px;

        p{
            font-size:var(--overline);
        }
    }
`;

const Share = styled.div`
  width:20px;
  cursor:pointer;
`;