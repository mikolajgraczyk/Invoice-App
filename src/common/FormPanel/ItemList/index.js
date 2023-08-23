import { Fragment } from "react";
import { Input } from "../fieldsets/index";
import {
  StyledItemList,
  Title,
  DesktopList,
  ListFieldName,
  ItemTotalPrice,
  RemoveItemButton,
} from "./styled";
import { ReactComponent as TrashIcon } from "./TrashIcon.svg";

const ItemList = ({ itemList, setFormData }) => {
  const removeItemHandler = (event, index) => {
    event.preventDefault();

    setFormData((prevData) => ({
      ...prevData,
      itemList: [
        ...prevData.itemList.slice(0, index),
        ...prevData.itemList.slice(index + 1),
      ],
    }));
  };

  return (
    <StyledItemList>
      <Title>Item List</Title>
      <DesktopList>
        <ListFieldName>Item Name</ListFieldName>
        <ListFieldName>Qty.</ListFieldName>
        <ListFieldName>Price</ListFieldName>
        <ListFieldName total>Total</ListFieldName>
        {itemList.map((item, index) => {
          return (
            <Fragment key={item.itemId}>
              <Input value={item.itemName} />
              <Input value={item.quantity} />
              <Input value={item.price} />
              <ItemTotalPrice>{item.price * item.quantity}</ItemTotalPrice>
              <RemoveItemButton
                onClick={(event) => removeItemHandler(event, index)}
              >
                <TrashIcon />
              </RemoveItemButton>
            </Fragment>
          );
        })}
      </DesktopList>
    </StyledItemList>
  );
};

export default ItemList;
