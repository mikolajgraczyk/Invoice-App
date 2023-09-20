import { parseISO, format, addBusinessDays } from "date-fns";

export const calculateTermDate = (formData) => {
  const startDate = parseISO(formData.date);
  const paymentTermDate = addBusinessDays(startDate, formData.paymentTerms);
  return format(paymentTermDate, "yyyy-MM-dd");
};
