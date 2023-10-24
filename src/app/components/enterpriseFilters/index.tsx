import styled from 'styled-components';
import { Select } from './select';
import { TextInput } from './textInput';
import { FaSearch } from 'react-icons/fa';
import useScreenSize from '@/hooks/useScreenSize';

interface EnterpriseFiltersProps {
  citiesOptions: any;
  situationOptions: any;
  onCityChange: (selectedValue: string) => void;
  onSituationChange: (selectedValue: string) => void;
  onSearchChange: (textValue: string) => void;
  clearFilter: number;
  defaultCity:string;
  defaultStatus?:string;
}

export const EnterpriseFilters: React.FC<EnterpriseFiltersProps> = ({
  citiesOptions,
  situationOptions,
  onCityChange,
  onSituationChange,
  onSearchChange,
  clearFilter,
  defaultCity,
  defaultStatus
}) => {

  const isLargeScreen = useScreenSize(768);  

  return (
    <FiltersContainer>
        <div><Select
            defaultValue={defaultCity}
            options={citiesOptions}
            onChange={onCityChange}
            clearFilter={clearFilter}
            placeholder={isLargeScreen.isLargeScreen ? 'Cidade' : 'Procure por cidade do empreendimento'}
        /></div>
        <div><Select
            defaultValue={defaultStatus}
            options={situationOptions}
            onChange={onSituationChange}
            clearFilter={clearFilter}
            placeholder={isLargeScreen.isLargeScreen ? 'Status' : 'Procure por status do empreendimento'}
        /></div>
        <div><TextInput
            icon={<FaSearch />}
            onChange={onSearchChange}
            param='textFilter'
            clearFilter={clearFilter}
        /></div>
    </FiltersContainer>
  );
};

const FiltersContainer = styled.div`
    width:100%;
    display:flex;
    gap:20px;
    flex-wrap:wrap;

    div {
        flex:1;
    }

    @media(max-width:768px){
      flex-direction:column;
    }
`;