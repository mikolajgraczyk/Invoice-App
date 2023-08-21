import { generate } from "randomstring";

export const generateId = () => {
  const randomChars = generate({
    length: 2,
    charset: "alphabetic",
  });
  const randomDigits = generate({
    length: 4,
    charset: "numeric",
  });
  const newId = (randomChars + randomDigits).toLocaleUpperCase();

  return newId;
};
