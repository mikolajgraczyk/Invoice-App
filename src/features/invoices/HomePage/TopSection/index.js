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
import {
  selectInvoicesTotalNumber,
  selectfilterStatus,
  triggerNewInvoice,
} from "../../invoicesSlice"
import StatusTab from "./FilterStatusTab";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as NewInvoiceIcon } from "./NewInvoiceIcon.svg";

const TopSection = () => {
  const [isStatusTabOpen, setIsStatusTabOpen] = useState(false);

  const dispatch = useDispatch();

  const invoicesTotalNumber = useSelector(selectInvoicesTotalNumber);
  const filter = useSelector(selectfilterStatus);

  const newInvoiceButtonHandler = () => {
    dispatch(triggerNewInvoice())
    window.scrollTo({top: 0, behavior: "smooth"});
  };

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
        <NewInvoiceButton onClick={newInvoiceButtonHandler}>
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
