import { StyledMobileItemList, ItemInputField } from "./styled";
import { ItemTotalPrice, RemoveItemButton } from "../styled";
import { ReactComponent as TrashIcon } from "../TrashIcon.svg";
import { Input, Label } from "../../fieldsets";

const MobileItemList = ({ itemList, onInputChange, removeItemHandler }) => (
  <StyledMobileItemList>
    {itemList.map((item, index) => {
      return (
        <ItemInputField>
          <Label itemList itemName>
            Item Name
            <Input
              name="itemName"
              value={item.itemName}
              onChange={({ target }) => onInputChange(index, target)}
            />
          </Label>
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
        </ItemInputField>
      );
    })}
  </StyledMobileItemList>
);

export default MobileItemList;
