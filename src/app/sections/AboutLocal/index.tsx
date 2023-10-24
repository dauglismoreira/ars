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
        {(enterprise?.street || enterprise?.location_description || enterprise?.nearby?.length > 0) &&
          <>
            <LineDivider></LineDivider>
            <Section className="localPadding">
                <SectionTitle text={'Conheça a localização'}/>
                <Content  className={FontRoboto.className}>
                    <h2>{enterprise?.street}</h2>
                    <p>{enterprise?.location_description}</p>
                    {enterprise?.nearby?.length > 0 && <Label className="no-mobile">Proximidades</Label>}
                    <ItemsContainer>
                      {enterprise?.nearby?.map((item: any, index: number) => (
                        <li key={index}>{item.label}</li>
                      ))}
                    </ItemsContainer>
                </Content>
                <MapContainer>
                  {enterprise?.map_iframe && <div dangerouslySetInnerHTML={{__html: enterprise?.map_iframe}}/>}
                </MapContainer>
            </Section>
          </>
        }
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

  h2 {
    color:var(--color-red-primary);
    font-weight:500;
  }

  p {
    margin-top:10px;
    color:var(--color-grey-100);
  }

  @media(max-width:768px){
    padding:0 20px;
    margin:30px auto 40px;

    h2 {
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
  margin:60px 0 30px;
  font-size:var(--p-mobile-text-size);
`;

const ItemsContainer = styled.div`
    display:grid;
    margin:20px 0;
    max-width:680px;
    grid-template-columns: 1fr 1fr 1fr;
    gap:25px 10px;

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

    & iframe{
      width:100%!important;
      height:556px!important;
    }

    @media(max-width:768px){
      height:398px;

      & iframe{
        height:398px!important;
      }
    }
`;