import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Templates from './LoadingRoutes';

export default class AppLayout extends Component {
    render() {
        return(
            <div>
                HEADER
                <Switch>
                    {Templates.map((route, index) => (
                        <Route path={route.path} exact render={props => <route.template {...props} />} />
                    ))}
                    
                </Switch>
            </div>            
        );
    }
}