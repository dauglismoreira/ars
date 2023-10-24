import styled from 'styled-components';
import { FontRoboto } from '@/app/fonts';
import { useEffect, useState } from 'react';

interface Button {
    label: string;
    link: string;
  }

interface ContainerButtonsProps {
    buttons: Button[];
    onActiveButtonChange: (label: string) => void;
}

export const ContainerButtons: React.FC<ContainerButtonsProps> = ({buttons, onActiveButtonChange}) => {

    const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(0);

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        if (activeButtonIndex !== null) {
            onActiveButtonChange(buttons[activeButtonIndex].label);
        }
      }, [activeButtonIndex]);
      /* eslint-disable react-hooks/exhaustive-deps */

    const handleButtonClick = (index: number) => {
        setActiveButtonIndex(index);
        onActiveButtonChange(buttons[index].label);
    };

    return(
        <>
            <ButtonsContainer>
                {buttons.map((button, index) => (
                    <Button
                        key={index}
                        active={activeButtonIndex === index ? 'true' : 'false'}
                        className={FontRoboto.className}
                        onClick={() => handleButtonClick(index)}
                    >{button.label}</Button>
                ))}
            </ButtonsContainer>
        </>
    )
}

const ButtonsContainer = styled.div`
    margin:auto;
    max-width:940px;
    position:relative;

    display:flex;
    flex-direction:row;
    gap:32px;

    @media(max-width:768px){
        display:flex;
        overflow-x:auto;
        white-space: nowrap;
        gap:16px;
        padding:0 20px 10px;
    }

    @media(min-width:768px){
        display:flex;
        flex-wrap:wrap;
        gap:20px;
    }
`;

const Button = styled.div<{active: string}>`
    border:solid 1px ${props => props.active === 'false' ? 'var(--color-grey-100)' : 'var(--color-red-primary)'};
    height:48px;
    width:168px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:var(--button-size);
    font-weight:500;
    color: ${props => props.active === 'false' ? 'var(--color-grey-100)' : 'var(--color-red-primary)'};
    cursor:pointer;

    &:hover{
        border:solid 1px var(--color-red-primary);
        color: var(--color-red-primary);
    }

    @media(max-width:768px){
        width:auto;
        padding:0 20px;
    }
`;