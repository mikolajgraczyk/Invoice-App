import PaymentStatus from "../../../../../common/PaymentStatus";
import {
  StyledDummyTile,
  LeftTileSection,
  IdDummy,
  PaymentTermDummy,
  ClientNameDummy,
  RightTileSection,
  TotalPriceDummy,
  PaymentStatusDummy,
  ArrowDummy,
} from "./styled";

const DummyTile = () => {
  return (
    <StyledDummyTile>
      <LeftTileSection>
        <IdDummy />
        <PaymentTermDummy />
        <ClientNameDummy />
      </LeftTileSection>
      <RightTileSection>
        <TotalPriceDummy />
        <PaymentStatusDummy />
        <ArrowDummy />
      </RightTileSection>
    </StyledDummyTile>
  );
};

export default DummyTile;
