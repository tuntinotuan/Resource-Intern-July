import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LocationContext = createContext();

function LocationProvider(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [when, setWhen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const [nextPath, setNextPath] = useState("");
  console.log("when, currentPath||", when, currentPath, nextPath);
  useEffect(() => {
    if (when && currentPath !== "/blocking-form") {
      setNextPath(currentPath);
      handleShowModal();
    }
    setCurrentPath(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  function handleShowModal() {
    setShowPrompt(true);
  }
  function onCancel() {
    setShowPrompt(false);
    setWhen(false);
  }
  function handleConfirm() {
    setWhen(false);
    setShowPrompt(false);
    navigate(nextPath);
  }
  const values = {
    showPrompt,
    nextPath,
    currentPath,
    setCurrentPath,
    when,
    setWhen,
    onCancel,
    handleConfirm,
    handleShowModal,
  };
  console.log("LocalPath", currentPath);
  return (
    <LocationContext.Provider value={values}>
      {props.children}
    </LocationContext.Provider>
  );
}

function useLocationContext() {
  const context = useContext(LocationContext);
  if (typeof context === "undefined")
    throw new Error("useLocationContext must be used within LocationProvider");
  return context;
}

export { useLocationContext, LocationProvider };
