import styled from "@emotion/styled";

interface ProgressBarProps {
  color: string;
  bgColor: string;
  max: number;
  value: number;
}

export const ProgressBar = styled.progress<ProgressBarProps>`
  width: 100%;
  height: 24px;

  -webkit-appearance: none;
  appearance: none;

  // 배경

  &::-webkit-progress-bar {
    background-color: #f7f7f8;

    border-radius: 4px;
  }

  // 실제

  &::-webkit-progress-value {
    background: ${({ bgColor }) => bgColor};

    border-radius: 4px;
  }

  &::after {
    content: "${({ value }) => value}%";
    //height: 24px;
    font-size: 12px;
    font-weight: 600;
    position: relative;
    top: -26px;
    left: calc(${({ value, max }) => (value / max) * 100}% - 40px);
    color: ${({ color }) => color};
  }
`;
