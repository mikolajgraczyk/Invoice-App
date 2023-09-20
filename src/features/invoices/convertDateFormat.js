import { parse, format } from "date-fns";

export const convertDateFormat = (inputDate) => {
    const parsedDate = parse(inputDate, "yyyy-dd-MM", new Date());
    const formattedDate = format(parsedDate, "dd MMM yyyy");

    return formattedDate
};