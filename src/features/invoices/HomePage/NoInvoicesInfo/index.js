import { useDispatch } from "react-redux";
import { fetchExampleInvoices } from "../../invoicesSlice";
import {
  StyledNoInvoicesInfo,
  StyledIcon,
  Title,
  HowToCreate,
  NewInvoiceSpan,
  DownloadExample,
} from "./styled";

const NoInvoicesInfo = () => {
  const dispatch = useDispatch();

  const onDownloadnExampleClick = () => {
    dispatch(fetchExampleInvoices());
  };

  return (
    <StyledNoInvoicesInfo>
      <StyledIcon></StyledIcon>
      <Title>There is nothing here</Title>
      <HowToCreate>
        Create an invoice by clicking the{" "}
        <NewInvoiceSpan>New Invoice</NewInvoiceSpan> button or{" "}
        <DownloadExample onClick={onDownloadnExampleClick}>
          download example invoices
        </DownloadExample>
      </HowToCreate>
    </StyledNoInvoicesInfo>
  );
};

export default NoInvoicesInfo;
