import {
  StyledTopSection,
  TitleSection,
  Title,
  FullSubtitle,
  MobileSubtitle,
  ButtonsSection,
  NewInvoiceButton,
  ButtonInvoiceWord,
} from "./styled";
import {
  selectInvoicesTotalNumber,
  selectfilterStatus,
} from "../../invoicesSlice";
import { triggerNewInvoice } from "../../controlsSlice";
import FilterButton from "./FilterButton";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as NewInvoiceIcon } from "./NewInvoiceIcon.svg";

const TopSection = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectfilterStatus);
  const invoicesTotalNumber = useSelector(selectInvoicesTotalNumber);

  const newInvoiceButtonHandler = () => {
    dispatch(triggerNewInvoice());
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <FilterButton />
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
