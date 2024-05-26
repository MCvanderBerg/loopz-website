import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import { NavigationProvider } from "./context/NavigationContext";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <NavigationProvider>
            <NavBar />
            <Navigation />
          </NavigationProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
