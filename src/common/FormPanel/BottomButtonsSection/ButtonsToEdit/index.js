import { useFormActions } from "../useFormActions";
import { DiscardButton, SaveButton } from "../styled";

const ButtonsToEdit = () => {
  const { submit, discard } = useFormActions();

  return (
    <>
      <DiscardButton onClick={(event) => discard(event)}>Cancel</DiscardButton>
      <SaveButton onClick={(event) => submit(event)}>Save Changes</SaveButton>
    </>
  );
};

export default ButtonsToEdit;
