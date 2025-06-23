"use client";

import SwitchLanguage from "@/components/SwitchLanguage";
import { LanguageProvider, LanguageContext } from "./LanguageContext";

import { useContext } from "react";

function Content() {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      {language === "en" ? (
        <p>Hello! Welcome to the language switcher app.</p>
      ) : (
        <p>¡Hola! Bienvenido a la aplicación de cambio de idioma.</p>
      )}
    </div>
  );
}

export default function Question10Page() {
  return (
    <LanguageProvider>
      <h2>Assignment-2: Question-10</h2>
      <SwitchLanguage />
      <Content />
    </LanguageProvider>
  );
}
