import { format } from "date-fns";

const todaysDate = new Date();
const formattedTodaysDate = format(todaysDate, "yyyy-MM-dd");

export const initialFormState = {
  status: "pending",
  from: {
    streetAdress: "",
    city: "",
    postalCode: "",
    country: "",
  },
  to: {
    clientName: "",
    clientEmail: "",
    streetAdress: "",
    city: "",
    postalCode: "",
    country: "",
    date: formattedTodaysDate,
    paymentTerms: 30,
    paymentTermsDate: "",
    projectDescription: "",
  },
  itemList: [
    {
      itemId: "43",
      itemName: "",
      quantity: "",
      price: "",
      totalItemPrice: 0,
    },
  ],
  totalPrice: 1813.95,
};
