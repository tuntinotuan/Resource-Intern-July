import React, { Fragment } from "react";
import { RouterPrompt } from "../components/RouterPrompt";
import { useLocationContext } from "../components/location-context";

const BlockingFormPage = () => {
  // let [isBlocking, setIsBlocking] = useState(false);
  const { when, setWhen } = useLocationContext();
  // Stuck is here.
  // unstable_usePrompt(
  //   "Hello from usePrompt -- Are you sure you want to leave?",
  //   isBlocking
  // );
  return (
    <Fragment>
      <RouterPrompt title="Form is not submitting"></RouterPrompt>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          event.target.reset();
          setWhen(false);
        }}
      >
        <p>
          Blocking? {when ? "Yes, click a link or the back button" : "Nope"}
        </p>

        <p>
          <input
            size="50"
            placeholder="type something to block transitions"
            onChange={(event) => {
              setWhen(event.target.value.length > 0);
            }}
          />
        </p>

        <p>
          <button>Submit to stop blocking</button>
        </p>
      </form>
    </Fragment>
  );
};

export default BlockingFormPage;
