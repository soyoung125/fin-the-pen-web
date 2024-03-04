import styled from "@emotion/styled";

export const AmountBox = styled.div<{ $isTitle?: boolean }>`
  ${({ $isTitle }) =>
    $isTitle && `border-radius: 4px 4px 0 0; background-color: #F7F7F8;`}
  padding: 12px;
`;

export const AmountText = styled.text`
  height: 24px;
  font-size: 16px;
  font-weight: 500;
`;
