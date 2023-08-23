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

export const DesktopList = styled.div`
  display: grid;
  column-gap: 16px;
  row-gap: 18px;
  grid-template-columns: 214px 46px 100px 56px auto;
  align-items: center;
  margin-left: 1px;
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
`;

export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.formPanel.totalPrice};
  width: 100%;
  height: 100%;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;
