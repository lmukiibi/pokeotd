import RoutingPath from "./RoutingPath"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { HomeView } from "../view/homeView/HomeView"
import { ResultView } from "../view/resultView/ResultView"

import { useContext } from "react"
import { UserContext } from "../shared/provider/UserProvider"




export const Routes = ({children}) => {

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

    const BlockIfAuthenticated = (view) => {
        if (authenticatedUser) return view;
        return HomeView;
    };


    return (
        <BrowserRouter basename="/">

            {children}
            <Switch>
                <Route path={RoutingPath.resultView} component={BlockIfAuthenticated(ResultView)} />
                <Route path={RoutingPath.homeView} component={HomeView} />
            </Switch>

        </BrowserRouter>
    )
}