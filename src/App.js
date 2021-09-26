import { Routes } from "./routes/Routes";
import { UserProvider } from "./shared/provider/UserProvider";

function App() {
  return (
    <UserProvider>
      <Routes>
      </Routes>
    </UserProvider>
  );
}

export default App;
