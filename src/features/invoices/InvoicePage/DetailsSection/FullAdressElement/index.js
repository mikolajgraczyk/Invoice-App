import { StyledFullAdressElement } from "./styled";

const FullAdressElement = ({ clientInfo }) => {
  return (
    <StyledFullAdressElement>
      <span>{clientInfo.streetAdress}</span>
      <span>{clientInfo.city}</span>
      <span>{clientInfo.postalCode}</span>
      <span>{clientInfo.country}</span>
    </StyledFullAdressElement>
  );
};

export default FullAdressElement;
