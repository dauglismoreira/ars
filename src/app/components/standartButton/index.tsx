'use client';

import styled from 'styled-components';

interface StandartButtonProps {
    text?: string;
    link?: string;
}

export const StandartButton: React.FC<StandartButtonProps> = ({text, link}) => {

    return(
        <Button href={link} target="_parent">
            {text}
        </Button>
    )
}

const Button = styled.a`
    font-size:var(--button-size);
    width:168px;
    border: solid 1px var(--color-red-primary);
    color:var(--color-red-primary);
    height:48px;
    display:flex;
    align-items:center;
    justify-content:center;
`;