import { convertDateFormat } from "../../convertDateFormat";
import InfoElement from "./InfoElement";
import FullAdressElement from "./FullAdressElement";
import ItemsDetails from "./ItemsDetails";
import { StyledDetailsSection, TopDetails, BottomDetails } from "./styled";

const DetailsSection = ({ selectedInvoice }) => {
  return (
    <StyledDetailsSection>
      <TopDetails>
        <InfoElement
          title={selectedInvoice.to.projectDescription}
          info={selectedInvoice.id}
          containsId={true}
        />
        <FullAdressElement adressInfo={selectedInvoice.from} />
      </TopDetails>
      <BottomDetails>
        <InfoElement
          title={"Invoice Date"}
          info={convertDateFormat(selectedInvoice.to.date)}
        />
        <InfoElement title={"Bill To"} info={selectedInvoice.to.clientName} />
        <InfoElement title={"Sent To"} info={selectedInvoice.to.clientEmail} />
        <InfoElement
          title={"Payment Due"}
          info={convertDateFormat(selectedInvoice.to.paymentTermsDate)}
        />
        <FullAdressElement adressInfo={selectedInvoice.to} />
      </BottomDetails>
      <ItemsDetails
        itemList={selectedInvoice.itemList}
        totalPrice={selectedInvoice.totalPrice}
      />
    </StyledDetailsSection>
  );
};

export default DetailsSection;
