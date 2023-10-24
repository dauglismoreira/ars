'use client';

import styled from 'styled-components';
import { Section } from "../../../../../components/grid";
import { SectionTitle } from '@/app/components/sectionTitle';
import { InputGenerate, LocalFormData } from '@/app/components/formGenerator';
import { useState } from 'react';
import { CheckFormAccept } from '@/app/components/formGenerator/components/check';
import { FontRoboto } from '@/app/fonts';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { getData } from '@/helpers/getData';
import getStorageFile from '@/helpers/getStorageFile';


interface ContactProps {
    formInputs: any;
    unit:any;
  }

export const ContactPage: React.FC<ContactProps> = ({formInputs ,unit}) => {

  const [formData, setFormData] = useState<LocalFormData>({});
  const [accept, setAccept] = useState(false);

  const handleFormSubmit = () => {
    const origin = {
      origin:'pagina_contato',
      department: process.env.NEXT_PUBLIC_EMAIL,
      unit_id: unit.id
  }

  const combinedData = {
      ...formData,
      ...origin,
    };
  
    getData('contact-send', combinedData)
    .then(response => handleShowMessage(response))
};

const MessageForm = withReactContent(Swal)

const handleShowMessage = (response:any) => {
    if(response.success){
        MessageForm.fire({
            icon: 'success',
            title: 'Mensagem enviada',
            text: 'Em breve entraremos em contato',
            showConfirmButton: false,
            timer: 1500
        })
    }else{
        MessageForm.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tivemos um problema, tente novamente mais tarde',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

    return (
      <FormContainer className={FontRoboto.className}>
        <Section className="formPadding" background="var(--color-grey-100)">
            <InfoContainer>
                <Logo>
                    <Cover background={getStorageFile(unit.enterprise.logo_image.path)}></Cover>
                </Logo>
                <Title>Tenho interesse</Title>
                <h2>{unit.enterprise.title} - {unit.type.name} - {unit.unit}</h2>
                <p>Preencha seus dados que em breve um consultor especialista entrará em contato com você</p>
            </InfoContainer>
          <ContainerForm>
              <InputGenerate
                  inputs={formInputs}
                  formData={formData}
                  setFormData={setFormData}
                  color="var(--color-grey-0)"
                  singleColumn={true}
              />
            </ContainerForm>
            <ContainerActionForm>
              <CheckFormAccept color="var(--color-grey-0)"  onAcceptChange={setAccept}/>
                  {accept ?
                      <ButtonContainer><button onClick={handleFormSubmit}>Enviar</button></ButtonContainer>
                      :
                      <ButtonContainer><button onClick={handleFormSubmit} disabled>Enviar</button></ButtonContainer>
                  }
            </ContainerActionForm>
        </Section>
      </FormContainer>
    )
}

const Logo = styled.div`
  width:120px;

  @media(max-width:768px){
    width:100%;
    display:flex;
    justify-content:center;
  }
`;

const Title = styled.div`
  padding:15px 10px 8px;
  font-size:var(--h2-text-size);
  color:var(--color-grey-0);
  border-bottom:solid 1px var(--color-red-secondary);
  margin-top:30px;
  font-weight:500;

  @media(max-width:768px){
    font-size:var(--h3-text-size);
  }
`;

const InfoContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

  h2{
    color:var(--color-grey-0);
    margin-top:30px;
    font-weight:400;
    text-align:center;

    @media(max-width:768px){
        font-size:var(--h3-text-size);
    }
  }

  p{
    color:var(--color-grey-0);
    font-weight:200;
    margin-top:40px;
  }

  @media(max-width:768px){
    padding:0 20px;

    p{
        margin-bottom:30px;
        text-align:center;
      }
  }
`;

const Cover = styled.div<{background:string}>`
  background-image:url('${props => props.background}');
  background-position:center center;
  background-size:contain;
  width:125px;
  height:118px;

  @media(max-width:768px){
    width:93px;
    height:88px;
  }
`;

const FormContainer = styled.div`
  .formPadding{
    padding:135px 0 75px;
  }

  @media(max-width:768px){
    .formPadding{
      padding:100px 0 0;
    }
  }
`;

const ContainerForm = styled.div`
    max-width:940px;
    margin:50px auto 0;

    @media(max-width:768px){
        margin:-10px 0 0;
        padding:0 20px;
    }
`;

const ContainerActionForm = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    max-width:940px;
    margin:20px auto 0;

    @media(max-width:768px){
        margin:0px 10px 20px;
        padding:0 20px;
    }
`;

const ButtonContainer = styled.div`
    display:flex;
    justify-content:center;
    margin-top:10px;

    button {
      color:var(--color-grey-0);
      border:solid 1px var(--color-grey-0);
      height:48px;
      width:168px;
      display:flex;
      justify-content:center;
      align-items:center;
      margin:10px 0;
      background-color:transparent;
      cursor:pointer;

      @media(max-width:768px){
        width:100%;
        margin:0 0 10px;
      }
    
      &:hover{
        color:var(--color-red-primary);
        border:solid 1px var(--color-red-primary);
      }

         &:disabled {
             background-color: #888;
             border-color: var(--text-secondary);
             color:  #cdcdcd;
             cursor: not-allowed;
         }
    }
`;