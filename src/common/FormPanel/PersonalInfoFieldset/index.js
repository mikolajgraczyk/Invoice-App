import { StyledFieldset, LongLabel, Label, Input } from "../fieldsets/index";
import { FieldsetLegend } from "./styled";

const PersonalInfoFieldset = ({ legend, formData, setFormData }) => {
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

  return (
    <StyledFieldset>
      <FieldsetLegend>{legend}</FieldsetLegend>
      {legend === "Bill To" && (
        <>
          <LongLabel>
            Client’s Name
            <Input
              pattern="[a-zA-Z0-9]+.*"
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={onInputChange}
            />
          </LongLabel>
          <LongLabel>
            Client’s Email
            <Input
              type="email"
              name="clientEmail"
              value={formData.clientEmail}
              onChange={onInputChange}
            />
          </LongLabel>
        </>
      )}
      <LongLabel>
        Street Address
        <Input
          pattern="[a-zA-Z0-9]+.*"
          type="text"
          name="streetAdress"
          value={formData.streetAdress}
          onChange={onInputChange}
        />
      </LongLabel>
      <Label>
        City
        <Input
          pattern="[a-zA-Z]+.*"
          type="text"
          name="city"
          value={formData.city}
          onChange={onInputChange}
        />
      </Label>
      <Label>
        Post Code
        <Input
          type="number"
          name="postalCode"
          value={formData.postalCode}
          onChange={onInputChange}
        />
      </Label>
      <Label countryLabel>
        Country
        <Input
          pattern="[a-zA-Z]+.*"
          type="text"
          name="country"
          value={formData.country}
          onChange={onInputChange}
        />
      </Label>
    </StyledFieldset>
  );
};

export default PersonalInfoFieldset;
