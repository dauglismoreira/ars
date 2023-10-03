import styled from 'styled-components';
import { Col, Row, Section } from "../../components/grid";
  
  interface AboutIntroProps {
    enterprise:any;
  }

  interface Skill {
    value: string;
    label: string;
  }

export const AboutIntro: React.FC<AboutIntroProps> = ({enterprise}) => {

    return (
      <ContainerSection>
        <Section background="var(--color-grey-100)" className="padding">
            <AboutSectionContainer>
              <Row>
                <Col flex={9}>
                  <Skills>
                    {enterprise.skills.map((skill: Skill, index: number) => (
                        <Skill key={index}>
                            <h3>{skill.value}</h3>
                            <small>{skill.label}</small>
                        </Skill>
                    ))}
                  </Skills>
                  <LineDivider></LineDivider>
                  <Content>
                    <h4>{enterprise.slogan}</h4>
                    <p>{enterprise.resum}</p>
                  </Content>
                </Col>
                <Col flex={4} className="no-mobile">
                  <AboutImage image={enterprise.about_image}></AboutImage>
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
    max-width:480px;

    h4 {
        margin-bottom:30px;
        font-weight:600;
    }

    p {
        font-size:var(--p-mobile-text-size);
        font-weight:400;
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