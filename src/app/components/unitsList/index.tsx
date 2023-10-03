'use client'

import { Section } from '@/app/components/grid';
import { FontRoboto } from '@/app/fonts';
import styled from 'styled-components';


interface EnterpriseData {
    enterprise: {
        all_units: Array<{ type: string; units: UnitData[] }>;
    };
    min:number;
    max:number;
    dorms:string[];
    garage:string[];
    selectedType:string;
}


interface UnitData {
  unit:string;
  status:string;
  area:string;
  value_metter:string;
  dorms:string;
  garages:string;
  value:string;
  condition:string;
  more:string;
  action:string;
}

export const UnitsList: React.FC<EnterpriseData> = ({
    enterprise,
    min,
    max,
    dorms,
    garage,
    selectedType
}) => {


  return (
    <>
      <Section>
        <ExtraContainer className={FontRoboto.className}>
          {enterprise.all_units?.filter(types => selectedType !== '' ? types.type === selectedType : types.type)
          .map((type, index) => (
            <div key={index}>
              <TypeRow><TypeTitle>{type.type}</TypeTitle></TypeRow>
              <LabelsRow>
                  <Label className="unit">Unidade</Label>
                  <Label className="status"></Label>
                  <Label className="area">Área privativa</Label>
                  <Label className="value-metter">Valor por m²</Label>
                  <Label className="dorms">Dormitórios</Label>
                  <Label className="garages">Garagens</Label>
                  <Label className="value">Valor</Label>
                  <Label className="condition"></Label>
                  <Label className="more"></Label>
                  <Label className="action"></Label>
              </LabelsRow>
              {type.units.filter(units =>  parseInt(units.area.replace(' m²', '')) > min && parseInt(units.area.replace(' m²', '')) < max)
              .filter(units => {
                if (dorms.length === 0) {
                  return true;
                } else {
                  return dorms.includes(units.dorms.replace(' suítes', ''));
                }
              })
              .filter(units => {
                if (garage.length === 0) {
                  return true;
                } else {
                  return garage.includes(units.garages.replace(' vagas', ''));
                }
              })
              .map((unit, i) => (
                <div key={i}>
                <UnitRow>
                  <Unit className="unit">{unit.unit}</Unit>
                  <Unit className="status" style={{
                    color: unit.status === 'Disponível' ? '#16B835' : 'var(--color-red-secondary)'
                  }}>{unit.status}</Unit>
                  <Unit className="area">{unit.area}</Unit>
                  <Unit className="value-metter">{unit.value_metter}</Unit>
                  <Unit className="dorms">{unit.dorms}</Unit>
                  <Unit className="garages">{unit.garages}</Unit>
                  <Unit className="value"><span>R$</span>{unit.value}</Unit>
                  <Unit className="condition">{unit.condition}</Unit>
                  <Unit className="more"><a href={window.location.href + '/' + unit.more}>Saber mais</a></Unit>
                  <Unit className="action"><Button><a href={window.location.href + '/' + unit.more + '/interesse'}>Tenho interesse</a></Button></Unit>
                </UnitRow>
                <UnitRowMobile>
                  <StatusRow>
                    <Unit className="unit">{unit.unit}</Unit>
                    <Unit className="status"><span  style={{
                      backgroundColor: unit.status === 'Disponível' ? '#16B835' : 'var(--color-red-secondary)'
                    }}></span>{unit.status}</Unit>
                  </StatusRow>
                  <SkillsRow>
                    <SkillUnitContainer>
                      <Label className="area">Área privativa</Label>
                      <Unit className="area">{unit.area}</Unit>
                    </SkillUnitContainer>
                    <SkillUnitContainer>
                      <Label className="value-metter">Valor por m²</Label>
                      <Unit className="value-metter">{unit.value_metter}</Unit>
                    </SkillUnitContainer>
                    <SkillUnitContainer>
                      <Label className="dorms">Dormitórios</Label>
                      <Unit className="dorms">{unit.dorms}</Unit>
                    </SkillUnitContainer>
                    <SkillUnitContainer>
                      <Label className="garages">Garagens</Label>
                      <Unit className="garages">{unit.garages}</Unit>
                    </SkillUnitContainer>
                  </SkillsRow>
                  <PriceRow>
                    <Label className="value">Valor</Label>
                    <Unit className="price"><span>R$</span>{unit.value}</Unit>
                    <Unit className="condition">{unit.condition}</Unit>
                  </PriceRow>
                  <ActionsRow>
                    <Unit className="more"><a href={window.location.href + '/' + unit.more}>Saber mais</a></Unit>
                    <Unit className="action"><Button><a href={window.location.href + '/' + unit.more + '/interesse'}>Tenho interesse</a></Button></Unit>
                  </ActionsRow>
                </UnitRowMobile>
                </div>
              ))}
            </div>
          ))}

        </ExtraContainer>
      </Section>
    </>  
  );
}

const ExtraContainer = styled.div`
  max-width:1640px;
  margin:280px auto 0;

  @media(max-width:768px){
    margin:170px auto 0;
  }
`;

const LabelsRow = styled.div`
  padding:20px 10px;
  border-bottom:solid 1px var(--color-grey-40);
  display:flex;
  flex-wrap:wrap;

  .unit{
    flex:1;
  }
  .status{
    flex:1;
  }
  .area{
    flex:1;
  }
  .value-metter{
    flex:1;
  }
  .dorms{
    flex:1;
  }
  .garages{
    flex:1;
  }
  .value{
    flex:2;
  }
  .condition{
    flex:3;
    @media(max-width:1200px){
      flex:2;
    }
  }
  .more{
    flex:1;
  }
  .action{
    flex:1;
  }

  @media(max-width:1100px){
    display:none;
  }
`;

const Label = styled.div`
  font-size:var(--overline);
  color:var(--color-grey-60);
`;

const TypeRow = styled.div`
  width:100%;
  padding:10px;
  background-color:var(--color-grey-80);

  @media(max-width:1100px){
    max-width:560px;
    margin:auto;
  }
`;

const TypeTitle = styled.div`
  color:var(--color-grey-0);
`;

const UnitRow = styled.div`
  padding:30px 10px;
  border-bottom:solid 1px var(--color-grey-40);
  display:flex;
  flex-wrap:wrap;

  .unit{
    flex:1;
    font-weight:600;
    @media(max-width:1200px){
      font-size:var(--p-mobile-text-size);
    }
    @media(max-width:560px){
      color:var(--color-grey-0);
    }
  }
  .status{
    flex:1;
    font-weight:600;
    @media(max-width:1200px){
      font-size:var(--p-mobile-text-size);
    }
  }
  .area{
    flex:1;
    @media(max-width:1200px){
      font-size:var(--p-mobile-text-size);
    }
  }
  .value-metter{
    flex:1;
    @media(max-width:1200px){
      font-size:var(--p-mobile-text-size);
    }
  }
  .dorms{
    flex:1;
    @media(max-width:1200px){
      font-size:var(--p-mobile-text-size);
    }
  }
  .garages{
    flex:1;
    @media(max-width:1200px){
      font-size:var(--p-mobile-text-size);
    }
  }
  .value{
    flex:2;
    font-size:var(--h3-text-size);
    display:flex;
    font-weight:600;

    span{
      margin-top:5px;
      margin-right:5px;
      font-size:var(--p-desktop-text-size);
    }
  }
  .condition{
    flex:3;
    @media(max-width:1200px){
      font-size:var(--p-mobile-text-size);
      flex:2;
    }
  }
  .more{
    flex:1;
    @media(max-width:1200px){
      font-size:var(--p-mobile-text-size);
    }

    a{
      text-decoration:underline;
      font-weight:600;
    }
  }
  .action{
    flex:1;
    @media(max-width:1200px){
      font-size:var(--p-mobile-text-size);
    }
  }

  @media(max-width:1100px){
    display:none;
  }
`;

const UnitRowMobile = styled.div`
  padding:0 0 20px;
  border-bottom:solid 1px var(--color-grey-40);
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  max-width:560px;
  margin:auto;

  @media(max-width:1100px){
    .unit{
      color:var(--color-grey-0);
    }
    .status{
      color:var(--color-grey-0);

      span{
        width:11px;
        height:11px;
        border-radius:50%;
        margin-right:5px;
      }
    }
  }
  @media(min-width:1100px){
    display:none;
  }
`;

const StatusRow = styled.div`
  background-color:var(--color-grey-100);
  width:100%;
  display:flex;
  justify-content:space-between;
  padding:10px;
`;

const Unit = styled.div`
    display:flex;
    align-items:center;
`;

const SkillsRow = styled.div`
  display:flex;
  flex-wrap:wrap;
  padding:0 20px 15px;
  border-bottom:solid 1px var(--color-grey-40);
`;

const SkillUnitContainer = styled.div`
  width:calc(50% - 10px);
  min-width:160px;
  margin-top:15px;
`;

const PriceRow = styled.div`
  padding:15px 20px;
  display:flex;
  flex-direction:column;
  gap:5px;

  .price{
    flex:2;
    font-size:var(--h3-text-size);
    display:flex;
    font-weight:600;

    span{
      margin-top:5px;
      margin-right:5px;
      font-size:var(--p-desktop-text-size);
    }
  }
`;

const ActionsRow = styled.div`
  display:flex;
  gap:20px;
  flex-direction:column;
  align-items:center;
  width:100%;
  padding:0 20px;

  .more{
    margin-top:20px;

    a{
      text-decoration:underline;
      font-weight:600;
    }
  }
  .action{
    min-width:169px;
    font-weight:600;
  }
`;

const Button = styled.button`
  border:solid 1px var(--color-red-primary);
  width:100%;
  max-width:169px;
  height:48px;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:transparent;
  color:var(--color-red-primary);
  cursor:pointer;

  &:hover{
    color:var(--color-grey-100);
    border:solid 1px var(--color-grey-100);
  }

  @media(max-width:1200px){
    font-size:var(--p-mobile-text-size);
  }
`;