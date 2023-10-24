import styled from 'styled-components';
import { Col, Row, Section } from "../../components/grid";
import getStorageFile from '@/helpers/getStorageFile';
  
  interface AboutIntroProps {
    enterprise:any;
  }

export const AboutIntro: React.FC<AboutIntroProps> = ({enterprise}) => {

    return (
      <ContainerSection>
        <Section background="var(--color-grey-100)" className="padding">
            <AboutSectionContainer>
              <Row>
                <Col flex={9}>
                  <Skills>
                    <Skill>
                        <h3>{enterprise.suites?.split(' ')[0]}</h3>
                        <small>{enterprise.suites?.split(' ')[1]}</small>
                    </Skill>
                    <Skill>
                        <h3>{enterprise.parking_spaces?.split(' ')[0]}</h3>
                        <small>{enterprise.parking_spaces?.split(' ')[1]}</small>
                    </Skill>
                    <Skill>
                        <h3>{enterprise.area}</h3>
                        {enterprise.area && <small>privativos</small>}
                    </Skill>
                  </Skills>
                  <LineDivider></LineDivider>
                  <Content>
                    <h3>{enterprise.subtitle}</h3>
                    <p>{enterprise.description}</p>
                  </Content>
                </Col>
                <Col flex={4} className="no-mobile">
                  {enterprise?.vertical_image?.path && <AboutImage image={getStorageFile(enterprise?.vertical_image?.path)}></AboutImage>}
                </Col>
              </Row>
            </AboutSectionContainer>
        </Section>
        </ContainerSection>
    )
}

const ContainerSection = styled.div`
  .padding{
    padding:100px 0 220px;
  }
  
  @media(max-width:768px){
    .padding{
      padding:0;
    }
  }
`;


const AboutSectionContainer = styled.div`
  width:100%;
  max-width:940px;
  margin:40px auto -30px;
  display:flex;
  justify-content:space-between;


  @media(max-width:768px){
    .no-mobile{
      display:none;
    }
    padding:0 20px 40px;
    margin:0px auto 0px;
  }
`;

const AboutImage = styled.div<{image: string}>`
  width:448px;
  height:597px;
  margin-left:80px;
  background-color:#cdcdcd;
  background-position:center center;
  background-size:cover;
  background-image:url('${props => props.image}');
  position:absolute;
  z-index:2;
`;

const Skills = styled.div`
  display:flex;
  gap:50px;
`;

const Skill = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  color:var(--color-grey-0);

  @media(max-width:768px){
    h3{
      font-size:var(--h4-text-size);
      margin-bottom:5px;
    }
    small{
      font-weight:300;
    }
  }
`;

const Content = styled.div`
    color:var(--color-grey-0);
    max-width:580px;

    h3 {
        margin-bottom:30px;
        font-weight:600;
    }

    p {
        font-size:var(--p-mobile-text-size);
        font-weight:300;
        line-height:1.6;
    }

    @media(max-width:768px){
      padding-top:40px;
    }
`;

const LineDivider = styled.div`
    width:140%;
    height:1px;
    background-color:var(--color-red-primary);
    margin:40px 0;

    @media(max-width:768px){
      display:none;
    }
`;