import { StyledList } from "../styledList";
import { useSelector } from "react-redux";
import { selectFilteredInvoices } from "../../invoicesSlice";
import Tile from "./Tile";

const InvoicesList = () => {
  const invoices = useSelector(selectFilteredInvoices);

  const sortedInvoices = [...invoices].sort((a, b) => {
    const dateA = new Date(a.to.paymentTermsDate);
    const dateB = new Date(b.to.paymentTermsDate);

    return dateA - dateB;
  });

  return (
    <StyledList>
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
    </StyledList>
  );
};

export default InvoicesList;
