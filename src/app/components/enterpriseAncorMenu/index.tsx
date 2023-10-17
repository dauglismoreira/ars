import styled from 'styled-components';
import { Section } from "../../components/grid";
import { FontRoboto } from '@/app/fonts';
import Image from 'next/image';

interface MenuItem {
    label: string;
    link: string;
    image: string;
  }

interface AncorMenuProps {
    menuItems:MenuItem[];
}

const scrollToSection = (sectionId : string) => {
  const section = document.getElementById(sectionId);

  if (section) {
      window.scrollTo({
          top: section.offsetTop - 240,
          behavior: 'smooth',
      });
  }
};

export const AncorMenu: React.FC<AncorMenuProps> = ({menuItems}) => {

    return (
      <ContainerMenu>
        <Section padding={'0'} className="menuPadding" background="var(--color-grey-100)">
          <ArcorMenu className={FontRoboto.className}>
            {menuItems.map((item, index) => (
              <Item key={index}>
                <ContainerImage onClick={() => scrollToSection(item.link)}>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt={item.label}
                  />
                </ContainerImage>
                <p>{item.label}</p>
              </Item>
            ))}
          </ArcorMenu>
        </Section>
      </ContainerMenu>  
    )
}

const ContainerMenu = styled.div`
  .menuPadding{
    padding:8px 0;
  }
  
  @media(min-width:768px){
    border-bottom:solid 1px #333130;
  }

  @media(max-width:768px){
    border-top:solid 1px #333130;
    .menuPadding{
      padding:0;
    }
  }
`;

const ArcorMenu = styled.div`
  width:100%;
  max-width:1640px;
  margin:auto;
  display:flex;
  flex-direction:row;
  scroll-behavior: smooth;
  padding:0;

  @media(max-width:1640px){
    padding:0 0 10px;
  }

  @media(max-width:768px){
    overflow-x:auto;
  }
`;

const ContainerImage = styled.div`
  height:40px;
  display:flex;
  align-items:center;

  img {
    width:28px;
    height:auto;
    transition:0.3s;
  }
  

  @media(max-width:768px){
    height:28px;
  
    img {
      width:20px;
    }
  }
`;

const Item = styled.a`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
  height:60px;
  width:100px;
  cursor:pointer;
  border-left:solid 1px #333130;

  &:last-child{
    border-right:solid 1px #333130;
  }

  p{
    color:var(--color-grey-0);
    font-size:var(--p-mobile-text-size);
  }

  &:hover ${ContainerImage} img {
    transform:scale(1.1);
  }

  @media(max-width:768px){
    height:52px;
    margin-top:5px;
    min-width:80px;
    p{
      font-size:var(--overline);
    }
  }
`;