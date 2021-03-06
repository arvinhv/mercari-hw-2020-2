import React from "react";
import styled from "styled-components";

export const imgMap = {
  star: (
    top: string,
    left: string,
    inversed: boolean,
    color = "#fff",
    size = 24
  ) => (
    <StyledSVG
      top={top}
      left={left}
      inversed={!!inversed}
      size={size}
      viewBox="0 0 169 327"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 140.5C49.2 96.1 84.5 0 84.5 0C93.3333 36.1667 119.8 114.9 155 140.5C100.2 186.9 85.1667 247.5 84.5 272C84.5 238.8 28.1667 163.667 0 140.5Z"
        fill={color}
      />
      <path
        d="M124 290.257C138.284 277.851 148.532 251 148.532 251C151.097 261.105 158.781 283.104 169 290.257C153.09 303.222 148.726 320.154 148.532 327C148.532 317.724 132.177 296.73 124 290.257Z"
        fill={color}
      />
    </StyledSVG>
  ),
  sakura: (
    top: string,
    left: string,
    inversed: boolean,
    color = "#fff",
    size = 24
  ) => (
    <StyledSVG
      top={top}
      left={left}
      inversed={!!inversed}
      size={size}
      viewBox="0 0 283 328"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M123 0.999989C123 8.99999 156.5 87 154 96C151.5 105 244.261 76.9536 282.5 70C255 129 185.9 254.6 141.5 285C97.1 315.4 34 327.5 34 327.5C34 327.5 9.8 332.7 1 231.5C-10 105 123 -9.00001 123 0.999989Z"
        fill={color}
      />
    </StyledSVG>
  ),
  coin: (
    top: string,
    left: string,
    inversed: boolean,
    color = "#fff",
    size = 24
  ) => (
    <StyledSVG
      top={top}
      left={left}
      inversed={!!inversed}
      size={size + 10}
      xmlns="http://www.w3.org/2000/svg"
    >
      <image height="100%" href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC/VBMVEUAAAD0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/0yB/1zjb43nn766799NH++OT++ur99+D88cX65pn32F/0ySP31VT8773///7////++u365I/1yyz1zDH77LP//fj88ML65Zb54ID43nj54Yf76qn999/++uv42mf200v++ef999343XT1yyr20kn766z///30yCD21E/+/PP//vr54Yb200z65571zzz+++/+++331VL0ySL88cb988///fb200r43Xb9883422z0yin99NT//ff43HD0yCH9887544/20D/77LL42mj77bb76qr422765JP1zzr21E720031zDD54on++/D32GH1zTL54oj99df31lr88MP878D++eb311v66KH2007+/PL42mr54or1zzv21FD77bX42mn76af31lj31lf1zC/20ED65JD1zTP1zTH//fX0yif32WT32GL//vv544754IH+/PT++ej1zTX99tn766388MH//fn88sr88sn65pr54YT88cT//vz54H/+/PH533v65JL1yyv877765pv77LD20kj544z65ZT31VX655z42230yST99ND0yij32F7877/76qv0yiX1zjn87rr++uz88sz87rv9997++OL32WX77LH43HL0yib76qj6550AAAApzxIvAAAAYHRSTlMABTB7kJKLdE0VAjPLzXIUCX70hgwDhf3iQBjGaxzcdQ7WV67yClqZ5gZvWNn3E3doqrjOz+DSvYxZVA37D+irQT38tvYl3mXzkUKWATTkcxap0D+/pCqEyf48BCc+Rht48ysKAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+QJDhcbA4WYyaMAAALLSURBVDjLdZR3XE5hFMdvGZG9iey9yd6Svffmp5Lx8v6ISkZKKiXhjZCMZBZKZJURUciWUSI7e28+H899733Va5w/7j33PN/nOeM550pSdjExzZEzV26zPHmlf4t5vvwwSIGChf4GCheBkRQtVtwYKFGylDCPs7WzH+8wYeKkyRrxVbpMdsKirDBNmaqlQaZNdwRKlcsiLMsDM2aKFSdnl1mus+fMFeo8N7GrgoGoWAmY7056LPBUA1no5U26+ACVVaQKsMiXfos12aL19yCXAFWr6YnqQMBSLluuX9K5+iuMZyBpC9TQZ1sTuhVcGaSsrCJXr9EfF7yWIQFALYHUBmzJdQqx3kO7gXTYOEPooU7cBNQRSF1o3OmshhDGzQja4kTfreJjG723o54kmQJu5A4VsWe4eEbs3MXdQKQfo4D6UgPAjntUIpp7FSXUd4IO2MdAoKHUCIihi4rs5X5VO8CDQBQPAY0lKwSTh9Vi0N5Ql1i6yZHRE02kpogjjyj2ozxmQI4zHjhBnkQzBVHKlaDlqdMKkXgo6QxwVj7FSuScSJ5Td2qZbCcnF7eB58XrAi/KsTQHLjJWJsYlX7ocFUNeuXothUd1esfXgRZSSzmPGzJyk7cATVhqmrhzVx/5Cnzls1pJrYHb1IYCjknpSi8EJ0QqAd0hE9CmrSS1Q0QIvUSPaO8ad2+GA+8B7cUddQDuUxst6r3eGHnAtIdAR7mzreHozmWh+EMekY+BTvqWMgOeJNM9yAjQZJLOOth0VgakC/A0jSmzn2UR4c/JwBdAV7V3TbsBL9PJmFjFW0bYKzECr98A3X8PSQ8b4O07eX7ef/iY+kl0Pz9/EWzPXlmD1LuPMBz5GqIOmvb6N+HUuq/RwPbrL3v4Hn8h88fP2C/60g2w/HPsBw4yymiwxb9+HkOGDrPWLw8vO2Kk9D8xGTV6TJmx5sbGXyQ5lxDMI+EJAAAAAElFTkSuQmCC"/>
    </StyledSVG>
  ),
  leaf: (
    top: string,
    left: string,
    inversed: boolean,
    color = "#fff",
    size = 24
  ) => (
    <StyledSVG
      top={top}
      left={left}
      inversed={!!inversed}
      size={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <image height="100%" href="data:img/png;base64,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"/>
    </StyledSVG>
  )
};


interface Props {
  img: keyof typeof imgMap;
  top: string;
  left: string;
  inversed?: boolean;
  size?: number;
  color?: string;
}

const Decoration = ({
  img,
  top,
  left,
  inversed,
  color = "#fff",
  size = 24
}: Props) => {
  const svg = imgMap[img];
  return svg(top, left, !!inversed, color, size);
};

interface StyledSVGProps {
  top: string;
  left: string;
  inversed?: boolean;
  size: number;
}

const StyledSVG = styled.svg<StyledSVGProps>`
  position: absolute;
  opacity: 0.7;
  height: ${(props) => props.size}px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  ${(props) =>
    props.inversed ? "transform: rotateX(180deg) rotateY(180deg)" : ""};
`;

export default Decoration;
