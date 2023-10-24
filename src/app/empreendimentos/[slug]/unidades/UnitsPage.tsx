'use client'

import styled from 'styled-components';
import {UnitsList} from '@/app/components/unitsList';
import {UnitsFilters} from '@/app/components/unitsFilters';
import { useState } from 'react';
import { UnitsFixedTitle } from '@/app/components/unitsFixedTitle';


export interface UnitsProps {
    types:any;
    cub:any;
  }

export const UnitsListPage: React.FC<UnitsProps> = ({types, cub}) => {

  const [minValue, setMinValue] = useState(70);
  const [maxValue, setMaxValue] = useState(300);
  const [dormsNumber, setDormsNumber] = useState<string[]>([]);
  const [garageNumber, setGarageNumber] = useState<string[]>([]);
  const [type, setType] = useState('');

  const handleMinValueChange = (value: number) => {
    setMinValue(value);
  };

  const handleMaxValueChange = (value: number) => {
    setMaxValue(value);
  };

  const handleDormsNumberChange = (values: string[]) => {
    setDormsNumber(values);
  };

  const handleGarageNumberChange = (values: string[]) => {
    setGarageNumber(values);
  };

  const handleTypeChange = (value: string) => {
    setType(value);
  };

  return (
    <ContainerUnitsPage>
      <UnitsFixedTitle
        data={types}
        cub={cub?.value}
      />
      <UnitsFilters
        types={types.types}
        min={minValue}
        max={maxValue}
        dorms={dormsNumber}
        garage={garageNumber}
        selectedType={type}
        onMinValueChange={handleMinValueChange}
        onMaxValueChange={handleMaxValueChange}
        onDormsNumberChange={handleDormsNumberChange}
        onGarageNumberChange={handleGarageNumberChange}
        onTypeChange={handleTypeChange}
      />
      <UnitsList
        enterprise={types.types}
        min={minValue}
        max={maxValue}
        dorms={dormsNumber}
        garage={garageNumber}
        selectedType={type}
      />
    </ContainerUnitsPage>
  );
}
const ContainerUnitsPage = styled.div`
  margin-top:58px;
`;

