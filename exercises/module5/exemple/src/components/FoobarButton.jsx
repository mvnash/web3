import { Context as LanguageContext } from "contexts/LanguageContext";
import { useContext } from "react";

const FoobarButton = () => {
   const { language, pickLanguage } = useContext(LanguageContext )
}

export default FoobarButton;
