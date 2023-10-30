import { StyledInvoicesList } from "./styled";
import { useSelector } from "react-redux";
import { selectInvoices } from "../../invoicesSlice";
import Tile from "./Tile";

const InvoicesList = () => {
  const invoices = useSelector(selectInvoices);

  const sortedInvoices = [...invoices].sort((a, b) => {
    const dateA = new Date(a.to.paymentTermsDate);
    const dateB = new Date(b.to.paymentTermsDate);

    return dateA - dateB;
  });

  return (
    <StyledInvoicesList>
      {sortedInvoices.map((invoice) => (
        <Tile
          key={invoice.id}
          id={invoice.id}
          termDate={invoice.to.paymentTermsDate}
          clientName={invoice.to.clientName}
          totalPrice={invoice.totalPrice}
          paymentStatus={invoice.status}
        />
      ))}
    </StyledInvoicesList>
  );
};

export default InvoicesList;
