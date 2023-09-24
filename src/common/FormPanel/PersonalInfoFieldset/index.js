import { useContext } from "react";
import { formContext } from "../index";
import { StyledFieldset, LongLabel, Label, Input } from "../fieldsets/index";
import { FieldsetLegend } from "./styled";

const PersonalInfoFieldset = ({ legend }) => {
  const { formData, setFormData, isFormValid } =
    useContext(formContext);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prevData) => ({
      ...prevData,
      [legend === "Bill To" ? "to" : "from"]: {
        ...prevData[legend === "Bill To" ? "to" : "from"],
        [name]: value,
      },
    }));
  };

  if (legend === "Bill To") {
    return (
      <StyledFieldset>
        <FieldsetLegend>{legend}</FieldsetLegend>
        <LongLabel>
          Client’s Name
          <Input
            required={!isFormValid}
            pattern="[a-zA-Z0-9]+.*"
            type="text"
            name="clientName"
            value={formData.to.clientName}
            onChange={onInputChange}
          />
        </LongLabel>
        <LongLabel>
          Client’s Email
          <Input
            required={!isFormValid}
            type="email"
            name="clientEmail"
            value={formData.to.clientEmail}
            onChange={onInputChange}
          />
        </LongLabel>
        <LongLabel>
          Street Address
          <Input
            required={!isFormValid}
            pattern="[a-zA-Z0-9]+.*"
            type="text"
            name="streetAdress"
            value={formData.to.streetAdress}
            onChange={onInputChange}
          />
        </LongLabel>
        <Label>
          City
          <Input
            required={!isFormValid}
            pattern="[a-zA-Z]+.*"
            type="text"
            name="city"
            value={formData.to.city}
            onChange={onInputChange}
          />
        </Label>
        <Label>
          Post Code
          <Input
            required={!isFormValid}
            type="text"
            name="postalCode"
            value={formData.to.postalCode}
            onChange={onInputChange}
          />
        </Label>
        <Label countryLabel>
          Country
          <Input
            required={!isFormValid}
            pattern="[a-zA-Z]+.*"
            type="text"
            name="country"
            value={formData.to.country}
            onChange={onInputChange}
          />
        </Label>
      </StyledFieldset>
    );
  }
  if (legend === "Bill From") {
    return (
      <StyledFieldset>
        <FieldsetLegend>{legend}</FieldsetLegend>
        <LongLabel>
          Street Address
          <Input
            required={!isFormValid}
            pattern="[a-zA-Z0-9]+.*"
            type="text"
            name="streetAdress"
            value={formData.from.streetAdress}
            onChange={onInputChange}
          />
        </LongLabel>
        <Label>
          City
          <Input
            required={!isFormValid}
            pattern="[a-zA-Z]+.*"
            type="text"
            name="city"
            value={formData.from.city}
            onChange={onInputChange}
          />
        </Label>
        <Label>
          Post Code
          <Input
            required={!isFormValid}
            type="text"
            name="postalCode"
            value={formData.from.postalCode}
            onChange={onInputChange}
          />
        </Label>
        <Label countryLabel>
          Country
          <Input
            required={!isFormValid}
            pattern="[a-zA-Z]+.*"
            type="text"
            name="country"
            value={formData.from.country}
            onChange={onInputChange}
          />
        </Label>
      </StyledFieldset>
    );
  }
};

export default PersonalInfoFieldset;
