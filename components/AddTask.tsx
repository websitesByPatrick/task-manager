"use client";
import Form from "next/form";

import createRec from "@/server-actions/createRecord";
import SaveTaskButton from "./buttons/SaveButton";
import CancelButton from "./buttons/CancelButton";

const AddTask = () => {
  return (
    <div className="flex mt-20 items-start justify-center min-h-screen">
      <div className="flex flex-col gap-4 border p-6 rounded shadow-lg bg-slate-600">
        <h2 className="text-5xl text-center">Add Task</h2>
        <Form action={createRec}>
          <div className="flex flex-col gap-4">
            <div className="flex justify-end items-center">
              <label className="text-2xl" htmlFor="title">
                Task Title:
              </label>
              <input
                className="border border-gray-300 bg-slate-700 rounded p-2 ml-2 text-2xl"
                type="text"
                id="title"
                name="title"
                required
              />
            </div>
            <div className="flex justify-end items-center">
              <label className="text-2xl" htmlFor="content">
                Task Content:
              </label>
              <input
                className="border border-gray-300 bg-slate-700 rounded p-2 ml-2 text-2xl"
                type="text"
                id="content"
                name="content"
                required
              />
            </div>

            <div className="flex gap-4 mt-5 items-center justify-center">
              <SaveTaskButton />
              <CancelButton />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddTask;
