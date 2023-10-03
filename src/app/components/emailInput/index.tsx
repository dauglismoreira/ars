import React, { useState } from 'react';
import styled from 'styled-components';

export const EmailInput: React.FC<{
  name: string;
  placeholder: string;
  value: string;
  color:string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ name, color = 'var(--text-white)', placeholder, value, onChange }) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const handleValidate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsValid(validateEmail(e.target.value));
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <InputContainer>
      <Input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        color={color}
        onChange={handleChange}
        isValid={isValid}
        onBlur={handleValidate}
      />
      {!isValid && <ErrorMessage>Insira um e-mail válido.</ErrorMessage>}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input<{ isValid: boolean; color: string }>`
  background-color: transparent;
  border:none;
  border-bottom: solid 1px ${(props) => (props.isValid ? props.color : '#ff9e9e')};
  width: 100%;
  height: 35px;
  color: ${props => props.color};
  padding: 0 10px;
  font-size:var(--p-desktop-text-size);
  font-weight:400;
      &:focus {
        outline: none;
    }
        @media(max-width:768px){
        font-size:var(--p-mobile-text-size);
    }
`;

const ErrorMessage = styled.div`
  font-size: var(--overline);
  color: #ff9e9e;
  width: 100%;
  padding: 4px 10px;
`;