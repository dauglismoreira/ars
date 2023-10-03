import styled from 'styled-components';
import { Select } from './select';
import { TextInput } from './textInput';
import { FaSearch } from 'react-icons/fa';
import useScreenSize from '@/hooks/useScreenSize';

interface EnterpriseFiltersProps {
  citiesOptions: { label: string; value: string }[];
  situationOptions: { label: string; value: string }[];
  onCityChange: (selectedValue: string) => void;
  onSituationChange: (selectedValue: string) => void;
  onSearchChange: (textValue: string) => void;
  clearFilter: number
}

export const EnterpriseFilters: React.FC<EnterpriseFiltersProps> = ({
  citiesOptions,
  situationOptions,
  onCityChange,
  onSituationChange,
  onSearchChange,
  clearFilter
}) => {

  const isLargeScreen = useScreenSize(768);  

  return (
    <FiltersContainer>
        <div><Select
            options={citiesOptions}
            onChange={onCityChange}
            clearFilter={clearFilter}
            placeholder={isLargeScreen.isLargeScreen ? 'Cidade' : 'Procure por cidade do empreendimento'}
        /></div>
        <div><Select
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