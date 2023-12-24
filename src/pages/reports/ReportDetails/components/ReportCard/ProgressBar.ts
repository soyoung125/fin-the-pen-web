import styled from "@emotion/styled";

interface ProgressBarProps {
  color: string;
  bgColor: string;
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
    color: ${({ color }) => color};
    background: ${({ bgColor }) => bgColor};

    border-radius: 4px;
  }
`;
