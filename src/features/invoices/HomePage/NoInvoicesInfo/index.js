import {
  StyledNoInvoicesInfo,
  StyledIcon,
  Title,
  HowToCreate,
  NewInvoiceSpan,
} from "./styled";

const NoInvoicesInfo = () => {
  return (
    <StyledNoInvoicesInfo>
      <StyledIcon></StyledIcon>
      <Title>There is nothing here</Title>
      <HowToCreate>
        Create an invoice by clicking the{" "}
        <NewInvoiceSpan>New Invoice</NewInvoiceSpan> button and get started
      </HowToCreate>
    </StyledNoInvoicesInfo>
  );
};

export default NoInvoicesInfo;
