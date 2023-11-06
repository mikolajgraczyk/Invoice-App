export const getExampleInvoices = async () => {
  const response = await fetch("/invoice-app/exampleInvoices.json");

  if (!response.ok) {
    new Error(response.statusText);
    return;
  }

  return await response.json();
};
