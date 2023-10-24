import styled from 'styled-components';
import { Section } from "../../components/grid";
import { SectionTitle } from '@/app/components/sectionTitle';
import { FontRoboto } from '@/app/fonts';


  interface AboutViewsProps{
    aboutImages: any[];
  }


export const AboutViews: React.FC<AboutViewsProps> = (props) => {

    return (
      <ContainerPlans>
        <Section className="plansPadding">
            <SectionTitle text={'Vista'} mini={true}/>
              <ContainerView  className={FontRoboto.className}>
                <div dangerouslySetInnerHTML={{__html: props.aboutImages}}/>
            </ContainerView>
        </Section>
      </ContainerPlans>
    )
}

const ContainerPlans = styled.div`
  .plansPadding{
    padding:75px 0 75px;
  }

  @media(max-width:768px){
    .plansPadding{
      padding:100px 0 0;
    }
  }
`;

const ContainerView = styled.div`
    margin:auto;
    width:100%;
    max-width:940px;
    height:670px;
    background-size:cover;
    background-position:center center;
    position:relative;

    iframe{
      height:670px!important;
      width:100%!important;
    }

    @media(max-width:768px){
      height:257px;

      iframe{
        height:257px!important;
      }
    }
`;