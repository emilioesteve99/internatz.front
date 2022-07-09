import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import LoginPage from "./pages/login/login.page";
import TranslationsPage from "./pages/translations/translations.page";
import { Route, Routes, useNavigate } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/translations" element={<TranslationsPage />} />
    </Routes>
  );
}
