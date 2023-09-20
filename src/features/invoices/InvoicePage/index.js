import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { selectInvoices } from "../invoicesSlice";
import { ReactComponent as BackButtonArrow } from "./BackButtonArrow.svg";
import { StyledInvoicePage, GoBackButton } from "./styled";
import DetailsSection from "./DetailsSection";

const InvoicePage = () => {
  const { id } = useParams();

  const invoicesState = useSelector(selectInvoices);
  const selectedInvoice = invoicesState.find((invoice) => invoice.id === id);

  const navigate = useNavigate();

  return (
    <StyledInvoicePage>
      <GoBackButton onClick={() => navigate(-1)}>
        <BackButtonArrow />
        <span>Go back</span>
      </GoBackButton>
      <DetailsSection selectedInvoice={selectedInvoice}/>
    </StyledInvoicePage>
  );
};

export default InvoicePage;
