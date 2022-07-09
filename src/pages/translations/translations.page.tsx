import { useEffect, useState } from "react";
import { AuthService } from "../../services/auth/auth.service";
import { useNavigate } from "react-router-dom";
import { TranslationService } from "../../services/translations/translation.service";

export default function TranslationsPage() {
  const navigate = useNavigate();
  const [translations, setTranslations] = useState([]);
  const [translationsToBulk, setTranslationsToBulk] = useState([]);

  useEffect(() => {
    if (!AuthService.userJustLogged()) {
      navigate("/");
      return;
    }
    TranslationService.getTranslations().then((fetchedTranslations) => {
      if (!fetchedTranslations) {
        AuthService.removeTokenFromStorage();
        navigate("/");
        return;
      }
      setTranslations(fetchedTranslations);
    });
  }, []);

  return <h1>hola</h1>;
}
