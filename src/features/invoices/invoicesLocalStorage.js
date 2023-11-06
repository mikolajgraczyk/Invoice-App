export const saveInvoicesInLocalStorage = (invoices) =>
  localStorage.setItem("invoices", JSON.stringify(invoices));

export const getInvoicesFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("invoices")) || [];
