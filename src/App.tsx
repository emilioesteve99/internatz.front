import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import Menu from './components/Menu';
import TranslationsTable from "./components/TranslationsTable";
import { projects } from "./fakeData/Projects";
import Home from "./pages/Home";

export default function App () {

    return (
      <Home/>
    );
}
                 