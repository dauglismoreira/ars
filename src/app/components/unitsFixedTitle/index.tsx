'use client'

import styled from 'styled-components';
import { Section } from '../grid';
import { BiShareAlt } from 'react-icons/bi';
import getStorageFile from '@/helpers/getStorageFile';


interface UnitsFixedTitleProps {
    data:any;
    cub?:any;
}

export const UnitsFixedTitle: React.FC<UnitsFixedTitleProps> = ({
    data, cub
}) => {


  const countStatus = data?.types?.reduce(
    (accumulator : any, currentType : any) => {
      currentType.apartments.forEach((apartment:any) => {
        if (apartment.status === 'Disponível') {
          accumulator.disponivelCount++;
        } else if (apartment.status !== 'Disponível') {
          accumulator.indisponivelCount++;
        }
      });
      return accumulator;
    },
    { disponivelCount: 0, indisponivelCount: 0 }
  );

  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  
  const dataAtual = new Date();
  const mesAtual = meses[dataAtual.getMonth()];

  return (
    <ContainerFixedTitle>
        <Section className="fixedTitle" background="var(--color-grey-100)">
            <ExtraContainer>
            <Logo>
                <Cover background={getStorageFile(data?.logo_image?.path)}></Cover>
            </Logo>
            <MiddleContainer>
                <Dates>
                    <Now>{mesAtual}<span>{cub && '• CUB-SC R$' +  (cub / 100).toLocaleString('pt-br', {minimumFractionDigits: 2})}</span></Now>
                    <Delivery>Previsão de entrega: <span>{data.end_date}</span></Delivery>
                </Dates>
                <TotalUnits>
                    <p><span className="active"></span>{countStatus.disponivelCount} unidades disponíveis</p>
                    <p><span className="inactive"></span>{countStatus.indisponivelCount} unidades indisponíveis</p>
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