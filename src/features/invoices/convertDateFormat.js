import { parse, format } from "date-fns";

export const convertDateFormat = (inputDate) => {
    const parsedDate = parse(inputDate, "yyyy-MM-dd", new Date());
    const formattedDate = format(parsedDate, "dd MMM yyyy");

    return formattedDate
};