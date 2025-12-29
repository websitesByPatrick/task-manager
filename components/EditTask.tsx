
import CancelButton from './buttons/CancelButton'
import Form from "next/form";
import editRec from "@/server-actions/createRecord";
import SaveTaskButton from "./buttons/SaveButton";

const EditTask = () => {
  return (
    <div>
      <div>Edit Task</div>
      <Form action={editRec}>
        <label htmlFor="title">Task Title:</label>
        <input type="text" id="title" name="title" required />
        <br />
        <label htmlFor="content">Task Content:</label>
        <input type="text" id="content" name="content" required />
        <br />

        <SaveTaskButton />
        <CancelButton />
      </Form>
    </div>
  );
}

export default EditTask