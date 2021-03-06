import React from 'react';
import { consumeTopMatched } from '../utils/predict';
import styled from 'styled-components';

export const meta: ElementMeta = {
  type: 'text',
  percentage: 7,
  position: 'any',
  inputs: ['text'],
  keywords: [['$len:2:2', '実質']],
};

export const defaultProps: ElementPropDesciptor = {
  color: '$foreground',
  values: ['実質'],
};

export const predict: ValuePredictor = (suggest, dict, skip) => {
  const consumedWords: string[] = [];
  const val = consumeTopMatched(suggest.valueSuggestions[0], dict, consumedWords, skip);
  return { fulfill: Boolean(val && val.length < 2), values: [val], consumedWords };
};

const VertTextA = ({ color, values }: { color: string; values: string[] }) => (
  <StyledContainer color={color}>
    {values[0].split('').map((s, i) => (
      <div key={i} contentEditable>{s}</div>
    ))}
  </StyledContainer>
);

const StyledContainer = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 100%;
  align-self: center;
  justify-content: center;
  color: ${(props) => props.color};
  font-size: 34px;
  line-height: 34px;
  font-weight: bolder;
  font-family: Roboto;
  > div {
    width: 100%;
    text-align: center;
  }
`;

export default VertTextA;
