import { ProviderWrapper } from "../../contexts/ChoiceContext";
import App from "./App";

const AppLoader= () => {
  return (
    <ProviderWrapper >
        <App />
 
      </ProviderWrapper >
  )
}

export default AppLoader;