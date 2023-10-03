import styled from 'styled-components';

interface MandatoryProps {
    color: string;
}

export const Mandatory: React.FC<MandatoryProps> = ({ color }) => {

    return (
        <Notice color={color ? color : 'var(--text-white)'}>Todos campos são obrigatórios.</Notice>
    )
}

const Notice = styled.div<{color: string}>`
    color:${props => props.color};
    font-size:--var(small-text-size);
`;