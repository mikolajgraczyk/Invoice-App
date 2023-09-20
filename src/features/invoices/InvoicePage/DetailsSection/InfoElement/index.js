import { StyledInfoElement, Title, Info, Hash } from "./styled";

const InfoElement = ({ title, info, containsId }) => {
  return (
    <StyledInfoElement containsId={containsId}>
      <Title>{title}</Title>
      <div>
        {containsId && <Hash>#</Hash>}
        <Info>{info}</Info>
      </div>
    </StyledInfoElement>
  );
};

export default InfoElement;
