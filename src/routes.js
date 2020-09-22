import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Index from './views/index'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index}></Route>
            </Switch>
        </BrowserRouter>
    )
}