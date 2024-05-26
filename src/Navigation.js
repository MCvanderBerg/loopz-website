import { Route, Routes, Navigate, useNavigate, useLoc } from "react-router-dom";
import EventsScreen from "./screens/EventsScreen";
import { Router } from "./types/Types";
import MyEventsScreen from "./screens/MyEventsScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import MapsScreen from "./screens/MapScreen";
import AccountScreen from "./screens/AccountScreen";
import CategoryScreen from "./screens/CategoryScreen";
import EventDetailScreen from "./screens/EventDetailScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { CreateLocationScreen } from "./screens/CreateLocationScreen";
import { CreateScreen } from "./screens/CreateScreen";
import SettingsScreen from "./screens/SettingsScreen";
import UserInfo from "./screens/UserInfoScreen";

const Navigation = () => {

  return (
    <div className="pages">
      <Routes>
        <Route
          path="/"
          element={<EventsScreen />}
        />
        <Route
          path={Router.settings}
          element={<SettingsScreen />}
        />
        <Route
          path={Router.userInfo}
          element={<UserInfo />}
        />
        <Route
          exact
          path={Router.login}
          element={<LoginScreen />}
        />
        <Route
          exact
          path={Router.signup}
          element={<SignupScreen />}
        />
        <Route
          exact
          path={Router.create}
          element={<CreateScreen />}
        />
        <Route
          exact
          path={Router.events}
          element={<EventsScreen />}
        />
        <Route exact path={Router.myEvents} element={<MyEventsScreen />} />
        <Route exact path={Router.categories} element={<CategoriesScreen />} />
        <Route exact path={Router.maps} element={<MapsScreen />} />
        <Route exact path={Router.account} element={<AccountScreen />} />
        <Route
          exact
          path={Router.createLocation}
          element={<CreateLocationScreen/>}
          />
        <Route
          exact
          path={`${Router.categories}/${Router.category}`}
          element={<CategoryScreen />}
        />
        <Route
          exact
          path={`${Router.eventDetail}/:id`}
          element={<EventDetailScreen />}
        />

      </Routes>
    </div>
  );
};

export default Navigation;
