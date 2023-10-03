import { FontRoboto } from '@/app/fonts';
import styled from 'styled-components';

interface SlideLegendProps{
    data:any;
    description?:string;
    index:number;
}

export const SlideLegend: React.FC<SlideLegendProps> = ({data, description, index}) => {

    return (
        <SlideFooter className={FontRoboto.className}>
            <Subtitle>{description}</Subtitle>
            <Total>{index + 1}/{data.length}</Total>
        </SlideFooter>
    )
}

const Subtitle = styled.div`
    @media(max-width:768px){
        font-size:var(--overline);
    }
`;

const SlideFooter = styled.div`
    display:flex;
    justify-content:space-between;
    max-width:900px;

    @media(max-width:768px){
        flex-direction:column;
    }
`;

const Total = styled.div`
    @media(max-width:768px){
        width:100%;
        text-align:center;
        margin-bottom:-30px;
        padding-top:10px;
        font-size:var(--overline);
    }
`;
