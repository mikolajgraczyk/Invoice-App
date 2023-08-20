import {StyledInvoicesList} from "./styled";
import { useSelector } from "react-redux";
import { selectInvoices } from "../../invoicesSlice"
import Tile from "./Tile";

const InvoicesList = () => {
  const invoices = useSelector(selectInvoices);

  return (
    <StyledInvoicesList>
      {invoices.map((invoice) => (
        <Tile
          key={invoice.id}
          id={invoice.id}
          term={invoice.to.paymentTerms}
          clientName={invoice.to.clientName}
          totalPrice={invoice.totalPrice}
          paymentStatus={invoice.status}
        />
      ))}
    </StyledInvoicesList>
  );
};

export default InvoicesList;
