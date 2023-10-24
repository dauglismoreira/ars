import styled from 'styled-components';
import { Section } from "../../components/grid";
import { FontRoboto } from '@/app/fonts';
import { SectionTitle } from '@/app/components/sectionTitle';
import { InputGenerate, LocalFormData } from '@/app/components/formGenerator';
import { useState } from 'react';
import { CheckFormAccept } from '@/app/components/formGenerator/components/check';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { getData } from '@/helpers/getData';
import fetchData from '@/helpers/fetchData';

interface AboutContactProps {
    formInputs: any;
  }

export const AboutContact: React.FC<AboutContactProps> = ({formInputs}) => {

  const [formData, setFormData] = useState<LocalFormData>({});
  const [accept, setAccept] = useState(false);

    const handleFormSubmit = () => {
      const origin = {
        origin:'pagina_contato',
        department: process.env.NEXT_PUBLIC_EMAIL,
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
      <FormContainer>
        <Section className="formPadding">
          <SectionTitle text={'Gostaria de saber mais?'}/>
          <ContainerForm>
              <InputGenerate
                  inputs={formInputs}
                  formData={formData}
                  setFormData={setFormData}
                  color="var(--color-grey-80)"
                  singleColumn={true}
              />
            </ContainerForm>
            <ContainerActionForm>
              <CheckFormAccept color="var(--color-grey-60)"  onAcceptChange={setAccept}/>
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

const FormContainer = styled.div`
  .formPadding{
    padding:0 0 75px;
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
      color:var(--color-grey-100);
      border:solid 1px var(--color-grey-100);
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