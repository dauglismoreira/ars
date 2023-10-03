import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface SectionProps {
  children?: ReactNode;
  background?: string;
  fixHeight?: number;
  padding?: string;
  zindex?: string;
  position?: string;
  className?: string;
}

const StyledSection = styled.div<SectionProps>`
  width: 100%;
  margin: 0 auto;
  padding: ${(props) => props.padding || '20px 0 15px'};
  overflow: hidden;
  background: ${(props) => props.background || 'transparent'};
  position: ${(props) => props.position || 'static'};
  height: ${(props) => props.fixHeight || 'auto'};
  z-index: ${(props) => props.zindex || '99'};
`;

export const Section: React.FC<SectionProps> = ({ children, className, zindex, padding, background, fixHeight, position }) => {
  return <StyledSection className={className} zindex={zindex} padding={padding} background={background} fixHeight={fixHeight} position={position}>{children}</StyledSection>;
};

interface ContainerProps {
  children?: ReactNode;
  background?: string;
}

const StyledContainer = styled.div<ContainerProps>`
  max-width: 1200px;
  margin: 0 auto;
  background: ${(props) => props.background || 'transparent'};
`;

export const Container: React.FC<ContainerProps> = ({ children, background }) => {
  return <StyledContainer background={background}>{children}</StyledContainer>;
};

interface RowProps {
  children?: ReactNode;
  margin?: string;
  padding?: string;
  breakpoint?: boolean;
  reverse?: boolean;
  className?: string;
  gap?: string;
}

const StyledRow = styled.div<RowProps>`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  margin: ${(props) => props.margin || '-8px 0'};
  padding: ${(props) => props.padding || '0'};
  justify-content: space-between;
  gap: ${(props) => props.gap || '0'};
  ${(props) => props.breakpoint && (props.reverse ? 'flex-direction: column-reverse;' : 'flex-direction: column;')}
`;

export const Row: React.FC<RowProps> = ({ children, gap, className, reverse, breakpoint, margin, padding }) => {
  return <StyledRow className={className} gap={gap} reverse={reverse} breakpoint={breakpoint} margin={margin} padding={padding}>{children}</StyledRow>;
};

interface ColProps {
  children?: ReactNode;
  flex?: number;
  border?: string;
  padding?: string;
  align?: 'left' | 'center' | 'right' | undefined;
  className?: string;
}

const StyledCol = styled.div<ColProps>`
  flex: ${(props) => props.flex || 'auto'};
  padding: ${(props) => props.padding || '8px'};
  border: ${(props) => props.border || 'none'};
  text-align: ${(props) => props.align || 'left'};
`;

export const Col: React.FC<ColProps> = ({ children, align, border, padding, flex, className }) => {
  return <StyledCol flex={flex} padding={padding} border={border} align={align} className={className}>{children}</StyledCol>;
};