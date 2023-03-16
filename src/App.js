import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetups from "./pages/NewMeetups";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
    return (
        <div>
            <MainNavigation />
            <Route path="/">
                <AllMeetups />
            </Route>
            <Route path="/new-meetup">
                <NewMeetups />
            </Route>
            <Route path="/favourites">
                <Favourites />
            </Route>
        </div>
    );
}

export default App;
