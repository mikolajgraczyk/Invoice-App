export const formValidation = (formData) => {
  const formFields = Object.values(formData)
    .flatMap((field) => {
      return typeof field === "object" ? Object.values(field) : field;
    })
    .flatMap((field) => {
      return typeof field === "object" ? Object.values(field) : field;
    });

  return formFields.every((field) => field !== "" && field !== null);
};
