import React from 'react';
import styled from 'styled-components';
import { consumeTopMatched } from '../utils/predict';

export const meta: ElementMeta = {
  type: 'text',
  percentage: 14.5,
  position: 'any',
  inputs: ['text', 'text'],
  keywords: [
    ['出品', '$len:2:2'],
    ['するだけで', '$len:5:3'],
  ],
};

export const defaultProps: ElementPropDesciptor = {
  colors: ['$foreground', '$text'],
  values: ['出品', 'するだけで'],
};

export const predict: ValuePredictor = (suggest, dict, skip) => {
  const consumedWords: string[] = [];
  const val1 = consumeTopMatched(suggest.valueSuggestions[0], dict, consumedWords, skip);
  const val2 = consumeTopMatched(suggest.valueSuggestions[1], dict, consumedWords, skip);
  return { fulfill: Boolean(val1 && val1.length < 2 && val2), values: [val1, val2], consumedWords };
};

const StackTextBigSmallA = ({ colors, values }: { values: string[]; colors: string[]; singleColor?: boolean }) => {
  const [foreground, textColor] = colors || [];
  return (
    <StyledContainer color={foreground} color2={textColor}>
      <StyledBlock contentEditable>{values[0]}</StyledBlock>
      <StyledBlock contentEditable>{values[1]}</StyledBlock>
    </StyledContainer>
  );
};

const StyledBlock = styled.div`
  position: relative;
  background-size: 100% 20%;
  background-repeat: no-repeat;
  background-position: bottom;
`;

const StyledContainer = styled.div<{
  color: string;
  color2: string;
}>`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  flex: 1;
  justify-content: center;
  align-self: center;
  line-height: 24px;
  font-family: Roboto Bold;
  max-width: ${meta.percentage}%;
  min-width: ${meta.percentage}%;
  padding: 4px;
  div:nth-child(1) {
    text-align: center;
    font-size: 2.5em;
    font-weight: bolder;
    color: ${(props) => props.color};
    line-height: 100%;
  }
  div:nth-child(2) {
    text-align: center;
    font-size: 1em;
    color: ${(props) => props.color2};
  }
  > div {
    position: relative;
    font-size: 20px;
    white-space: nowrap;
  }
`;

export default StackTextBigSmallA;
