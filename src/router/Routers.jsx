import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from "../pages/Contact";
import Error from '../pages/Error'

function Routers() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route component={Error}></Route>
        </Switch>
    )
}

export default Routers
