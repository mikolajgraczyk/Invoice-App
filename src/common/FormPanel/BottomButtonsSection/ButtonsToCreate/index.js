import { useFormActions } from "../useFormActions";
import { DiscardButton, DraftButton, SaveButton } from "../styled";

const ButtonsToCreate = () => {
  const { saveAsDraft, submit, discard } = useFormActions();

  return (
    <>
      <DiscardButton onClick={(event) => discard(event)}>Discard</DiscardButton>
      <DraftButton onClick={(event) => saveAsDraft(event)}>
        Save as Draft
      </DraftButton>
      <SaveButton onClick={(event) => submit(event)}>Save & Send</SaveButton>
    </>
  );
};

export default ButtonsToCreate;
