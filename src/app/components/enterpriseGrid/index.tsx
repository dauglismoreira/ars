'use client';

import styled from 'styled-components';
import { CardProps, EnterpriseCard } from '../enterpriseCard';
import { Container, Row, Section } from '../grid';
import { FontRoboto } from '@/app/fonts';
import { Filters } from '../SearchMenu';

interface EnterprisePageProps {
    data:CardProps[];
    citiesFilter:any;
    statusFilter:any;
}

export const EnterpriseGrid: React.FC<EnterprisePageProps> = ({data, citiesFilter, statusFilter}) => {

    return(
        <>
        <Filters
            citiesOptions={citiesFilter}
            situationOptions={statusFilter}
        />
        <Section background="var(--color-grey-100)" padding='140px 0 0'>
            <Container>
                <Row>
                    <Title className={FontRoboto.className}>Confira nossos Empreendimentos</Title>
                </Row>
                <Row>
                    <EnterpriseListContainer>
                        {data?.map((enterprise, index) => (
                            <EnterpriseCard key={index} data={enterprise} />
                        ))}
                    </EnterpriseListContainer>
                </Row>
            </Container>
        </Section>
        </>
    )
}

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