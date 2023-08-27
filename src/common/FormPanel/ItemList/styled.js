import styled, { css } from "styled-components";

export const StyledItemList = styled.div``;

export const Title = styled.span`
  color: ${({ theme }) => theme.formPanel.itemListText};
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.375px;
  display: block;
  margin-bottom: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 22px;
  }
`;

export const ListFieldName = styled.span`
  color: ${({ theme }) => theme.formPanel.inputName};
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.1px;
  margin-bottom: -3px;
  transition: 0.4s;

  ${({ total }) =>
    total &&
    css`
      grid-column-start: 4;
      grid-column-end: 6;
    `}
`;

export const ItemTotalPrice = styled.span`
  color: ${({ theme }) => theme.formPanel.totalPrice};
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  transition: 0.4s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 18px;
  }
`;

export const RemoveItemButton = styled.button`
  border: 2px red solid;
  display: flex;
  align-items: center;
  background: none;
  max-height: 47px;
  /* align-self: flex-end; */
  color: ${({ theme }) => theme.formPanel.totalPrice};
  width: 100%;
  height: 100%;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const AddItemButton = styled.button`
  margin-top: 18px;
  width: 100%;
  padding: 18px 0 15px;
  border: none;
  border-radius: 24px;
  background: ${({ theme }) => theme.formPanel.bottomButtonBackground};
  color: ${({ theme }) => theme.formPanel.bottomButtonText};
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  transition: 0.4s;

  &:hover {
    background: ${({ theme }) => theme.formPanel.bottomButtonHover};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 48px;
  }
`;
