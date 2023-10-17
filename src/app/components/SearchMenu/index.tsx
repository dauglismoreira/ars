'use client';

import styled from 'styled-components';
import { Section } from '../grid';
import { EnterpriseFilters } from '../enterpriseFilters';
import { useEffect, useState } from 'react';
import useScreenSize from '@/hooks/useScreenSize';

interface EnterprisePageProps {
    citiesOptions:any;
    situationOptions:any;
}

export const Filters: React.FC<EnterprisePageProps> = ({citiesOptions, situationOptions}) => {

    const isLargeScreen = useScreenSize(768);
    const [textFilter, setTextFilter] = useState('')
    const [cityFilter, setCityFilter] = useState('')
    const [situationFilter, setSituationFilter] = useState('')
    const [clearFilter, setClearFilter] = useState(0)
    const [open, setOpen] = useState(false)
    const [showFilters, setShowFilters] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        urlSearchParams.set('textFilter', textFilter);
        const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    }, [textFilter])

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        urlSearchParams.set('cityFilter', cityFilter);
        const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    }, [cityFilter])

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        urlSearchParams.set('situationFilter', situationFilter);
        const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    }, [situationFilter])

    /* eslint-disable react-hooks/exhaustive-deps */
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
    /* eslint-disable react-hooks/exhaustive-deps */

    useEffect(() => {
        if (open) {
          document.documentElement.classList.add('no-scroll');
        } else {
          document.documentElement.classList.remove('no-scroll');
        }
      }, [open]);

    return(
        <BarContent>
        <Section background="var(--color-red-primary)" padding={'0'}>
            {!isLargeScreen.isLargeScreen ?
            <>
            <SearchBar onClick={() => setOpen(!open)}>
                <p>Filtro</p>
                <Toogle open={open}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Toogle>
            </SearchBar>
            <OpenFiltersContainer open={open}>
                {showFilters ?
                <EnterpriseFilters
                    citiesOptions={citiesOptions}
                    situationOptions={situationOptions}
                    onCityChange={(selectedValue) => {
                        setCityFilter(selectedValue);
                    }}
                    onSituationChange={(selectedValue) => {
                        setSituationFilter(selectedValue);
                    }}
                    onSearchChange={(textValue) => {
                        setTextFilter(textValue);
                    }}
                    clearFilter={clearFilter}
                />
                :
                <></>
                }
            </OpenFiltersContainer>
            </>
            :
            <SearchBar>
            <EnterpriseFilters
                citiesOptions={citiesOptions}
                situationOptions={situationOptions}
                onCityChange={(selectedValue) => {
                    setCityFilter(selectedValue);
                }}
                onSituationChange={(selectedValue) => {
                    setSituationFilter(selectedValue);
                }}
                onSearchChange={(textValue) => {
                    setTextFilter(textValue);
                }}
                clearFilter={clearFilter}
            />
            </SearchBar>
            }
        </Section>
        </BarContent>
    )
}

const BarContent = styled.div`
  position:fixed;
  width:100%;
  z-index:9;
  top:57px;

  @media(max-width:768px){
    top:57px;
  }
`;

const SearchBar = styled.div`
  width:100%;
  max-width:720px;
  height:72px;
  margin:auto;
  padding:5px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  position:relative;

  p {
    color:var(--color-grey-0);
  }

  @media(max-width:768px){
    height:56px;
  }
`;

const Toogle = styled.div<{open: boolean}>`
  width:30px;
  height:20px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:flex-end;

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
      width:${props =>  props.open ? '100%' : '70%'};
      transform:rotate(${props =>  props.open ? '45deg' : 'none'});
      margin-bottom:${props =>  props.open ? '-15px' : '0'};
    }

    &:nth-child(3){
        width:${props =>  props.open ? '0' : '40%'};
    }
  }
`;

const OpenFiltersContainer = styled.div<{open: boolean}>`
    position:fixed;
    z-index:99;
    background-color:var(--color-red-primary);
    height:${props => props.open ? '220px' : '0'};
    top:108px;
    width:100%;
    left:0;
    padding:${props => props.open ? '20px 20px 40px' : '0 20px'};
    transition: 0.3s ease-in-out;
`;