import { useSelector } from "react-redux";
import {
  selectInvoicesTotalNumber,
  selectIsExampleLoading,
} from "../invoicesSlice";
import InvoicesList from "./InvoicesList";
import TopSection from "./TopSection";
import NoInvoicesInfo from "./NoInvoicesInfo";
import Loading from "./Loading";
import { StyledHomePage } from "./styled";

const HomePage = () => {
  const invoicesTotalNumber = useSelector(selectInvoicesTotalNumber);
  const isLoading = useSelector(selectIsExampleLoading);

  const setHomePageContent = () => {
    switch (true) {
      case invoicesTotalNumber > 0:
        return <InvoicesList />;
      case isLoading:
        return <Loading />;
      default:
        return <NoInvoicesInfo />;
    }
  };

  const homePageContent = setHomePageContent();

  return (
    <StyledHomePage>
      <TopSection />
      {homePageContent}
    </StyledHomePage>
  );
};

export default HomePage;
