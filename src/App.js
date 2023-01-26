import "./App.css";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { MenuProvider } from "./context/MenuContext";

function App() {
  return (
    <MenuProvider>
      <div className="flex bg-gray-900 flex-col items-center justify-center h-screen text-white">
        <Menu />
        <Navbar />
        <h1 className="text text-3xl">BURGER MENU REMIX</h1>
      </div>
    </MenuProvider>
  );
}

export default App;
