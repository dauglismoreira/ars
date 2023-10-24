import styled from 'styled-components';
import { Section } from "../../components/grid";
import { useEffect, useState } from 'react';
import { FontRoboto } from '@/app/fonts';

interface AboutDetailsItem {
    label:string;
    content:string[];
}

interface AboutDetailsProps {
    activeButtonLabel: string;
    onActiveButtonChange: (label: string) => void;
    aboutDetails: AboutDetailsItem[];
    typeDetails:any;
    details:any;
    typeActive:string;
  }

export const AboutDetails: React.FC<AboutDetailsProps> = (props) => {

    const { activeButtonLabel, onActiveButtonChange } = props;
    const [contentClass, setContentClass] = useState('');

    
    const handleActiveButtonChange = (label: string) => {
        setContentClass('fade-out');
        setTimeout(() => {
        onActiveButtonChange(label);
        setContentClass('fade-in');
        }, 500);
    };

    const [aboutButtons, setAboutButtons] = useState<any[]>([]);
    
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const updatedAboutButtons: any[] = [];

      if(props.details.filter((detail:any) => detail.title === "Galeria: Empreendiemento")[0].differentials.length > 0){
        updatedAboutButtons.push({
          label:'Empreendimento',
          link:'#'
        },)
      }
      if(props.details.filter((detail:any) => detail.title === "Galeria: Área de lazer")[0].differentials.length > 0){
        updatedAboutButtons.push({
          label:'Lazer',
          link:'#'
        },)
      }
      if(props.typeDetails.filter((detail:any) => detail.name === props.typeActive)[0]?.galleries.filter((det:any) => det.title === "Galeria de imagens")[0].differentials.length > 0){
        updatedAboutButtons.push({
          label:'Apartamento',
          link:'#'
        },)
      }
      setAboutButtons(updatedAboutButtons);
    }, [props])
    /* eslint-disable react-hooks/exhaustive-deps */


    return (
      <>
      {aboutButtons.length > 0 &&
        <Section padding="0 0 75px">
            <ContentContainer  className={FontRoboto.className}>
                <Menu>
                    {aboutButtons.map((item, index) => (
                        <Item
                            onClick={() => handleActiveButtonChange(item.label)}
                            key={index}
                            active={item.label === activeButtonLabel ? 'true' : 'false'}
                        ><p>{item.label}</p></Item>
                    ))}
                </Menu>
                <Details className={contentClass}>
                    <Title>Diferenciais</Title>
                    {activeButtonLabel === 'Empreendimento' &&
                    props.details.filter((detail:any) => detail.title === "Galeria: Empreendiemento")[0].differentials.map((item:any, index:number) => (
                        <li key={index}>{item.label}</li>
                    ))}
                    {activeButtonLabel === 'Lazer' &&
                    props.details.filter((detail:any) => detail.title === "Galeria: Área de lazer")[0].differentials.map((item:any, index:number) => (
                        <li key={index}>{item.label}</li>
                    ))}
                    {activeButtonLabel === 'Apartamento' &&
                    props.typeDetails.filter((detail:any) => detail.name === props.typeActive)[0].galleries.filter((det:any) => det.title === "Galeria de imagens")[0].differentials.map((item:any, index:number) => (
                        <li key={index}>{item.label}</li>
                    ))}
                </Details>
            </ContentContainer>
        </Section>}
      </>
    )
}


const ContentContainer = styled.div`
    width:100%;
    max-width:940px;
    margin:auto;
    display:flex;
    flex-direction:row;
    gap:20px;
`;

const Menu = styled.div`
    width:140px;
    display:flex;
    flex-direction:column;
    gap:20px;
    margin-top:45px;

    @media(max-width:768px){
        display:none;
    }
`;

const Item = styled.div<{active: string}>`
    display:flex;
    p{
        cursor:pointer;
        position:relative;
        color:${props => props.active === 'true' ? 'var(--color-red-primary)' : 'var(--color-grey-100)'};
        
        &::after{
            content:'';
            width:100%;
            height:1px;
            background-color:${props => props.active === 'true' ? 'var(--color-red-primary)' : 'var(--color-grey-100)'};
            position:absolute;
            bottom:-5px;
            left:0;
        }
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
    gap:30px;

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
        padding:0 20px;
    }
`;

const Title = styled.p`
    color:var(--color-grey-60);
    text-transform:uppercase;    
`;