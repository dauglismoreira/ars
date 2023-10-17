import { useState } from 'react';
import styled from 'styled-components';

interface CheckContainerProps {
    onAcceptChange: (newAcceptValue: boolean) => void;
    color?: string;
}

export const CheckFormAccept: React.FC<CheckContainerProps> = ({ onAcceptChange, color }) =>{
    const [accept, setAccept] = useState(false);

    const handleAcceptChange = () => {
        setAccept(!accept);
        onAcceptChange(!accept);
    };

    return (
        <CheckContainer color={color ? color : 'var(--color-grey-0)'}>
            <input id="accept" name="accept" type="checkbox"
                checked={accept}
                onChange={handleAcceptChange}
            ></input>
            <label htmlFor="accept">Declaro que li e Aceito os termos da Política de Privacidade de ARS Kammer</label>
        </CheckContainer>
    )
}

const CheckContainer = styled.div<{color: string}>`
    display:flex;
    flex-direction:row;
    gap:8px;
    align-items:center;
    justify-content:center;

    label {
        font-size:var(--overline);
        color:${props => props.color};
    }
    input {
        width:20px;
        height:20px;
        margin-top:0;
    }
`;