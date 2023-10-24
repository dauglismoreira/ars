'use client';

import styled, { keyframes } from 'styled-components';
import { CardProps, EnterpriseCard } from '../enterpriseCard';
import { Container, Row, Section } from '../grid';
import { FontRoboto } from '@/app/fonts';
import { Filters } from '../SearchMenu';

interface EnterprisePageProps {
    data:{
        data:CardProps[]
    }[];
    citiesFilter:any;
    statusFilter:any;
    loading:boolean;
    onURLParametersChange:any;
}

export const EnterpriseGrid: React.FC<EnterprisePageProps> = ({
    onURLParametersChange,
    loading,
    data,
    citiesFilter,
    statusFilter
}) => {


    return(
        <>
        {loading &&
            <SpinnerContainer>
                <Spinner></Spinner>
            </SpinnerContainer>
        }
        <Filters
            citiesOptions={citiesFilter}
            situationOptions={statusFilter}
            onURLParametersChange={onURLParametersChange}
        />
        <Section background="var(--color-grey-100)" padding='140px 0 0'>
            <Container>
                <Row>
                    <Title className={FontRoboto.className}>Confira nossos Empreendimentos</Title>
                </Row>
                <Row>
                {data[0]?.data?.length > 0 ?
                    <EnterpriseListContainer>
                        {data[0]?.data?.map((enterprise, index) => (
                            <EnterpriseCard key={index} data={enterprise} />
                        ))}
                    </EnterpriseListContainer>
                        :
                        <NoResults>Naõ foram encontrados empreendimentos com os filtros aplicados.</NoResults>
                    }
                </Row>
            </Container>
        </Section>
        </>
    )
}

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    height:100vh;
    width:100%;
    backdrop-filter: blur(2px);
    z-index:9;
`;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
    border: 4px solid var(--background-grey);
    border-top: 4px solid var(--background-primary);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
`;

SpinnerContainer.displayName = 'SpinnerContainer';
Spinner.displayName = 'Spinner';

const EnterpriseListContainer = styled.div`
  width:100%;
  display: grid;
  gap:30px;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  justify-items: center;

    @media(max-width:768px){
        margin-top:20px;
    }
`;

const Title = styled.h3`
    margin:40px auto 60px;
    color:var(--color-grey-0);

    @media(max-width:768px){
        display:none;
    }
`;

const NoResults = styled.div`
    padding:40px 20px;
    color:var(--color-grey-0);
    text-align:center;
    display:flex;
    width:100%;
    justify-content:center;
`;