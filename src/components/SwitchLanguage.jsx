"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function SwitchLanguage() {
  const { language, switchLanguage } = useContext(LanguageContext);
  return (
    <div>
      <h3>Current Language: {language === "en" ? "English" : "Spanish"}</h3>
      <button onClick={() => switchLanguage("en")}>English</button>
      <button onClick={() => switchLanguage("es")}>Español</button>
    </div>
  );
}
