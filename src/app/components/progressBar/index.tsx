import styled from 'styled-components';
import {useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';

interface ProgressBarProps {
    label:string;
    progress:number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
    label,
    progress
}) => {

    const [progressEnd, setProgressEnd] = useState(0);

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                const animationDuration = 2000;
                const frames = animationDuration / 100;
                const increment = progress / frames;

                let currentProgress = 0;
                const interval = setInterval(() => {
                    currentProgress += increment;
                    setProgressEnd(Math.round(currentProgress));

                    if (currentProgress >= progress) {
                        clearInterval(interval);
                    }
                }, 10);
            }, 500);
        }
    }, [progress, inView]);

    return (
        <ContainerProgressStage ref={ref}>
            <TitleContainer>
                <Title>{label}</Title>
                <Value>{progressEnd}%</Value>
            </TitleContainer>
            <ProgressBarContainer>
                <Progress status={progressEnd}></Progress>
            </ProgressBarContainer>
        </ContainerProgressStage>
    )
}

const ContainerProgressStage = styled.div`
    margin:30px 0;

    @media(max-width:768px){
        width:calc(100% - 20px);
        margin:20px auto 0;
    }
`;

const TitleContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;

const Title = styled.div`
    color:var(--color-grey-100);
    font-weight:500;
`;


const Progress = styled.div<{status: number}>`
    width:100%;
    background-color:var(--color-grey-60);
    height:8px;
    position:relative;
    transition: width 0.3s ease;

    &::after{
        content:'';
        width:${props => props.status}%;
        position:absolute;
        left:0;
        top:0;
        height:8px;
        background-color:var(--color-red-primary);
        transition: width 0.3s ease;
    }
`;

const ProgressBarContainer = styled.div`
    display:flex;
    flex-direction:row;
    gap:10px;
    align-items:center;
    margin-top:10px;
`;

const Value = styled.div`
    color:var(--color-grey-100);
    font-weight:500;
`;