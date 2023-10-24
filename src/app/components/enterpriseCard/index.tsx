// import { Baskerville } from '@/app/fonts';
import { FontRoboto } from '@/app/fonts';
import getStorageFile from '@/helpers/getStorageFile';
import styled from 'styled-components';

export interface CardProps {
    title?:string;
    slug?:string;
    status?:string;
    suites?:string;
    area?:string;
    parking_spaces?:string;
    street?:string;
    vertical_image?:any;
    city?:any;
    location_type?:any;
}


export const EnterpriseCard: React.FC<{ data: CardProps }> = ({ data }) => {
    const { title, slug, status, suites, area, parking_spaces, street, vertical_image, city, location_type } = data;
    

    return (
        <Card  className={FontRoboto.className}>
            <a href={`./../empreendimentos/${slug}`}>
            <Cover
                image={getStorageFile(vertical_image?.path) || ''}
            ></Cover>
            <Content>
                <High>{status}</High>
                <Name>{title}</Name>
                <Place><p><span>{location_type?.location_name}</span>{street && '-  ' + street}</p></Place>
                <Skills>
                    <p>{suites}{parking_spaces && ' |' + parking_spaces}</p>
                    <p>{area}</p>
                </Skills>
                <Link>ver mais</Link>
            </Content>
            </a>
        </Card>
    );
}

const Cover = styled.div<{image : string}>`
    position: relative;
    height: calc(100% - 250px);
    
    transition: 0.3s ease-in-out;
    background: transparent;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color:#cdcdcd;
        background-image: url('${props => props.image}');
        background-size: cover;
        background-position: center center;
        transform-origin: center center;
        z-index: 0;
        transition: 0.3s ease-in-out;
    }
`;

const Content = styled.div`
    height:250px;
    padding:25px 15px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
`;

const High = styled.h5`
    color:var(--color-grey-80);
    text-transform:uppercase;
`;

const Name = styled.h3`
    color:var(--color-grey-100);
`;

const Place = styled.div`
    display:flex;
    flex-direction:row;
    gap:5px;

    span{
        color:var(--color-red-primary);
        font-weight:600;
        margin-right:6px;
    }
`;

const Skills = styled.div`
    display:flex;
    width:100%;
    gap:3px;
    flex-direction:column;
    justify-content:flex-start;
    color:var(--color-grey-80);

    p{
        font-size:var(--p-mobile-text-size);
    }
`;

const Link = styled.div`
    color:var(--color-red-primary);
    font-weight:600;
    position:relative;
    transition: 0.3s ease-in-out;

    &::after {
        content:'';
        width:110%;
        height:1px;
        background-color:var(--color-red-primary);
        position:absolute;
        bottom:-6px;
        left:-15px;
        transition: 0.3s ease-in-out;
    }
`;

const Card = styled.div`
    width:100%;
    height:750px;
    max-width:380px;
    background-color:var(--color-grey-0);

    :hover{
        transition: 0.3s ease-in-out;

        ${Cover}{
            &::before {
                width: 110%;
                height: 110%;
                left:-5%;
                top:-5%;
            }
        }

        ${Link}{
            margin-left:40px;
            transition: 0.3s ease-in-out;
            &::after {
                left:-55px;
                width:185%;
                transition: 0.3s ease-in-out;
            }
        }
    }

    @media(max-width:768px){
        height:600px;
    }

    @media(max-width:420px){
        max-width:90%;
    }
`;