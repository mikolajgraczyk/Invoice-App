import { nanoid } from "@reduxjs/toolkit";
import { StyledItemList, Title, AddItemButton } from "./styled";
import DesktopItemList from "./DesktopItemList";
import MobileItemList from "./MobileItemList";

const ItemList = ({ itemList, setFormData }) => {
  const onInputChange = (index, target) => {
    const { name, value } = target;

    setFormData((prevData) => ({
      ...prevData,
      itemList: itemList.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              [name]: value,
            }
          : item
      ),
    }));
  };

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

  const addItemHandler = (event) => {
    event.preventDefault();

    setFormData((prevData) => ({
      ...prevData,
      itemList: [
        ...prevData.itemList,
        {
          itemId: nanoid(),
          itemName: "",
          quantity: "",
          price: "",
          totalItemPrice: "",
        },
      ],
    }));
  };

  return (
    <StyledItemList>
      <Title>Item List</Title>
      <DesktopItemList
        itemList={itemList}
        onInputChange={onInputChange}
        removeItemHandler={removeItemHandler}
      />
      <MobileItemList
        itemList={itemList}
        onInputChange={onInputChange}
        removeItemHandler={removeItemHandler}
      />
      <AddItemButton onClick={(event) => addItemHandler(event)}>
        + Add New Item
      </AddItemButton>
    </StyledItemList>
  );
};

export default ItemList;