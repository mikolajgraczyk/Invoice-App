import { useState } from "react";
import {
  StyledTopSection,
  TitleSection,
  Title,
  FullSubtitle,
  MobileSubtitle,
  ButtonsSection,
  FilterButton,
  ByStatus,
  StyledFilterButtonArrow,
  NewInvoiceButton,
  ButtonInvoiceWord,
} from "./styled";
import StatusTab from "./StatusTab";
import { useSelector } from "react-redux";
import { ReactComponent as NewInvoiceIcon } from "./NewInvoiceIcon.svg";
import {
  selectInvoicesTotalNumber,
  selectStatusFilter,
} from "../../invoices/invoicesSlice";

const TopSection = () => {
  const [isStatusTabOpen, setIsStatusTabOpen] = useState(false);

  const invoicesTotalNumber = useSelector(selectInvoicesTotalNumber);
  const filter = useSelector(selectStatusFilter);

  return (
    <StyledTopSection>
      <TitleSection>
        <Title>Invoices</Title>
        <FullSubtitle>
          {invoicesTotalNumber
            ? `There are ${invoicesTotalNumber} ${
                filter ? filter : "total"
              } invoices`
            : "No invoices"}
        </FullSubtitle>
        <MobileSubtitle>{invoicesTotalNumber} invoices</MobileSubtitle>
      </TitleSection>
      <ButtonsSection>
        <FilterButton
          onClick={() => setIsStatusTabOpen((prevState) => !prevState)}
        >
          <span>
            Filter <ByStatus>by status</ByStatus>
          </span>
          <StyledFilterButtonArrow
            statustab={isStatusTabOpen ? "open" : "closed"}
          />
        </FilterButton>
        <StatusTab isStatusTabOpen={isStatusTabOpen} />
        <NewInvoiceButton>
          <NewInvoiceIcon />
          <span>
            New <ButtonInvoiceWord>Invoice</ButtonInvoiceWord>
          </span>
        </NewInvoiceButton>
      </ButtonsSection>
    </StyledTopSection>
  );
};

export default TopSection;
