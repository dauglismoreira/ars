'use client';

import styled from 'styled-components';
import { Col, Row, Section } from '../grid';
import { CopyRight } from './copy';
import { FontRoboto } from './../../fonts';
import useScreenSize from './../../../hooks/useScreenSize';
import {dataFooter} from './data';

export const Footer = () => {
    const isLargeScreen = useScreenSize(768);

    const formatPhoneNumber = (phoneNumber: string) => {
      if(phoneNumber.length === 11){
        const part1 = phoneNumber.substring(0, 2);
        const part2 = phoneNumber.substring(2, 7);
        const part3 = phoneNumber.substring(7, 11);
        return (
          <>({part1}) {part2}-{part3}</>
        );
      }
      if(phoneNumber.length === 10){
        const part1 = phoneNumber.substring(0, 2);
        const part2 = phoneNumber.substring(2, 6);
        const part3 = phoneNumber.substring(6, 10);
        return (
          <>({part1}) {part2}-{part3}</>
        );
      }
  };

    return(
        <>
        <Section background="var(--color-grey-100)" padding={'70px 0 10px'}>
            <ExtraContainer className={FontRoboto.className}>
                <Row breakpoint={!isLargeScreen.isLargeScreen ? 'true' : 'false'}>
                  <Col flex={5} className="info" padding={'0'}>
                    <Logo />
                    {!isLargeScreen.isLargeScreen && <Label>Sede</Label>}
                    <Address>{dataFooter.address} {dataFooter.district} - {dataFooter.city}/{dataFooter.state} {isLargeScreen.isLargeScreen ? <br></br> : ' - '}88220-000</Address>
                    {isLargeScreen.isLargeScreen && <Email>{dataFooter.email}</Email>}
                  </Col>
                  <Col flex={6} padding={'0'}>
                      <Label>Contato</Label>
                      <Phones>
                        {dataFooter.contact_phone.map((phone :any, index: number) => (
                          <li key={index}>{formatPhoneNumber((phone))}</li>
                        ))}
                      </Phones>
                  </Col>
                  {!isLargeScreen.isLargeScreen && <Email>{dataFooter.email}</Email>}
                  <Col flex={3} padding={'0'}>
                      <Label>Plantão Comercial</Label>
                      <Phones>
                        {dataFooter.emergency_number.map((phone: any, index: number) => (
                          <li key={index}>{formatPhoneNumber(phone)}</li>
                        ))}
                      </Phones>
                  </Col>
                  {isLargeScreen.isLargeScreen && <Col flex={2}></Col>}
                </Row>
                <LineDivider />
                <CopyRight text={dataFooter.policy_text} link={dataFooter.policy_link} />
            </ExtraContainer>
        </Section>
        </>
    )
}

const ExtraContainer = styled.div`
  width:100%;
  max-width:1640px;
  margin:auto;

  .info{
    padding:45px 0;
    gap:35px;
    display:flex;
    flex-direction:column;
    jusitfy-content:space-around;
  }

  @media(max-width:1640px){
    padding:0 15px;

    .info{
      padding:32px 0;
      gap:0;
    }
  }
`;

const Logo = styled.div`
  background-image:url('/images/logo_invert.png');
  background-size:cover;
  background-position:center center;
  background-repeat:no-repeat;
  height:90px;
  width:210px;

  @media(max-width:768px){
    height:47px;
    width:112px;
  }
`;

const Address = styled.p`
  color:var(--color-grey-0);
  max-width:320px;
  line-height:1.6;
  font-weight:300;

  @media(max-width:768px){
    max-width:320px;
    margin-bottom:-30px;
  }
`;

const Email = styled.div`
  color:var(--color-grey-0);

  @media(max-width:768px){
    margin-top:32px;
    margin-bottom:10px;
  }
`;

const LineDivider = styled.div`
  width:100%;
  height:1px;
  background-color:var(--color-grey-0);

  @media(max-width:768px){
    margin:50px 0 10px;
  }
`;

const Label = styled.div`
  color:var(--color-red-primary);
  margin:95px 0 50px;
  font-weight:500;

  @media(max-width:768px){
    margin:30px 0 20px;
  }
`;

const Phones = styled.div`
  color:var(--color-grey-0);
  display:flex;
  gap:35px;

  li{
    list-style:none;
  }

  @media(max-width:768px){
    flex-direction:column;
    gap:15px;
  }
`;