import styled from 'styled-components';
import { Section } from "../../components/grid";
import { FontRoboto } from '@/app/fonts';

export const EnableUnits = ({}) => {

    return (
      <ContainerUnits>
        <Cover></Cover>
        <Section className="unitsPadding" background="var(--color-red-primary)">
            <ContentContainer  className={FontRoboto.className}>
                <h1>Unidades disponíveis</h1>
                <p className="no-mobile">Veja a tabela das unidades deste empreendimento</p>
                <p className="no-desktop">Veja a tabela de nossas unidades.</p>
                <Button href={window.location.href + '/unidades'}>Ver unidades</Button>
            </ContentContainer>
        </Section>
      </ContainerUnits>
    )
}

const ContainerUnits = styled.div`
  .unitsPadding{
    padding:100px 0;
  }

  @media(max-width:768px){
    .unitsPadding{
      padding:50px 0;
    }
    .no-mobile{
      display:none;
    }
  }

  @media(min-width:768px){
    .no-desktop{
      display:none;
    }
  }
`;

const ContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    align-items:center;

    h1{
        color:var(--color-grey-0);
    }

    p{
      font-size:var(--h3-text-size);
      color:var(--color-grey-0);
      font-weight:300;
    }

    @media(max-width:768px){
      h1{
        font-size:var(--h3-text-size);
      }
      p{
        font-size:var(--p-mobile-text-size);
        font-weight:300;
      }
    }
`;

const Button = styled.a`
    color:var(--color-grey-0);
    border:solid 1px var(--color-grey-0);
    height:48px;
    width:168px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:27px;

    @media(max-width:768px){
      width:calc(100% - 40px);
    }

    &:hover{
      color:var(--color-grey-100);
      border:solid 1px var(--color-grey-100);
    }
`;

const Cover = styled.div`
    @media(min-width:768px){
      display:none;
    }

    width:100%;
    height:210px;
    background-image:url('/tmp/375-210.webp');
    background-position:center center;
    background-size:cover;
`;