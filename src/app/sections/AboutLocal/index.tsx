import styled from 'styled-components';
import { Section } from "../../components/grid";
import { SectionTitle } from '@/app/components/sectionTitle';
import { FontRoboto } from '@/app/fonts';


interface AboutLocalProps {
  enterprise:any;
} 

export const AboutLocal: React.FC<AboutLocalProps> = ({enterprise}) => {

    return (
      <LocalContainer>
        <LineDivider></LineDivider>
        <Section className="localPadding">
            <SectionTitle text={'Conheça a localização'}/>
            <Content  className={FontRoboto.className}>
                <h3>{enterprise.address}, {enterprise.district} - {enterprise.city}/{enterprise.state}</h3>
                <p>{enterprise.localDescription}</p>
                <Label className="no-mobile">Proximidades</Label>
                <ItemsContainer>
                  {enterprise.localDetails.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ItemsContainer>
            </Content>
            <MapContainer>
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                aria-hidden="false"
                tabIndex={0}
              />
            </MapContainer>
        </Section>
      </LocalContainer>
    )
}

const LocalContainer = styled.div`
  .localPadding{
    padding:0 0 75px;
  }

  @media(max-width:768px){
    .localPadding{
      padding:75px 0 25px;
    }
    .no-mobile{
      display:none;
    }
  }
`;

const LineDivider = styled.div`
  @media(min-width:768px){
    display:none;
  }

  height:1px;
  width:calc(100% - 40px);
  margin:20px auto;
  background-color:var(--color-grey-40);
`;

const Content = styled.div`
  max-width:940px;
  margin:60px auto;
  width:100%;

  h3 {
    color:var(--color-red-primary);
  }

  p {
    margin-top:10px;
    color:var(--color-grey-100);
  }

  @media(max-width:768px){
    padding:0 20px;
    margin:30px auto 40px;

    h3 {
      font-size:var(--h5-text-size);
    }

    p {
      font-size:var(--p-desktop-text-size);
    }
  }
`;

const Label = styled.div`
  color:var(--color-grey-60);
  text-transform:uppercase;
  margin:30px 0;
`;

const ItemsContainer = styled.div`
    display:grid;
    margin:20px 0;
    max-width:680px;
    grid-template-columns: 1fr 1fr 1fr;
    gap:10px;

    li{
      color:var(--color-grey-100);
      list-style:none;
      display:flex;
      gap:20px;
      align-items:center;
      
      &::before{
        content:'';
        width:5px;
        height:5px;
        background-color:var(--color-red-primary);
        border-radius:50%;
      }
    }

    @media(max-width:768px){
      grid-template-columns: 1fr;
      gap:25px;
      margin:20px 0 0;

      li{
        font-size:var(--p-desktop-text-size);
      }
    }
`;

const MapContainer = styled.div`
    background-color:var(--color-grey-80);
    height:556px;
    width:100%;

    @media(max-width:768px){
      height:398px;
    }
`;