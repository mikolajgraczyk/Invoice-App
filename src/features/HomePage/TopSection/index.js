import {
  StyledTopSection,
  TitleSection,
  Title,
  Subtitle,
  ButtonsSection,
} from "./styled";
import { useSelector } from "react-redux";
import { selectInvoicesTotalNumber } from "../../invoices/invoicesSlice";

const TopSection = () => {
  const invoicesTotalNumber = useSelector(selectInvoicesTotalNumber);

  return (
    <StyledTopSection>
      <TitleSection>
        <Title>Invoices</Title>
        <Subtitle>
          There are{" "}
          {invoicesTotalNumber
            ? `${invoicesTotalNumber} total invoices`
            : "no invoices"}
        </Subtitle>
      </TitleSection>
      <ButtonsSection></ButtonsSection>
    </StyledTopSection>
  );
};

export default TopSection;
