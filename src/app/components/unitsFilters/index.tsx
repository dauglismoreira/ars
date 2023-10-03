'use client'

import { Section } from '@/app/components/grid';
import { FontRoboto } from '@/app/fonts';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import {AiOutlineDownload} from 'react-icons/ai';
import useScreenSize from '@/hooks/useScreenSize';

interface TypeProps {
  type:string;
}

interface UnitsFiltersProps {
    types: TypeProps[];
    min: number;
    max: number;
    dorms: string[];
    garage: string[];
    selectedType: string;
    onMinValueChange: (minValue: number) => void;
    onMaxValueChange: (maxValue: number) => void;
    onDormsNumberChange: (dormsNumber: string[]) => void;
    onGarageNumberChange: (garageNumber: string[]) => void;
    onTypeChange: (type: string) => void;
}


export const UnitsFilters: React.FC<UnitsFiltersProps> = ({
    types,
    min,
    max,
    dorms,
    garage,
    selectedType,
    onMinValueChange,
    onMaxValueChange,
    onDormsNumberChange,
    onGarageNumberChange,
    onTypeChange,
}) => {

  const isLargeScreen = useScreenSize(1100);

  const [open, setOpen] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [count, setCount] = useState(0)

  const handleItemClick = (
    value: string,
    list: string[],
    setList: (newList: string[]) => void
  ) => {
    if (list.includes(value)) {
      const updatedList = list.filter(item => item !== value);
      setList(updatedList);
    } else {
      const updatedList = [...list, value];
      setList(updatedList);
    }
  };

  useEffect(() => {
    if(count > 0){
    if(!showFilters){
        setTimeout(() => {
            setShowFilters(!showFilters)
        }, 300);
    }else{
        setShowFilters(!showFilters)
    }}else{
        setCount(count => count + 1)
    }
}, [open])

  useEffect(() => {
    if (open) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
  }, [open]);


  return (
    <ContainerFilters>
      <Section className="filtersSection"  background="var(--color-red-primary)">
        <FixedFilters className="no-desktop">
          <ContainerToogle>
            <p>Filtro</p>
            <Toogle open={open}  onClick={() => setOpen(!open)}> 
              <span></span>
              <span></span>
              <span></span>
            </Toogle>
          </ContainerToogle>
          <PDFActionMobile>
            <AiOutlineDownload size="2rem"/>
            Gerar PDF
          </PDFActionMobile>
        </FixedFilters>
        <ExtraContainer className={FontRoboto.className}  open={open}>
          {showFilters || isLargeScreen.isLargeScreen ?
            <>
              <DormsFilter>
                <Label>Dormitórios</Label>
                <OptionsContainer>
                  <Item
                    className={dorms.includes('2') ? 'selected' : ''}
                    onClick={() => handleItemClick('2', dorms, onDormsNumberChange)}
                  >2</Item>
                  <Item
                    className={dorms.includes('3') ? 'selected' : ''}
                    onClick={() => handleItemClick('3', dorms, onDormsNumberChange)}
                  >3</Item>
                  <Item
                    className={dorms.includes('4') ? 'selected' : ''}
                    onClick={() => handleItemClick('4', dorms, onDormsNumberChange)}
                  >4</Item>
                  <Item
                    className={dorms.includes('5') ? 'selected' : ''}
                    onClick={() => handleItemClick('5', dorms, onDormsNumberChange)}
                  >5</Item>
                  <Item
                    className={dorms.includes('6') ? 'selected' : ''}
                    onClick={() => handleItemClick('6', dorms, onDormsNumberChange)}
                  >6</Item>
                </OptionsContainer>
              </DormsFilter>
              <GarageFilter>
                <Label>Vagas de garagem</Label>
                <OptionsContainer>
                  <Item
                    className={garage.includes('2') ? 'selected' : ''}
                    onClick={() => handleItemClick('2', garage, onGarageNumberChange)}
                  >2</Item>
                  <Item
                    className={garage.includes('3') ? 'selected' : ''}
                    onClick={() => handleItemClick('3', garage, onGarageNumberChange)}
                  >3</Item>
                  <Item
                    className={garage.includes('4') ? 'selected' : ''}
                    onClick={() => handleItemClick('4', garage, onGarageNumberChange)}
                  >4</Item>
                  <Item
                    className={garage.includes('5') ? 'selected' : ''}
                    onClick={() => handleItemClick('5', garage, onGarageNumberChange)}
                  >5</Item>
                  <Item
                    className={garage.includes('6') ? 'selected' : ''}
                    onClick={() => handleItemClick('6', garage, onGarageNumberChange)}
                  >6</Item>
                </OptionsContainer>
              </GarageFilter>
              <AreaFilter>
                <Label>Área m²</Label>
                <Values>
                  <div>{min}</div>
                  <div>{max}</div>
                </Values>
                <MultiRangeSlider
                  min={70}
                  max={300}
                  className={'range'}
                  style={{border: 'none', boxShadow: 'none', padding: '15px 0'}}
                  label='false'
                  ruler='false'
                  barInnerColor='var(--color-grey-0)'
                  barLeftColor='var(--color-grey-60)'
                  barRightColor='var(--color-grey-60)'
                  subSteps='false'
                  step={5}
                  minValue={min}
                  maxValue={max}
                  onInput={(e: ChangeResult) => {
                    onMinValueChange(e.minValue);
                    onMaxValueChange(e.maxValue);
                  }}
                ></MultiRangeSlider>
              </AreaFilter>
              <TypesFilter>
                <Label>Tipos</Label>
                <SelectContainer>
                  <select value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
                    <option value=''>Mostrar todos</option>
                    {types.map((type, index) => (
                      <option key={index} value={type.type}>{type.type}</option>
                    ))}
                  </select>
                </SelectContainer>
              </TypesFilter>
              <PDFAction className="no-mobile">
                <Button>Gerar PDF</Button>
              </PDFAction>
            </>
            :
            <></>
          }

        </ExtraContainer>
      </Section>
    </ContainerFilters>  
  );
}

const ContainerFilters = styled.div`
  position:fixed;
  width:100%;
  top:197px;
  left:0;
  right:0;

  .filtersSection{
    width:100%;
  }

  @media(max-width:1100px){
    .filtersSection{
      padding:0;
    }
  }

  @media(min-width:1100px){
    .no-desktop{
      display:none;
    }
  }

  @media(max-width:768px){
    top:174spx;
  }
`;

const ExtraContainer = styled.div<{open: boolean}>`
  max-width:1640px;
  margin:auto;
  display:flex;
  gap:50px;
  padding:20px;
  background-color:var(--color-red-primary);


  @media(max-width:1100px){
    height:${props => props.open ? '410px' : '0'};
    margin-top:50px;
    flex-direction:column;
    padding:${props => props.open ? '30px 20px' : '0 20px'};

    .no-mobile {
      display:none;
    }
  }
`;

const FixedFilters = styled.div`
  display:flex;
  padding:10px 20px;
  justify-content:space-between;
  position:fixed;
  background-color:var(--color-red-primary);
  right:0;
  left:0;
`;

const PDFActionMobile = styled.div`
  color:var(--color-grey-0);
  display:flex;
  align-items:center;
  gap:8px;
`;

const Toogle = styled.div<{open: boolean}>`
  width:30px;
  height:20px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:flex-end;
  margin-top:7px;

  span{
    height:2px;
    border-radius:2px;
    width:100%;
    background-color:var(--color-grey-0);
    transition: 0.3s ease-in-out;

    &:nth-child(1){
        transform:rotate(${props =>  props.open ? '-45deg' : 'none'});
        margin-bottom:${props =>  props.open ? '-17px' : '0'};
      }

    &:nth-child(2){
      width:${props =>  props.open ? '100%' : '100%'};
      transform:rotate(${props =>  props.open ? '45deg' : 'none'});
      margin-bottom:${props =>  props.open ? '-15px' : '0'};
    }

    &:nth-child(3){
        width:${props =>  props.open ? '0' : '100%'};
    }
  }
`;

const ContainerToogle = styled.div`
  display:flex;
  gap:15px;
  align-items:center;

  p{
    font-size:var(--p-desktop-text-size);
    color:var(--color-grey-0);
    margin-bottom:-5px;
  }
`;

const DormsFilter = styled.div`
    flex:1;
`;

const GarageFilter = styled.div`
  flex:1;
`;

const AreaFilter = styled.div`
  flex:2;
  max-width:210px;

  .range{
    width:100%;
    margin-top:5px;
  }
  .range .bar div{
    box-shadow: none!important;
  }
  .multi-range-slider .thumb::before{
    box-shadow: none;
    border:none;
    width:12px;
    height:12px;
    margin: -5px -5px;
  }
  .multi-range-slider .bar-inner{
    border:none;
    height: 3px;
  }
  .multi-range-slider .caption{
    display:none!important;
  }
`;

const TypesFilter = styled.div`
  flex:1;

  @media(max-width:1100px){
    margin-top:-40px;
  }
`;

const PDFAction = styled.div`
  flex:5;
  justify-content:flex-end;
  display:flex;
  align-items:center;

  @media(max-width:1340px){
    flex:4;
  }
`;

const OptionsContainer = styled.div`
  display:flex;
  gap:8px;
`;

const Item = styled.div`
  border:solid 1px var(--color-grey-0);
  display:flex;
  align-items:center;
  justify-content:center;
  width:32px;
  height:32px;
  color:var(--color-grey-0);
  cursor:pointer;

  &.selected{
    color:var(--color-red-primary);
    background-color:var(--color-grey-0);
  }
`;

const Label = styled.div`
  color:var(--color-grey-0); 
  font-size:var(--overline);
  margin-bottom:3px;
`;

const SelectContainer = styled.div`
  padding:0 5px 3px 0;
  border-bottom:solid 1px var(--color-grey-0);
  width:100%;
  max-width:220px;

  select{
    background-color:transparent;
    border:none;
    color:var(--color-grey-0);
    width:100%;
    max-width:215px;
    min-width:215px;
    height:30px;

    :focus {
      outline: none!important;
    }

    option {
      background-color: var(--color-red-primary);
    }
  }
`;

const Button = styled.div`
  border:solid 1px var(--color-grey-0);
  height:48px;
  width:100%;
  max-width:169px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--color-grey-0);
  cursor:pointer;
`;

const Values = styled.div`
  display:flex;
  width:100%;
  justify-content:space-between;
  margin-bottom:-8px;

  div{
    font-size:var(--overline);
    color:var(--color-grey-0);
  }
`;