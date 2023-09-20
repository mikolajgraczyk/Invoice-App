import { ReactComponent as StatusCircle } from "./StatusCircle.svg";

import {convertDateFormat} from "../../../convertDateFormat";
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
  Status,
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
          <Status status={paymentStatus}>
            <StatusCircle />
            <span>{paymentStatus}</span>
          </Status>
          <StyledTileArrow />
        </RightTileSection>
      </StyledTileLink>
    </li>
  );
};

export default Tile;
