import { Fragment, useContext } from "react";
import { itemListContext } from "..";
import { formContext } from "../..";
import { Input } from "../../fieldsets/index";
import { StyledDesktopItemList } from "./styled";
import { ListFieldName, ItemTotalPrice, RemoveItemButton } from "../styled";
import { ReactComponent as TrashIcon } from "../TrashIcon.svg";

const DesktopItemList = () => {
  const { formData, onInputChange, removeItemHandler } =
    useContext(itemListContext);

  const { isFormValid, setFormData } = useContext(formContext);

  return (
    <StyledDesktopItemList>
      <ListFieldName>Item Name</ListFieldName>
      <ListFieldName>Qty.</ListFieldName>
      <ListFieldName>Price</ListFieldName>
      <ListFieldName total>Total</ListFieldName>
      {formData.itemList.map((item, index) => {
        return (
          <Fragment key={item.itemId}>
            <Input
              required={!isFormValid}
              name="itemName"
              value={item.itemName}
              onChange={({ target }) => onInputChange(index, target)}
            />
            <Input
              required={!isFormValid}
              type="number"
              name="quantity"
              value={item.quantity}
              onChange={({ target }) => onInputChange(index, target)}
            />
            <Input
              required={!isFormValid}
              type="number"
              name="price"
              value={item.price}
              onChange={({ target }) => onInputChange(index, target)}
            />
            <ItemTotalPrice>{item.totalItemPrice}</ItemTotalPrice>
            <RemoveItemButton
              onClick={(event) => removeItemHandler(event, index)}
            >
              <TrashIcon />
            </RemoveItemButton>
          </Fragment>
        );
      })}
    </StyledDesktopItemList>
  );
};

export default DesktopItemList;
