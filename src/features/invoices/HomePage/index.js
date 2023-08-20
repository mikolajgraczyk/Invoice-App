import InvoicesList from "./InvoicesList";
import TopSection from "./TopSection";
import { StyledHomePage } from "./styled";

const HomePage = () => {
    return(
        <StyledHomePage>
            <TopSection />
            <InvoicesList />
        </StyledHomePage>
    );
};

export default HomePage;