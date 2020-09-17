import React from 'react';
import { Link } from 'react-router-dom';
import routeConf from '../route-config';
import './top-menu.scss';

const TopMenu = (props: {active: string}): JSX.Element => {
    const { active } = props;
    return (
        <div className="top-menu">
            <Link to={routeConf.MomentJs.uri}
                className={`menu-item${active === routeConf.MomentJs.uri ? ' active' : ''}`}>
                {routeConf.MomentJs.title}
            </Link>
            <Link to={routeConf.DayJs.uri}
                className={`menu-item${active === routeConf.DayJs.uri ? ' active' : ''}`}>
                {routeConf.DayJs.title}
            </Link>
            <Link to={routeConf.Luxon.uri}
                className={`menu-item${active === routeConf.Luxon.uri ? ' active' : ''}`}>
                {routeConf.Luxon.title}
            </Link>
            <Link to={routeConf.DateFns.uri}
                className={`menu-item${active === routeConf.DateFns.uri ? ' active' : ''}`}>
                {routeConf.DateFns.title}
            </Link>
        </div>
    );
};

export default TopMenu;
