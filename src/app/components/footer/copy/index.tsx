import { FontRoboto } from '@/app/fonts';
import useScreenSize from '@/hooks/useScreenSize';
import styled from 'styled-components';
import ImpacteIcon from '@/impacte/ImpacteIcon'

interface CopyRightProps {
    text?:string;
    link?:string;
}

export const CopyRight: React.FC<CopyRightProps> = ({text, link}) => {
    const isLargeScreen = useScreenSize(768);
    const textParts = text?.split('©');

    return(
        <CopyContainer className={FontRoboto.className}>
            <Policy href={link} target="_parent"><small>{
            isLargeScreen.isLargeScreen ? text : (textParts ? `${textParts[0]}\n©${textParts[1]}` : text)
            }</small></Policy>
            <Impacte><small>Desenvolvido por</small><ImpacteIcon /></Impacte>
        </CopyContainer>
    )
}

const CopyContainer = styled.div`
  width:100%;
  max-width:1640px;
  padding:20px 0 10px;
  display:flex;
  justify-content:space-between;

  @media(max-width:768px){
    flex-direction:column;
    gap:10px;
  }
`;

const Policy = styled.a`
    color:var(--color-grey-0);
    font-size:var(--p-desktop-text-size);
    font-weight:300;

    @media(max-width:768px){
        white-space:pre-line;
    }
`;

const Impacte = styled.div`
    color:var(--color-grey-0);
    font-size:var(--p-desktop-text-size);
    font-weight:300;
    display:flex;
    gap:10px;
    align-items:center;

    a{
        width:75px;
        fill:#fff;
        padding-top:3px;
    }
`;