/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import { formContext } from "..";
import { StyledFieldset, Label, LongLabel, Input } from "../fieldsets/index";
import { Calendar, PaymentTermsButton, TermSelector } from "./styled";
import Option from "./TermSelectorOption";
import { calculateTermDate } from "./calculateTermDate";
import { generateId } from "./generateId";
import { ReactComponent as ArrowDown } from "./ArrowDown.svg";
import { ReactComponent as ArrowUp } from "./ArrowUp.svg";

const DetailsFieldset = () => {
  const [isPaymentTermVisible, setIsPaymentTermVisible] = useState(false);

  const { formData, setFormData, formPanelStatus, isFormValid } =
    useContext(formContext);
  const paymentTerm = formData.to.paymentTerms;
  const invoiceDate = formData.to.date;

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
          paymentTermsDate: calculateTermDate(formData.to),
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        to: {
          ...prevState.to,
          paymentTermsDate: calculateTermDate(formData.to),
        },
      }));
      return;
    }
  }, [paymentTerm, invoiceDate]);

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
          value={formData.to.date}
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
          required={!isFormValid}
          pattern="[a-zA-Z]+.*"
          name="projectDescription"
          value={formData.to.projectDescription}
          onChange={onInputChange}
        />
      </LongLabel>
    </StyledFieldset>
  );
};

export default DetailsFieldset;
