import React, { useState } from "react";
import Elements from "../components";
import shuffle from "../utils/shuffle";
import styled from "styled-components";
import DecorationOverlay from "../components/DecorationOverlay";
import { getThemeFromColor } from "../utils/colors";
import { Col, Row } from '../styles/Flex';
import Input from '../Input';

import 'string_score';

interface RandomLayoutProps {
  border: boolean;
  colors: {
    primary: string;
    secondary: string;
    border: string;
    foreground: string;
    background: string;
  };
  elements: Array<{ id: keyof typeof Elements; props: any }>;
}

type ElementKey = keyof typeof Elements;

const DynamicLayout = ({ border, colors, elements }: RandomLayoutProps) => {
  const replaceColorToken = (token: string) => {
    if (token?.startsWith("$")) {
      // @ts-ignore
      return colors[token.substr(1)] || colors.primary;
    }
    return token;
  };
  return (
    <StyledWrapper>
      <StyledContainer
        color={colors.primary}
        border={border}
        background={colors.background}
      >
        {elements.map((el, i) => {
          const elementDef = Elements[el.id];
          const ElementClass = elementDef.default;
          const props = {
            ...elementDef.defaultProps,
            hasBorder: border,
            color: replaceColorToken(elementDef.defaultProps.color),
            colors: elementDef.defaultProps.colors
              ? elementDef.defaultProps.colors.map(replaceColorToken)
              : [
                  colors.primary,
                  colors.secondary,
                  colors.foreground,
                  colors.background,
                ],
          };
          return <ElementClass key={i} {...props} />;
        })}
        <DecorationOverlay />
      </StyledContainer>
    </StyledWrapper>
  );
};

interface StyledContainerProps {
  color: string;
  background: string;
  border: boolean;
}

const StyledWrapper = styled.div`
  overflow: hidden;
`;

const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: row;
  position: relative;
  max-height: 100px;
  min-height: 100px;
  max-width: 600px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.background};
  border: ${(props) => (props.border ? `4px solid ${props.color}` : "none")};
`;

export default () => {
  const [userInput, setUserInput] = useState<string>('');

  let combinations: Array<ElementKey[]> = [];
  let maxIteration = 100;
  let i = 0;
  const ids = shuffle(Object.keys(Elements));

  const findMinAndCanBeLast = (ids: string[]) => {
    let min = 100;
    for (let id of ids) {
      const meta = Elements[id].meta;
      if (
        meta.percentage < min &&
        meta.position !== "right" &&
        meta.position !== "center"
      ) {
        min = meta.percentage;
      }
    }
    return min;
  };

  const findCombinations = (
    availableElementIds: ElementKey[],
    current: ElementKey[],
    space: number
  ) => {
    i++;
    if (i > maxIteration) return;
    const matched: string[] = [];
    const remained = [...availableElementIds];
    for (let id of availableElementIds) {
      remained.pop();
      const isFirst = current.length === 0;
      const el = Elements[id];
      const size = el.meta.percentage;
      const isLast = space - size <= findMinAndCanBeLast(remained);
      const isCenter = !isLast && !isFirst;
      if (
        (isFirst && el.meta.position === "right") ||
        (isLast && el.meta.position === "left") ||
        ((isFirst || isLast) && el.meta.position === "center") ||
        (isCenter &&
          el.meta.position !== "center" &&
          el.meta.position !== "any")
      ) {
        continue;
      }
      // found matched
      if (space - size >= 0) {
        if (matched.indexOf(id) !== -1 && el.meta.type === "point") {
          // no op
        }
        // // check correlation
        // //@ts-ignore
        // const score = userInput.score(el.defaultProps.values.join(' '), 0.5);
        // console.log({ score });
        // if (score > 0.1) {
         
        // }
        matched.push(id);
      }
    }
    // no more elements can be put into the banner
    if (matched.length === 0 && space >= 0) {
      combinations.push(current);
    }
    // continue with next slot
    else {
      matched.forEach((id) => {
        findCombinations(
          // remove last matched one from available id list
          availableElementIds.filter((s) => s !== id),
          [...current, id],
          space - Elements[id].meta.percentage
        );
      });
    }
  };

  findCombinations(ids, [], 100);
  console.log(
    `${combinations.length} combinations (${maxIteration} iterations)`
  );
  combinations = combinations.filter(combination => {
    const combinationScore = combination.reduce((acc, cur) => {
      const values = Elements[cur].defaultProps.values.join(' ');
      //@ts-ignore
      const score = userInput.score(values, 0.5);
      acc += score;
      return acc;
    }, 0)
    return combinationScore > 0.2 ? true : false;
  });
  const banners = [
    "red",
    "yellow",
    "#0077ff",
    "#ff5533",
    "#33cc00",
    "red",
    "yellow",
    "#0077ff",
    "#ff5533",
    "#33cc00",
  ].map((baseColor, i) => {
    const n = i * ~~(combinations.length / 10);
    const hasBorder = i > 4;
    console.log(
      combinations[n]?.map((id) => `${id}:${Elements[id].meta.percentage}`)
    );
    return combinations[n] && (
      <DynamicLayout
        key={i}
        border={hasBorder}
        colors={getThemeFromColor(baseColor, hasBorder)}
        elements={combinations[n]?.map((id) => ({
          id,
          props: {},
        }))}
      />
    );
  });
  return (
    <Row>
      <Col>
        {banners}
      </Col>
      <Col>
        <Input setUserInput={setUserInput} />
      </Col>
    </Row>
  );
};
