'use client'

import {enterprise} from './../data';
import styled from 'styled-components';
import {UnitsList} from '@/app/components/unitsList';
import {UnitsFilters} from '@/app/components/unitsFilters';
import { useState } from 'react';
import { UnitsFixedTitle } from '@/app/components/unitsFixedTitle';

export default function UnitsListPage() {

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

  const unitsResum = {
    logo:'/tmp/90-90.webp',
    mes_atual: 'Agosto 2023',
    cub_value: '2.750,52',
    delivery:'Dezembro 2028',
    units_available:'29',
    units_unavailable:'91',
  }

  return (
    <ContainerUnitsPage>
      <UnitsFixedTitle
        unitsResum={unitsResum}
      />
      <UnitsFilters
        types={enterprise[0].all_units}
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
        enterprise={enterprise[0]}
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

