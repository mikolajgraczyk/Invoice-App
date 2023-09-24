import { format } from "date-fns";

const todaysDate = new Date();
const formattedTodaysDate = format(todaysDate, "yyyy-MM-dd");

export const initialFormState = {
  status: "pending",
  from: {
    streetAdress: "Toruńska 47",
    city: "Gniewkowo",
    postalCode: "88-140",
    country: "Poland",
  },
  to: {
    clientName: "",
    clientEmail: "mikolajgraczyk123@gmail.com",
    streetAdress: "Sobieskiego 18",
    city: "Gniekwowo",
    postalCode: "88-140",
    country: "Poland",
    date: formattedTodaysDate,
    paymentTerms: 30,
    paymentTermsDate: "",
    projectDescription: "lala",
  },
  itemList: [
    {
      itemId: "43",
      itemName: "Web Development",
      quantity: 1,
      price: 1800.9,
      totalItemPrice: 1800.9,
    },
    {
      itemId: "32",
      itemName: "Chlebek",
      quantity: 3,
      price: 4.5,
      totalItemPrice: 13.5,
    },
    {
      itemId: "b8c8",
      itemName: "Banner Design",
      quantity: 1,
      price: 156,
      totalItemPrice: 156,
    },
    {
      itemId: "b9c9",
      itemName: "Email Design",
      quantity: 2,
      price: 100,
      totalItemPrice: 200,
    },
  ],
  totalPrice: 1813.95,
};
