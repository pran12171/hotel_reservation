import Navbar from "./Navbar";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

export default function App() {
  // Simple client-side page state — swap for React Router if you prefer
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar currentPage={page} onNavigate={setPage} />
      {page === "home"  && <HomePage  onNavigate={setPage} />}
      {page === "login" && <LoginPage onNavigate={setPage} />}
    </>
  );
}
