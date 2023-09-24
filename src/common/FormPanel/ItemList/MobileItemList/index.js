import { useContext } from "react";
import { itemListContext } from "..";
import { StyledMobileItemList, ItemInputField, BottomFields } from "./styled";
import { ItemTotalPrice, RemoveItemButton } from "../styled";
import { ReactComponent as TrashIcon } from "../TrashIcon.svg";
import { Input, Label } from "../../fieldsets";

const MobileItemList = ({ isFormValid }) => {
  const { formData, onInputChange, removeItemHandler } =
    useContext(itemListContext);

  return (
    <StyledMobileItemList>
      {formData.itemList.map((item, index) => {
        return (
          <ItemInputField key={item.itemId}>
            <Label itemList itemName>
              Item Name
              <Input
                name="itemName"
                value={item.itemName}
                onChange={({ target }) => onInputChange(index, target)}
              />
            </Label>
            <BottomFields>
              <Label itemList>
                Qty.
                <Input
                  name="quantity"
                  value={item.quantity}
                  onChange={({ target }) => onInputChange(index, target)}
                />
              </Label>
              <Label itemList>
                Price
                <Input
                  name="price"
                  value={item.price}
                  onChange={({ target }) => onInputChange(index, target)}
                />
              </Label>
              <Label itemList>
                Total
                <ItemTotalPrice>{item.price * item.quantity}</ItemTotalPrice>
              </Label>
              <RemoveItemButton
                onClick={(event) => removeItemHandler(event, index)}
              >
                <TrashIcon />
              </RemoveItemButton>
            </BottomFields>
          </ItemInputField>
        );
      })}
    </StyledMobileItemList>
  );
};

export default MobileItemList;
