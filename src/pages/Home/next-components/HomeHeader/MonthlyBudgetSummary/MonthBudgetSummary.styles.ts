import styled from "@emotion/styled";

export const SummaryContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
`;

export const SummaryItem = styled.div<{
  $useable?: boolean;
}>`
  display: flex;
  padding: 12px 16px;
  gap: 4px;
  flex-direction: column;
  align-self: stretch;
  background: ${({ $useable }) => ($useable ? "#EAE1FD" : "#735BF2")};
  color: ${({ $useable }) => ($useable ? "#735BF2" : "#fff")};
`;
