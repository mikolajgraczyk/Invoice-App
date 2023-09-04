import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { selectInvoices } from "../invoicesSlice";
import { StyledInvoicePage } from "./styled";

const InvoicePage = () => {
    const { id } = useParams();
    
    const invoicesState = useSelector(selectInvoices);
    const selectedInvoice = invoicesState.find(invoice => invoice.id === id);

    return(
        <StyledInvoicePage>
            {selectedInvoice.id}
        </StyledInvoicePage>
    );
};

export default InvoicePage;