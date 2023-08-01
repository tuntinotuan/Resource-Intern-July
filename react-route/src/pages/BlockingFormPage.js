import React, { useState } from "react";
import { usePrompt, unstable_usePrompt } from "react-router-dom";

const BlockingFormPage = () => {
  let [isBlocking, setIsBlocking] = useState(false);
  // Stuck is here.
  // unstable_usePrompt(
  //   "Hello from usePrompt -- Are you sure you want to leave?",
  //   isBlocking
  // );
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.target.reset();
        setIsBlocking(false);
      }}
    >
      <p>
        Blocking? {isBlocking ? "Yes, click a link or the back button" : "Nope"}
      </p>

      <p>
        <input
          size="50"
          placeholder="type something to block transitions"
          onChange={(event) => {
            setIsBlocking(event.target.value.length > 0);
          }}
        />
      </p>

      <p>
        <button>Submit to stop blocking</button>
      </p>
    </form>
  );
};

export default BlockingFormPage;
