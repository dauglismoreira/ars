import { FontRoboto } from '@/app/fonts';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface SelectProps {
  options: { label: string; value: string }[];
  onChange: (selectedValue: string) => void;
  clearFilter:number;
  placeholder:string;
  defaultValue?:string;
}

export const Select: React.FC<SelectProps> = ({ defaultValue, options, placeholder, clearFilter, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onChange(newValue);
  };


  useEffect(() => {
    if(defaultValue !== '' && defaultValue){
      setSelectedValue(defaultValue)
    }
  },[defaultValue, clearFilter, options])

  return (
    <ContainerSelect>
        <StyledSelect value={selectedValue} onChange={handleSelectChange}>
        <option className={FontRoboto.className} value=''>{placeholder}</option>
        {options.map((option, index) => (
            <option className={FontRoboto.className} key={index} value={option.value}>
                {option.label}
            </option>
        ))}
        </StyledSelect>
    </ContainerSelect>
  );
};

const ContainerSelect = styled.div`
  border-bottom: solid 1px rgba(255, 255, 255, 0.5);
  padding-right:5px;
`;

const StyledSelect = styled.select`
  width:100%;
  height: 40px;
  border:none;
  background-color: var(--background-secondary);
  color:var(--color-grey-0);
  padding: 0 5px;
  font-size:var(--h5-text-size);

    option {
        height:30px;
        color:var(--color-grey-100);
    }

    &:focus {
        outline: none;
    }
`;