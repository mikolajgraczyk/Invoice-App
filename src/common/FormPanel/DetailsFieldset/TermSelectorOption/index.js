import { StyledOption } from "./styled";

const Option = ({ setFormData, setIsPaymentTermVisible, daysAmount }) => {
  const TermOptionHandler = (event, daysAmount) => {
    event.preventDefault();

    setIsPaymentTermVisible(false);
    setFormData((prevData) => ({
      ...prevData,
      to: {
        ...prevData.to,
        paymentTerms: daysAmount,
      },
    }));
  };

  return (
    <StyledOption onClick={(event) => TermOptionHandler(event, daysAmount)}>
      {`Net ${daysAmount} ${daysAmount > 1 ? "Days" : "Day"}`}
    </StyledOption>
  );
};

export default Option;
