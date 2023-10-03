import { FontRoboto } from '@/app/fonts';
import styled from 'styled-components';

interface SectionTitleProps {
    text?: string;
    mini?:boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({text, mini}) => {

    return(
        <TitleContainer>
            <Title className={FontRoboto.className}><h2 className={mini ? 'mini' : ''}>{text}</h2></Title>
        </TitleContainer>
    )
}

const TitleContainer = styled.div`
    margin:auto;
    max-width:940px;
    position:relative;
    margin-bottom:40px;

    @media(max-width:768px){
        margin:-60px 0 30px;
    }
`;

const Title = styled.div`
    display:flex;

    h2 {
        position:relative;
    }

    @media(min-width:768px){
        h2::after{
            content:'';
            width:1000%;
            position:absolute;
            height:1px;
            background-color:var(--color-red-primary);
            bottom:-10px;
            right:0;
        }
    }

    @media(max-width:768px){
        h2{
            font-size:var(--h3-text-size);
            padding:0 20px;

            &.mini{
                font-size:var(--overline);
                color:var(--color-grey-60);
                font-weight:400;
                text-transform:uppercase;
            }
        }
    }
`;