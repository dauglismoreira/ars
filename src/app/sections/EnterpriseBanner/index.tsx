import styled from 'styled-components';
import { Section } from "../../components/grid";
import { FontRoboto } from '@/app/fonts';
  
interface EnterpriseProps {
    enterprise:any;
  }

export const EnterpriseBanner: React.FC<EnterpriseProps> = ({enterprise}) => {

  return (
      <ContainerBanner>
        <Section className="bannerPadding">
            <EnterpriseBannerContainer className={FontRoboto.className} background={enterprise.high_image}>
              <MobileImage background={enterprise.about_image}></MobileImage>
              <ContentBanner>
                <Text>
                  <h4>{enterprise.title_high}</h4>
                  <h1>{enterprise.title}</h1>
                  <span className="no-desktop">{enterprise.type}</span>
                  <p><span className="no-mobile">{enterprise.type}</span><strong className="no-mobile">-</strong>{enterprise.address}, {enterprise.district} - {enterprise.city}/{enterprise.state}</p>
                </Text>
                <Logo image={enterprise.enterprise_logo}></Logo>
              </ContentBanner>
              <Shadow></Shadow>
            </EnterpriseBannerContainer>
        </Section>
      </ContainerBanner>
  )
}

const ContainerBanner = styled.div`
  .bannerPadding{
    padding:175px 0 0;
  }

  @media(max-width:768px){
    .bannerPadding{
      padding:90px 0 0;
    }
  }
`;

const EnterpriseBannerContainer = styled.div<{background: string}>`
  width:100%;

  @media(min-width:768px){
    background-size:cover;
    background-position: center center;
    position:relative;
    display:flex;
    align-items:flex-end;
    height:1000px;
    background-image:url('${props => props.background}');
  }

  @media(max-width:768px){
    background-color:var(--color-grey-100);
  }
`;

const MobileImage = styled.div<{background: string}>`
  @media(max-width:768px){
    width:100%;
    height:500px;
    background-image:url('${props => props.background}');
    background-size:cover;
    background-position:center center;
  }
`;

const Shadow = styled.div`
  @media(min-width:768px){
    width:110%;
    height:50px;
    background-color: var(--color-grey-100);
    box-shadow:-10px -50px 80px 120px var(--color-grey-100);
    position:absolute;
    bottom:0;
    left:0;
    right:0;
  }
`;

const ContentBanner = styled.div`
  z-index:1;
  width:100%;
  max-width:940px;
  margin:0 auto 20px;
  display:flex;
  justify-content:space-between;

  @media(max-width:768px){
    margin:0 auto;
    padding:40px 20px;
  }
`;

const Text = styled.div`
  display:flex;
  flex-direction:column;
  gap:30px;

  h4{
    color:var(--color-grey-0);
    text-transform:uppercase;
    font-weight:300;
  }
  h1{
    color:var(--color-grey-0);
  }
  p{
    color:var(--color-grey-0);
    display:flex;
    gap:20px;

    span {
      color:var(--color-red-secondary);
    }
  }

  @media(min-width:768px){
    .no-desktop{
      display:none;
    }
  }

  @media(max-width:768px){
    gap:10px;
    h4{
      font-size:var(--overline);
    }
    h1{
      font-size:var(--h3-text-size);
    }
    span {
      color:var(--color-red-secondary);
      font-size:var(--overline);
      font-weight:300;
    }
    p{
      margin-top:20px;
      font-weight:300;
    }
    .no-mobile{
      display:none;
    }
  }
`;

const Logo = styled.div<{image: string}>`
  width:140px;
  height:140px;
  background-color:#cdcdcd;
  background-position:center center;
  background-size:cover;
  background-image:url('${props => props.image}');
  margin-top:40px;
  margin-right:-80px;

  @media(max-width:768px){
    display:none;
  }
`;