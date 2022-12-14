import { Nav } from "./components/nav.jsx";
import AppRouter from "./app.router.jsx";
import { AppContainer } from "./components/app-container";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

const defaultQueryFn = async ({ queryKey }) => {
  const { data } = await axios.get(
    `https://data.brreg.no/enhetsregisteret/api/enheter${queryKey[0]}`
  );
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <Nav />
        <AppRouter />
      </AppContainer>
    </QueryClientProvider>
  );
}

export default App;
