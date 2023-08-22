import { useState, useEffect } from "react";
import { StyledFieldset, Label, LongLabel, Input } from "../fieldsets/index";
import { Calendar, PaymentTermsButton, TermSelector } from "./styled";
import Option from "./TermSelectorOption";
import { calculateTermDate } from "./calculateTermDate";
import { generateId } from "./generateId";
import { ReactComponent as ArrowDown } from "./ArrowDown.svg";
import { ReactComponent as ArrowUp } from "./ArrowUp.svg";

const DetailsFieldset = ({ formData, setFormData, formPanelStatus }) => {
  const [isPaymentTermVisible, setIsPaymentTermVisible] = useState(false);
  const paymentTerm = formData.paymentTerms;

  const PaymentTermsButtonHandler = (event) => {
    event.preventDefault();
    setIsPaymentTermVisible((prevState) => (prevState = !prevState));
  };

  useEffect(() => {
    if (formPanelStatus === "create") {
      setFormData((prevState) => ({
        ...prevState,
        id: generateId(),
        to: {
          ...prevState.to,
          paymentTermsDate: calculateTermDate(formData),
        },
      }));
    } else {
      console.log("edycja");
    }
  }, [paymentTerm]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prevData) => ({
      ...prevData,
      to: {
        ...prevData.to,
        [name]: value,
      },
    }));
  };

  return (
    <StyledFieldset location="details">
      <Label>
        Invoice Date
        <Calendar
          type="date"
          name="date"
          value={formData.date}
          onChange={onInputChange}
        />
      </Label>
      <Label>
        Payment Terms
        <PaymentTermsButton onClick={PaymentTermsButtonHandler}>
          {`Net ${paymentTerm} ${paymentTerm > 1 ? "Days" : "Day"}`}
          {isPaymentTermVisible ? <ArrowUp /> : <ArrowDown />}
        </PaymentTermsButton>
        <TermSelector isPaymentTermVisible={isPaymentTermVisible}>
          <Option
            setFormData={setFormData}
            setIsPaymentTermVisible={setIsPaymentTermVisible}
            daysAmount={1}
          />
          <Option
            setFormData={setFormData}
            setIsPaymentTermVisible={setIsPaymentTermVisible}
            daysAmount={7}
          />
          <Option
            setFormData={setFormData}
            setIsPaymentTermVisible={setIsPaymentTermVisible}
            daysAmount={14}
          />
          <Option
            setFormData={setFormData}
            setIsPaymentTermVisible={setIsPaymentTermVisible}
            daysAmount={30}
          />
        </TermSelector>
      </Label>
      <LongLabel location="details">
        Project Description
        <Input
          name="projectDescription"
          value={formData.projectDescription}
          onChange={onInputChange}
        />
      </LongLabel>
    </StyledFieldset>
  );
};

export default DetailsFieldset;
