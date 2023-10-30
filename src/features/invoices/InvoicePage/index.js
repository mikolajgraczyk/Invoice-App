import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { selectInvoices } from "../invoicesSlice";
import { ReactComponent as BackButtonArrow } from "./BackButtonArrow.svg";
import {
  StyledInvoicePage,
  GoBackButton,
  MobileButtonsSection,
} from "./styled";
import ControlPanel from "./ControlPanel";
import DetailsSection from "./DetailsSection";
import ControlButtons from "../../../common/ControlButtons";

const InvoicePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const invoicesState = useSelector(selectInvoices);
  const selectedInvoice = invoicesState.find((invoice) => invoice.id === id);

  return (
    <StyledInvoicePage>
      <GoBackButton onClick={() => navigate(-1)}>
        <BackButtonArrow />
        <span>Go back</span>
      </GoBackButton>
      <ControlPanel selectedInvoice={selectedInvoice} />
      <DetailsSection selectedInvoice={selectedInvoice} />
      <MobileButtonsSection>
        <ControlButtons selectedInvoice={selectedInvoice} />
      </MobileButtonsSection>
    </StyledInvoicePage>
  );
};

export default InvoicePage;
