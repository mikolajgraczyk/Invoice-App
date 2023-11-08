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
import { selectIsDeleteConfirmation } from "../controlsSlice";
import ControlPanel from "./ControlPanel";
import DetailsSection from "./DetailsSection";
import ControlButtons from "../../../common/ControlButtons";
import ConfirmDeletion from "./ConfirmDeletion";

const InvoicePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isDeleteConfirmation = useSelector(selectIsDeleteConfirmation);
  const invoicesState = useSelector(selectInvoices);

  const selectedInvoice = invoicesState.find((invoice) => invoice.id === id);

  return (
    <>
      <StyledInvoicePage>
        <GoBackButton
          onClick={() => navigate(-1)}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.01 }}
        >
          <BackButtonArrow />
          <span>Go back</span>
        </GoBackButton>
        <ControlPanel selectedInvoice={selectedInvoice} />
        <DetailsSection selectedInvoice={selectedInvoice} />
        <MobileButtonsSection>
          <ControlButtons id={selectedInvoice.id} />
        </MobileButtonsSection>
      </StyledInvoicePage>
      {isDeleteConfirmation && <ConfirmDeletion id={selectedInvoice.id} />}
    </>
  );
};

export default InvoicePage;
