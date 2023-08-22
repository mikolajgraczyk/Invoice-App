import styled from "styled-components";

export const FieldsetLegend = styled.legend`
  color: ${({ theme }) => theme.formPanel.fieldsetText};
  margin-bottom: 24px;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  transition: 0.4s;
`;

export const CountryLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 9px;
  transition: 0.4s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
