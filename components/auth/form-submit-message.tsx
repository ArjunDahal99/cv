import React from "react";

interface SubmissionMessageTypes {
  status: boolean;
  message: string;
}

const SubmissionMessage = ({ message, status }: SubmissionMessageTypes) => {
  return (
    <div
      className={` mt-4 w-full flex justify-center items-center p-2 rounded-md ${
        status ? "bg-emerald-300  text-emerald-600" : "bg-red-300 text-red-600"
      }`}
    >
      <h1>{message}</h1>
    </div>
  );
};

export default SubmissionMessage;
