import { useContext, createContext, useState } from "react";
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

    setFormData((prevState) => {
      const newItemList = prevState.itemList.map((item, itemIndex) => {
        if (itemIndex === index) {
          const newItem = {
            ...item,
            [name]: value,
          };
          newItem.totalItemPrice = newItem.price * newItem.quantity;
          return newItem;
        }
        return item;
      });

      let totalPrice = 0;
      newItemList.forEach((item) => {
        totalPrice = totalPrice + item.totalItemPrice;
      });

      return {
        ...prevState,
        itemList: newItemList,
        totalPrice: totalPrice.toFixed(2),
      };
    });
  };

  const removeItemHandler = (event, index) => {
    event.preventDefault();

    setFormData((prevData) => {
      if (prevData.itemList.length > 1) {
        return {
          ...prevData,
          itemList: [
            ...prevData.itemList.slice(0, index),
            ...prevData.itemList.slice(index + 1),
          ],
        };
      }
      return {
        ...prevData,
        itemList: [
          {
            itemId: nanoid(),
            itemName: "",
            quantity: "",
            price: "",
            totalItemPrice: 0,
          },
        ],
      };
    });
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
          totalItemPrice: 0,
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
