import { Fragment } from "react";
import { Input } from "../../fieldsets/index";
import { StyledDesktopItemList } from "./styled";
import { ListFieldName, ItemTotalPrice, RemoveItemButton } from "../styled";
import { ReactComponent as TrashIcon } from "../TrashIcon.svg";

const DesktopItemList = ({ itemList, onInputChange, removeItemHandler }) => (
  <StyledDesktopItemList>
    <ListFieldName>Item Name</ListFieldName>
    <ListFieldName>Qty.</ListFieldName>
    <ListFieldName>Price</ListFieldName>
    <ListFieldName total>Total</ListFieldName>
    {itemList.map((item, index) => {
      return (
        <Fragment key={item.itemId}>
          <Input
            name="itemName"
            value={item.itemName}
            onChange={({ target }) => onInputChange(index, target)}
          />
          <Input
            name="quantity"
            value={item.quantity}
            onChange={({ target }) => onInputChange(index, target)}
          />
          <Input
            name="price"
            value={item.price}
            onChange={({ target }) => onInputChange(index, target)}
          />
          <ItemTotalPrice>{item.price * item.quantity}</ItemTotalPrice>
          <RemoveItemButton
            unavailable={itemList.length === 1}
            onClick={(event) => removeItemHandler(event, index)}
          >
            <TrashIcon />
          </RemoveItemButton>
        </Fragment>
      );
    })}
  </StyledDesktopItemList>
);

export default DesktopItemList;
