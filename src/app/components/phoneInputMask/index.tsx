import React, { useState } from 'react';
import styled from 'styled-components';

export const PhoneInput: React.FC<{
    name: string;
    placeholder: string;
    value: string;
    color?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }> = ({ name, placeholder, color = 'var(--text-white)', value, onChange }) => {
    const [formattedValue, setFormattedValue] = useState<string>(value);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const formattedValue = formatPhoneNumber(value.slice(0, 15));
  
      setFormattedValue(formattedValue);
      onChange(e);
    };
  
    const formatPhoneNumber = (phoneNumber: string) => {
      const numericValue = phoneNumber.replace(/\D/g, '');
  
      const match = numericValue.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
      if (match) {
        let formattedValue = `(${match[1]}`;
        if (match[2]) {
          formattedValue += `) ${match[2]}`;
        }
        if (match[3]) {
          formattedValue += `-${match[3]}`;
        }
        return formattedValue;
      }
  
      return numericValue.slice(0, 15);
    };
  
    return (
      <Input
        type="text"
        name={name}
        color={color}
        placeholder={placeholder}
        value={formattedValue}
        onChange={handleChange}
      />
    );
  };
  
  const Input = styled.input<{color: string}>`
      background-color:transparent;
      border:none;
      border-bottom:solid 1px ${props => props.color};
      width:100%;
      height:35px;
      color:${props => props.color};
      padding:0 10px;
      font-size:var(--p-desktop-text-size);
      font-weight:400;
  
      ::placeholder,
      ::-webkit-input-placeholder {
          color: red;
      }
      :-ms-input-placeholder {
          color: red;
      }
          &:focus {
        outline: none;
    }

        @media(max-width:768px){
        font-size:var(--p-mobile-text-size);
    }
  `;