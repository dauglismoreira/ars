import useScreenSize from '@/hooks/useScreenSize';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface InputProps {
  icon?: React.ReactNode;
  onChange?: (textValue: string) => void;
  param:string;
  clearFilter:number;
}

export const TextInput: React.FC<InputProps> = ({ clearFilter, icon, onChange, param }) => {
    const isLargeScreen = useScreenSize(768);  
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    

    const handleInputFocus = () => {
      setIsFocused(true);
    };
  
    const handleInputBlur = () => {
      setIsFocused(false);
    };

    useEffect(() => {
      setInputValue('')
    }, [clearFilter])

    useEffect(() => {
      const queryParams = new URLSearchParams(window.location.search);
      const valueFromParam = queryParams.get(param);

      const fakeEvent = {
        target: {
          value: valueFromParam || '',
        },
      } as React.ChangeEvent<HTMLInputElement>;

      handleInputChange(fakeEvent)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param, open]);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        if (onChange) {
          onChange(newValue);
        }
      };

  return (
    <InputContainer>
      <StyledInput
        type="text"
        placeholder={isLargeScreen.isLargeScreen ? 'Buscar' : 'Digite o que deseja procurar'}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        value={inputValue}
      />
      <IconContainer active={isFocused ? 'true' : 'false'}>
        {icon}
      </IconContainer>
    </InputContainer>
  );
};


const InputContainer = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  border-bottom: solid 1px rgba(255, 255, 255, 0.5);
  padding: 0 10px;
  height: 40px;

  transition: border-color 0.3s ease-in-out;
`;

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  padding: 0;
  height: 100%;
  width:100%;
  font-size:var(--h5-text-size);
  color: var(--color-grey-0);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--color-grey-0);
}
`;

const IconContainer = styled.div<{ active: string }>`
    margin-right: 0px;
    transition: opacity 0.3s ease-in-out;

    color:var(--color-grey-0);
`;