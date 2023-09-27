import Items from "./Items";
import { StyledItemsDetails, SectionFooter, Price } from "./styled";

const ItemsDetails = ({ itemList, totalPrice }) => {
  return (
    <StyledItemsDetails>
      <Items itemList={itemList}/>
      <SectionFooter>
        <span>Amount Due</span>
        <Price>£ {totalPrice}</Price>
      </SectionFooter>
    </StyledItemsDetails>
  );
};

export default ItemsDetails;
