import React from 'react';
import Templates from './../containers/DynamicRoutes';

export default function Sidebar(props) {
    return (
        <aside id="sidebar">
            <div className="sidebar-title">
                <h2>School of Net</h2>
            </div>
            <div className="list-group">
                <a href="/" className="list-group-item"> Home </a>
                { 
                    Templates.map((template, index) => (
                        <a key={index} href={template.path} className="list-group-item"> {template.name} </a>
                    ))
                }
            </div>
        </aside>
    );
}