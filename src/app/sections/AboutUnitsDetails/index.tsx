import styled from 'styled-components';
import { Section } from "../../components/grid";
import { FontRoboto } from '@/app/fonts';


interface SkillsProps{
    label:string;
    value:string;
}

interface AboutDetailsProps {
    aboutDetails: string[];
    aboutSkills:SkillsProps[];
    unit:any;
  }

export const AboutUnitsDetails: React.FC<AboutDetailsProps> = (props) => {

    return (
      <ContainerDetails>
        <Section className="detailsPadding">
            <ContentContainer  className={FontRoboto.className}>
                <UnitTitle>
                    <h3>{props.unit.title} - {props.unit.type} - {props.unit.unit}</h3>
                </UnitTitle>
                <Skills>
                    {props.aboutSkills.map((skill, index) => (
                        <Skill key={index}>
                            <h3>{skill.value}</h3>
                            <small>{skill.label}</small>
                        </Skill>
                    ))}
                </Skills>
                <Details>
                    <Title>Diferenciais</Title>
                    {props.aboutDetails.map((detail, i) => (
                        <li key={i}>{detail}</li>
                    ))}
                    <li>32 andares</li>
                </Details>
            </ContentContainer>
        </Section>
      </ContainerDetails>
    )
}

const ContainerDetails = styled.div`
  detailsPadding{
    padding:0 0 75px;
  }

  @media(max-width:768px){
    detailsPadding{
      padding:0 0 25px;
    }
  }
`;

const ContentContainer = styled.div`
    width:100%;
    max-width:940px;
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:20px;

    @media(max-width:768px){
      padding:0 20px;
    }
`;

const Skills = styled.div`
  display:flex;
  gap:50px;
`;

const Skill = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  color:var(--color-grey-100);

  small{
    color:var(--color-grey-80);
  }

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

const UnitTitle = styled.div`
  margin:30px 0 40px;

  @media(max-width:768px){
    display:none;
  }
`;


const Details = styled.div`
    &.fade-out{
        transition: 0.3s ease-in-out;
        opacity:0;
    }

    &.fade-in{
        transition: 0.3s ease-in-out;
        opacity:1;
    }

    display:flex;
    flex-direction:column;
    gap:20px;

    li {
        list-style:none;
        display:flex;
        flex-direction:row;
        gap:20px;
        align-items:center;
    }

    li::before{
        content:'';
        width:5px;
        height:5px;
        background-color:var(--color-red-primary);
        border-radius:50%;
        display:flex;
    }

    @media(max-width:768px){
        padding:0;
        margin-top:20px;
    }
`;

const Title = styled.p`
    color:var(--color-grey-60);
    text-transform:uppercase; 
    margin-top:40px; 
    
    @media(max-width:768px){
      display:none;
    }
`;