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
  selectFilteredInvoicesNumber,
  selectfilterStatus,
} from "../../invoicesSlice";
import { triggerNewInvoice } from "../../controlsSlice";
import FilterButton from "./FilterButton";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as NewInvoiceIcon } from "./NewInvoiceIcon.svg";

const TopSection = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectfilterStatus);
  const filteredInvoicesNumber = useSelector(selectFilteredInvoicesNumber);

  const newInvoiceButtonHandler = () => {
    dispatch(triggerNewInvoice());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledTopSection>
      <TitleSection>
        <Title>Invoices</Title>
        <FullSubtitle>
          {filteredInvoicesNumber
            ? `There are ${filteredInvoicesNumber} ${
                filter ? filter : "total"
              } invoices`
            : "No invoices"}
        </FullSubtitle>
        <MobileSubtitle>{filteredInvoicesNumber} invoices</MobileSubtitle>
      </TitleSection>
      <ButtonsSection>
        <FilterButton />
        <NewInvoiceButton
          onClick={newInvoiceButtonHandler}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
        >
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
