import { parse, format } from "date-fns";
import { ReactComponent as StatusCircle } from "./StatusCircle.svg";
import {
  StyledTile,
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
  const parsedDate = parse(termDate, "yyyy-dd-MM", new Date());
  const formattedDate = format(parsedDate, "dd MMM yyyy");

  return (
    <StyledTile>
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
    </StyledTile>
  );
};

export default Tile;
