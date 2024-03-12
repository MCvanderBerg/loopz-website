import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import EventsScreen from "./screens/EventsScreen";
import MyEventsScreen from "./screens/MyEventsScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import MapsScreen from "./screens/MapScreen";
import AccountScreen from "./screens/AccountScreen";
import {Router} from "./types/Types";
import CategoryScreen from "./screens/CategoryScreen";
import Navigation from "./Navigation";
import {NavigationProvider} from "./context/NavigationContext";




function App() {
  return (
      <NavigationProvider>
          <Navigation/>
      </NavigationProvider>
  );
}

export default App;
