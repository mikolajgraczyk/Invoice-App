import { Fragment } from "react";
import {
  StyledItems,
  Name,
  NameTotalPriceSpan,
  QuantityPriceSpan,
  StyledMobileItems,
} from "./styled";

const Items = ({ itemList }) => {
  return (
    <>
      <StyledItems>
        <Name>Item Name</Name>
        <Name>QTY.</Name>
        <Name>Price</Name>
        <Name>Total</Name>
        {itemList.map((item) => (
          <Fragment key={item.itemId}>
            <NameTotalPriceSpan>{item.itemName}</NameTotalPriceSpan>
            <QuantityPriceSpan>{item.quantity}</QuantityPriceSpan>
            <QuantityPriceSpan>£ {item.price}</QuantityPriceSpan>
            <NameTotalPriceSpan>£ {item.totalItemPrice}</NameTotalPriceSpan>
          </Fragment>
        ))}
      </StyledItems>
      <StyledMobileItems></StyledMobileItems>
    </>
  );
};

export default Items;
