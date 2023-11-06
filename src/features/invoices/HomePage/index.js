import { useSelector } from "react-redux";
import { selectInvoicesTotalNumber } from "../invoicesSlice";
import InvoicesList from "./InvoicesList";
import TopSection from "./TopSection";
import NoInvoicesInfo from "./NoInvoicesInfo";
import { StyledHomePage } from "./styled";

const HomePage = () => {
  const invoicesTotalNumber = useSelector(selectInvoicesTotalNumber);

  return (
    <StyledHomePage>
      <TopSection invoicesTotalNumber={invoicesTotalNumber} />
      {invoicesTotalNumber > 0 ? <InvoicesList /> : <NoInvoicesInfo />}
    </StyledHomePage>
  );
};

export default HomePage;
