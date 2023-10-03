import styled from 'styled-components';
import { Section } from "../../components/grid";
import { useState } from 'react';
import { FontRoboto } from '@/app/fonts';

interface AboutDetailsItem {
    label:string;
    content:string[];
}

interface AboutDetailsProps {
    activeButtonLabel: string;
    onActiveButtonChange: (label: string) => void;
    aboutDetails: AboutDetailsItem[];
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

    return (
      <>
        <Section padding="0 0 75px">
            <ContentContainer  className={FontRoboto.className}>
                <Menu>
                    {props.aboutDetails.map((item, index) => (
                        <Item
                            onClick={() => handleActiveButtonChange(item.label)}
                            key={index}
                            active={item.label === activeButtonLabel}
                        ><p>{item.label}</p></Item>
                    ))}
                </Menu>
                <Details className={contentClass}>
                    <Title>Diferenciais</Title>
                    {props.aboutDetails.find(item => item.label === activeButtonLabel)?.content.map((detail, i) => (
                        <li key={i}>{detail}</li>
                    ))}
                    <li>32 andares</li>
                </Details>
            </ContentContainer>
        </Section>
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
    margin-top:40px;

    @media(max-width:768px){
        display:none;
    }
`;

const Item = styled.div<{active: boolean}>`
    display:flex;
    p{
        cursor:pointer;
        position:relative;
        color:${props => props.active ? 'var(--color-red-primary)' : 'var(--color-grey-100)'};
        
        &::after{
            content:'';
            width:100%;
            height:1px;
            background-color:${props => props.active ? 'var(--color-red-primary)' : 'var(--color-grey-100)'};
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
        padding:0 20px;
    }
`;

const Title = styled.p`
    color:var(--color-grey-60);
    text-transform:uppercase;    
`;