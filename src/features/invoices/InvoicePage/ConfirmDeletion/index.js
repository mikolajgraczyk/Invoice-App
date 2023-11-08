import { useDispatch } from "react-redux";
import { Backdrop } from "../../../../common/Backdrop";
import {
  StyledConfirmDeletion,
  TextSection,
  ButtonsSection,
  Title,
  Description,
  DeleteButton,
  CancelButton,
} from "./styled";
import { toggleDeleteConfirmation } from "../../controlsSlice";
import { useInvoiceActions } from "../../../../common/ControlButtons/useInvoiceActions";

const ConfirmDeletion = ({ id }) => {
  const { confirmDeletion } = useInvoiceActions(id);

  const dispatch = useDispatch();

  return (
    <>
      <StyledConfirmDeletion initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <TextSection>
          <Title>Confirm Deletion</Title>
          <Description>
            Are you sure you want to delete invoice #{id}? This action cannot be
            undone.
          </Description>
        </TextSection>
        <ButtonsSection>
          <CancelButton onClick={() => dispatch(toggleDeleteConfirmation())}>
            Cancel
          </CancelButton>
          <DeleteButton onClick={() => confirmDeletion()}>Delete</DeleteButton>
        </ButtonsSection>
      </StyledConfirmDeletion>
      <Backdrop
        location="deletion"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4984 }}
      />
    </>
  );
};

export default ConfirmDeletion;
