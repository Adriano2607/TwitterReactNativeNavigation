
import { Routes } from "./src/Rotas/Routes";
import { ThemeContextProvider } from "./src/contexts/theme";

export default function App() {
  return (
    <ThemeContextProvider>
  <Routes />
  </ThemeContextProvider>
  );
}


