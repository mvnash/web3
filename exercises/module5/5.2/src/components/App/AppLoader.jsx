import { ProviderWrapper } from "../../contexts/OpinionContext";
import App from "./App";

const AppLoader= () => {
  return (
    <ProviderWrapper >
        <App />
 
      </ProviderWrapper >
  )
}

export default AppLoader;