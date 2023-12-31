import styled from 'styled-components';
import { Section } from "../../components/grid";
import { FontRoboto } from '@/app/fonts';
import { SectionTitle } from '@/app/components/sectionTitle';
import Image from 'next/image';
import {PiClipboardText} from 'react-icons/pi';

interface ConditionProps{
  name:string;
  description:string;
  value:number;
  icon:any;
}

interface AboutValuesProps {
    aboutValues?:ConditionProps[];
  }

export const AboutValues: React.FC<AboutValuesProps> = ({aboutValues}) => {

    return (
      <ContainerPayment>
        <Section className="paymentPadding">
          <SectionTitle text={'Valores'} mini={true}/>
          <Payment>
            <ContentContainer  className={FontRoboto.className}>
              <ConditionsContainer>
                <Price>R$ {aboutValues && (aboutValues.reduce((accumulator : any, currentOffer : any) => accumulator + currentOffer.value, 0) / 100).toLocaleString('pt-br', {minimumFractionDigits: 2})}</Price>
                  {aboutValues && aboutValues.map((condition, index) => (
                    <Conditions key={index}>
                      <Desc>
                        <Icon><div dangerouslySetInnerHTML={{__html: condition.icon.svg}}/></Icon>
                        <Text>
                          <p>{condition.name}</p>
                          <small>{condition.description}</small>
                        </Text>
                      </Desc>
                      <Value><p>{(condition.value / 100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p></Value>
                    </Conditions>
                  ))}
                  <Conditions>
                    <Desc>
                      <Icon><PiClipboardText size="1.4rem"/></Icon>
                      <Text>
                        <p>Total</p>
                        <small>Valor total</small>
                      </Text>
                    </Desc>
                    <Value><p>R$ {aboutValues && (aboutValues.reduce((accumulator : any, currentOffer : any) => accumulator + currentOffer.value, 0) / 100).toLocaleString('pt-br', {minimumFractionDigits: 2})}</p></Value>
                  </Conditions>
              </ConditionsContainer>
            </ContentContainer>
            <ContactContainer>
                <Image
                    src={'/icons/contract.png'}
                    width={59}
                    height={58}
                    alt={'Proposta'}
                  />
                <p>Fique a vontade para nos enviar um contra proposta.</p>
                <small>Retornaremos em breve.</small>
                <Button className="inverter"><a href={window.location.href + '/interesse'}>Faça uma contra proposta</a></Button>
                <Button><a href={window.location.href + '/interesse'}>Tenho interesse nesta unidade</a></Button>
            </ContactContainer>
          </Payment>
        </Section>
      </ContainerPayment>
    )
}

const ContainerPayment = styled.div`
  .paymentPadding{
    padding:0 0 75px;
  }

  @media(max-width:768px){
    .paymentPadding{
      padding:100px 0 25px;
    }
  }
`;

const ContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    flex:3;
`;

const ConditionsContainer = styled.div`
  margin:30px 0;

  @media(max-width:768px){
    margin:0;
  }
`;

const Payment = styled.div`
  display:flex;
  width:100%;
  max-width:940px;
  margin:auto;
  gap:150px;

  @media(max-width:768px){
    flex-direction:column;
    padding:0 20px;
    gap:10px;
  }
`;

const Price = styled.div`
  font-size:28px;
  font-weight:600;

  @media(max-width:768px){
    margin:0 0 10px;
  }
`;

const Conditions = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  padding:20px 0;
  border-bottom:solid 1px var(--color-grey-40);

  @media(max-width:768px){
    flex-wrap:wrap;
  }
`;

const Text = styled.div`
  small{
    color:var(--color-grey-60);
    font-size:var(--overline);
  }
`;

const Icon = styled.div`

`;

const Desc = styled.div`
  display:flex;
  gap:8px;

  @media(max-width:768px){
    width:50%;
  }
`;

const Value = styled.div`
  color:var(--color-grey-60);
`;

const ContactContainer = styled.div`
  flex:2;
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  margin-top:20px;

  small{
    color:var(--color-grey-60);
    margin:5px 0 10px;
  }

  img{
    margin-bottom:20px;
  }

  @media(max-width:768px){
    text-align:left;
    img{
      display:none;
    }
    small{
      display:none;
    }
  }
`;

const Button = styled.button`
  color:var(--color-red-primary);
  border:solid 1px var(--color-red-primary);
  height:48px;
  width:290px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:10px 0;
  background-color:transparent;
  cursor:pointer;

  &:hover{
    color:var(--color-grey-100);
    border:solid 1px var(--color-grey-100);
  }

  &.inverter{
    color:var(--color-grey-100);
    border:solid 1px var(--color-grey-100);

    &:hover{
      color:var(--color-red-primary);
      border:solid 1px var(--color-red-primary);
    }
  }

  @media(max-width:768px){
    margin-top:20px;
    margin-bottom:0;
    width:100%;
  }
`;