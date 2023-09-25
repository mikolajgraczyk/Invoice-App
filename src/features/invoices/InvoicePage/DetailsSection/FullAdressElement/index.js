import { StyledFullAdressElement } from "./styled";

const FullAdressElement = ({ adressInfo }) => {
  const isEmptyString = (string) => {
    if (string === "") {
      return "DRAFT";
    }
    return string;
  };

  return (
    <StyledFullAdressElement>
      <span>{isEmptyString(adressInfo.streetAdress)}</span>
      <span>{isEmptyString(adressInfo.city)}</span>
      <span>{isEmptyString(adressInfo.postalCode)}</span>
      <span>{isEmptyString(adressInfo.country)}</span>
    </StyledFullAdressElement>
  );
};

export default FullAdressElement;
