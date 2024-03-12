import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import EventsScreen from "./screens/EventsScreen";
import {Router} from "./types/Types";
import MyEventsScreen from "./screens/MyEventsScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import MapsScreen from "./screens/MapScreen";
import AccountScreen from "./screens/AccountScreen";
import CategoryScreen from "./screens/CategoryScreen";
import EventDetailScreen from "./screens/EventDetailScreen";

const Navigation = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<NavBar/>}>
                    <Route index element={<EventsScreen/>}/>
                    <Route exact path={Router.MyEvents} element={<MyEventsScreen/>}/>
                    <Route exact path={Router.Categories} element={<CategoriesScreen/>}/>
                    <Route exact path={Router.Maps} element={<MapsScreen/>}/>
                    <Route exact path={Router.Account} element={<AccountScreen/>}/>
                    <Route exact path={`${Router.Categories}/${Router.Category}`} element={<CategoryScreen/>}/>
                    <Route exact path={`${Router.EventDetail}/:id`} element={<EventDetailScreen/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default Navigation;