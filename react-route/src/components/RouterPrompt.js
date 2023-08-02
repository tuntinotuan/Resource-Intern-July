import { Fragment } from "react";
import { useLocationContext } from "./location-context";

export function RouterPrompt({ when, title }) {
  const { onCancel, handleConfirm, showPrompt, nextPath } =
    useLocationContext();
  console.log("rerender");
  return (
    <Fragment>
      {showPrompt && (
        <div className="fixed top-[5%] right-1/3 flex flex-col items-center justify-center shadow-md rounded-md w-[500px] bg-white">
          <div className="w-full flex items-center justify-between border border-transparent border-b-gray-100 p-5">
            <h1>Do you want to leave the page?</h1>
            <span className="cursor-pointer" onClick={onCancel}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          <div className="w-full flex items-center justify-between border border-transparent border-b-gray-100 p-5">
            <span className="mb-5 flex items-center gap-2">
              Next location is <p className="font-bold">{nextPath}</p>
            </span>
          </div>
          <div className="ml-auto flex gap-2 px-5 py-2">
            <button
              onClick={handleConfirm}
              autoFocus
              className="border border-gray-200 rounded px-4 py-1"
            >
              OK
            </button>
            <button
              onClick={onCancel}
              className="bg-blue-400 text-white rounded px-4 py-1"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}
