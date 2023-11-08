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
    <StyledDummyTile
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.4, 0.6, 0.4] }}
      transition={{ repeat: Infinity, duration: 0.8 }}
    >
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
