import { convertDateFormat } from "../../../convertDateFormat";
import PaymentStatus from "../../../../../common/PaymentStatus";
import {
  StyledTileLink,
  LeftTileSection,
  Hash,
  InvoiceId,
  PaymentTerm,
  Due,
  PaymentDate,
  ClientName,
  RightTileSection,
  TotalPrice,
  StyledTileArrow,
} from "./styled";

const Tile = ({ id, termDate, clientName, totalPrice, paymentStatus }) => {
  const formattedDate = convertDateFormat(termDate);

  return (
    <li>
      <StyledTileLink to={`/invoice/${id}`}>
        <LeftTileSection>
          <div>
            <Hash>#</Hash>
            <InvoiceId>{id}</InvoiceId>
          </div>
          <PaymentTerm>
            <Due>Due</Due> <PaymentDate>{formattedDate}</PaymentDate>
          </PaymentTerm>
          <ClientName>{clientName}</ClientName>
        </LeftTileSection>
        <RightTileSection>
          <TotalPrice>£ {totalPrice}</TotalPrice>
          <PaymentStatus status={paymentStatus} location={"homepageList"}/>
          <StyledTileArrow />
        </RightTileSection>
      </StyledTileLink>
    </li>
  );
};

export default Tile;
