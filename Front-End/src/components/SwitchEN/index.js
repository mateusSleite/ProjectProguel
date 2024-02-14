import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useState, useEffect } from "react";
import {i18n} from "../../translate/i18n";

export default function SwitchEN() {
  const storedLanguage = localStorage.getItem("i18nextLng");
  const initialLanguage = storedLanguage || "en-US";

  const [state, setState] = useState({
    checked: initialLanguage === "en-US", 
  });

  useEffect(() => {
    const languageValue = state.checked ? "en-US" : "pt-BR";
    i18n.changeLanguage(languageValue);
    localStorage.setItem("i18nextLng", languageValue);
  }, [state.checked]);

  const handleChange = () => {
    setState((state) => ({
      ...state,
      checked: !state.checked,
    }));


    const languageValue = !state.checked ? "en-US" : "pt-BR";
    localStorage.setItem("i18nextLng", languageValue);
    window.location.reload()
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={state.checked}
          onChange={handleChange}
          name="checked"
          style={{
            color: state.checked ? "#F0444A" : "#9e9e9e",
          }}
        />
      }
      label="EN"
      style={{
        color: "#F0444A",
      }}
    />
  );
}
