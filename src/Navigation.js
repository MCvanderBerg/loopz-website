import {Route, Routes, Navigate} from "react-router-dom";
import NavBar from "./components/NavBar";
import EventsScreen from "./screens/EventsScreen";
import {Router} from "./types/Types";
import MyEventsScreen from "./screens/MyEventsScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import MapsScreen from "./screens/MapScreen";
import AccountScreen from "./screens/AccountScreen";
import CategoryScreen from "./screens/CategoryScreen";
import EventDetailScreen from "./screens/EventDetailScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { useAuthContext } from "./context/AuthContext";


const Navigation = () => {
    const { session } = useAuthContext()

    return (
        <div className="pages">
            <Routes>
                <Route path="/" element={session ? <MyEventsScreen/> : <Navigate to={Router.Login}/>}/>
                <Route exact path={Router.Login} element={session ? <Navigate to={Router.Events}/> : <LoginScreen/> }/>
                <Route exact path={Router.Signup} element={session ? <Navigate to={Router.Events}/> : <SignupScreen/>}/>
                <Route exact path={Router.Events} element={session ? <EventsScreen/> : <Navigate to={Router.Login}></Navigate>}/>
                <Route exact path={Router.MyEvents} element={<MyEventsScreen/>}/>
                <Route exact path={Router.Categories} element={<CategoriesScreen/>}/>
                <Route exact path={Router.Maps} element={<MapsScreen/>}/>
                <Route exact path={Router.Account} element={<AccountScreen/>}/>
                <Route exact path={`${Router.Categories}/${Router.Category}`} element={<CategoryScreen/>}/>
                <Route exact path={`${Router.EventDetail}/:id`} element={<EventDetailScreen/>}/>
            </Routes>
        </div>        
    )
}

export default Navigation;