import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import FirstParagraph from "./components/FirstParagraph";

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact strict path="/" render={() => <FirstParagraph/>}/>
            </Switch>
        </BrowserRouter>
    )
}