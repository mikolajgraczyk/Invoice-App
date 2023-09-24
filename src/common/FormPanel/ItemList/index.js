import { useContext, createContext } from "react";
import { formContext } from "..";
import { nanoid } from "@reduxjs/toolkit";
import { StyledItemList, Title, AddItemButton } from "./styled";
import DesktopItemList from "./DesktopItemList";
import MobileItemList from "./MobileItemList";

export const itemListContext = createContext();

const ItemList = () => {
  const { formData, setFormData, isFormValid } = useContext(formContext);

  const onInputChange = (index, target) => {
    const { name, value } = target;

    setFormData((prevData) => ({
      ...prevData,
      itemList: formData.itemList.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            [name]: value,
          };
        }
        return item;
      }),
    }));
  };

  const removeItemHandler = (event, index) => {
    event.preventDefault();

    if (formData.itemList.length > 1) {
      setFormData((prevData) => ({
        ...prevData,
        itemList: [
          ...prevData.itemList.slice(0, index),
          ...prevData.itemList.slice(index + 1),
        ],
      }));
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      itemList: [
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
      <itemListContext.Provider
        value={{ formData, onInputChange, removeItemHandler }}
      >
        <DesktopItemList isFormValid={isFormValid} />
        <MobileItemList isFormValid={isFormValid} />
      </itemListContext.Provider>
      <AddItemButton onClick={(event) => addItemHandler(event)}>
        + Add New Item
      </AddItemButton>
    </StyledItemList>
  );
};

export default ItemList;
