import { Nav } from "./components/nav.jsx";
import AppRouter from "./app.router.jsx";
import { AppContainer } from "./components/app-container";

function App() {
  return (
    <AppContainer>
      <Nav />
      <AppRouter />
    </AppContainer>
  );
}

export default App;
