import styled from "styled-components";

export const StyledTopSection = styled.div`
  display: flex;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.main.mainText};
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.125px;
  margin: 0;
  transition: 0.4s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.75px;
  }
`;

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.main.text1};
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.1px;
  transition: 0.4s;
`;

export const ButtonsSection = styled.div``;
