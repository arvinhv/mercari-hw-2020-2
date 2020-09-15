import React from "react";
import { jaggedCircle } from "../utils/svg";
import styled from "styled-components";

export const meta: ElementMeta = {
  position: "any",
  type: "text",
  percentage: 14.3,
  inputs: ["text"]
};

const JaggedCircleText = ({
  bgColor,
  color,
  values
}: {
  values: string[];
  bgColor: string;
  color: string;
}) => {
  return (
    <StyledJaggedCircleTextA>
      <StyledJaggedCircle viewBox="0 0 20 20">
        <path d={jaggedCircle(20)} fill={bgColor} />
      </StyledJaggedCircle>
      <StyledText
        color={color}
        style={{ top: "23%", left: "4%", fontSize: 20 }}
      >
        {values[0]}
      </StyledText>
      <StyledText
        color={color}
        style={{ top: "40%", left: "8%", fontSize: 42 }}
      >
        {values[1]}
      </StyledText>
      <StyledText
        color={color}
        style={{ top: "46%", left: "40%", fontSize: 28 }}
      >
        {values[2]}
      </StyledText>
    </StyledJaggedCircleTextA>
  );
};

const StyledJaggedCircleTextA = styled.div`
  max-width: ${meta.percentage}%;
  min-width: ${meta.percentage}%;
  position: relative;
`;

const StyledText = styled.div<{ color: string }>`
  position: absolute;
  color: ${(props) => props.color};
  font-size: 20px;
  transform: rotateZ(-10deg);
  font-weight: 900;
  white-space: nowrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
`;

const StyledJaggedCircle = styled.svg`
  position: absolute;
  display: block;
  top: -30%;
  left: -65%;
  height: 160%;
  width: 160%;
  filter: drop-shadow(3px 3px 8px rgba(0, 0, 0, 0.2));
`;

export default JaggedCircleText;