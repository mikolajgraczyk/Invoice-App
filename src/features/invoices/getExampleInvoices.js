export const getExampleInvoices = async () => {
  const response = await fetch("/Invoice-App/exampleInvoices.json");

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
