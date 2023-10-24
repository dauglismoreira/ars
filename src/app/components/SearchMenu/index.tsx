'use client';

import styled from 'styled-components';
import { Section } from '../grid';
import { EnterpriseFilters } from '../enterpriseFilters';
import { useEffect, useState } from 'react';
import useScreenSize from '@/hooks/useScreenSize';

interface EnterprisePageProps {
    citiesOptions:any;
    situationOptions:any;
    onURLParametersChange:any;
}

export const Filters: React.FC<EnterprisePageProps> = ({onURLParametersChange, citiesOptions, situationOptions}) => {

    const isLargeScreen = useScreenSize(768);
    const [textFilter, setTextFilter] = useState('')
    const [cityFilter, setCityFilter] = useState('')
    const [situationFilter, setSituationFilter] = useState('')
    const [clearFilter, setClearFilter] = useState(0)
    const [open, setOpen] = useState(false)
    const [showFilters, setShowFilters] = useState(false)
    const [count, setCount] = useState(0)

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        if(count > 0){
        urlSearchParams.set('search', textFilter);
        const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
        window.history.pushState({ path: newUrl }, '', newUrl);

        if (onURLParametersChange) {
            onURLParametersChange({
            textFilter,
            });
        }
        }else{
            setTextFilter(urlSearchParams.get('search') ?? '')
            setCount(count => count + 1)
        }
    }, [textFilter])
    /* eslint-disable react-hooks/exhaustive-deps */
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        if(count > 0){
        urlSearchParams.set('city', cityFilter);
        const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
        window.history.pushState({ path: newUrl }, '', newUrl);

        if (onURLParametersChange) {
            onURLParametersChange({
                cityFilter,
            });
        }
        }else{
            setCityFilter(urlSearchParams.get('city') ?? '')
            setCount(count => count + 1)
        }
    }, [cityFilter])
    /* eslint-disable react-hooks/exhaustive-deps */
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        if(count > 0){
        urlSearchParams.set('status', situationFilter);
        const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
        window.history.pushState({ path: newUrl }, '', newUrl);

        if (onURLParametersChange) {
            onURLParametersChange({
                situationFilter,
            });
        }
        }else{
            setSituationFilter(urlSearchParams.get('status') ?? '')
            setCount(count => count + 1)
        }
    }, [situationFilter])
    /* eslint-disable react-hooks/exhaustive-deps */

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
                <Toogle open={open ? 'true' : 'false'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Toogle>
            </SearchBar>
            <OpenFiltersContainer open={open ? 'true' : 'false'}>
                {showFilters ?
                <EnterpriseFilters
                    defaultCity={cityFilter}
                    defaultStatus={situationFilter}
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
                defaultCity={cityFilter}
                defaultStatus={situationFilter}
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

const Toogle = styled.div<{open: string}>`
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
        transform:rotate(${props =>  props.open === 'true' ? '-45deg' : 'none'});
        margin-bottom:${props =>  props.open === 'true' ? '-17px' : '0'};
      }

    &:nth-child(2){
      width:${props =>  props.open === 'true' ? '100%' : '70%'};
      transform:rotate(${props =>  props.open === 'true' ? '45deg' : 'none'});
      margin-bottom:${props =>  props.open === 'true' ? '-15px' : '0'};
    }

    &:nth-child(3){
        width:${props =>  props.open === 'true' ? '0' : '40%'};
    }
  }
`;

const OpenFiltersContainer = styled.div<{open: string}>`
    position:fixed;
    z-index:99;
    background-color:var(--color-red-primary);
    height:${props => props.open === 'true' ? '220px' : '0'};
    top:108px;
    width:100%;
    left:0;
    padding:${props => props.open === 'true' ? '20px 20px 40px' : '0 20px'};
    transition: 0.3s ease-in-out;
`;