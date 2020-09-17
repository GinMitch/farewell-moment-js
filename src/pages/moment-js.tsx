import React from 'react';
import moment from 'moment';
import routeConf from '../route-config';
import TopMenu from '../components/top-menu';

const MomentJs = (): JSX.Element => {
    const test1 = new Date('2018-01-16');
    const obj1 = moment(test1);
    const year1 = obj1.year();
    const diff1 = moment().diff(obj1, 'days');

    const test2 = '2016-07-20';
    const obj2 = moment(test2);

    return (
        <div className="app">
            <TopMenu active={routeConf.MomentJs.uri} />
            <div className="content">
                <div className="example-box">
                    <div className="example-title">
                        <span className="number">0.</span>
                        <span className="source">Usage</span>
                    </div>
                    <div className="example-body">
                        First thing we need before using Moment.js
                        in any project is to install it:<br />
                        <code>npm i moment</code> or <code>yarn add moment</code>
                        <br /><br />
                        Then import it in a component and you're good to go:<br />
                        <code>import moment from 'moment';</code>
                    </div>
                </div>
                <div className="example-box">
                    <div className="example-title">
                        <span className="number">1.</span>
                        <span className="source">Date as object</span>
                    </div>
                    <div className="example-body">
                        <code>const test1 = new Date('2018-01-16'); // Date</code>
                        <br /><br />
                        First, we need to convert it:
                        <br />
                        <code>const obj1 = moment(test1); // Moment</code>
                        <br />
                        That's it — nice and simple! Moment.js takes a Date
                        object “as is” and turns it into its own object,
                        so we could operate on it.
                        <br /><br />
                        And if we need to know what year is inside,
                        then we could easily get it:
                        <br />
                        <code>obj1.year(); // number</code>
                        <br /><br />
                        Or count how many days have passed since then:
                        <br />
                        <code>moment().diff(obj1, 'days'); // number</code>
                        <br /><br />
                        See the result:<br />
                        test1.toString(): <code>{test1.toString()}</code><br />
                        obj1.toISOString(): <code>{obj1.toISOString()}</code><br />
                        year1: <code>{year1}</code><br />
                        diff1: <code>{diff1}</code>
                    </div>
                </div>
                <div className="example-box">
                    <div className="example-title">
                        <span className="number">2.</span>
                        <span className="source">Date as string</span>
                    </div>
                    <div className="example-body">
                        <code>const test2 = '2016-07-20'; // string</code>
                        <br />
                        <br />
                        Convert it:
                        <br />
                        <code>moment(test2); // Moment</code>
                        <br />
                        Moment.js also takes a string “as is” so you should
                        only care about its format.<br />
                        Though Moment doesn't restrict you with some
                        special format, it may not recognize some real junk.
                        <br /><br />
                        See the result:<br />
                        test2: <code>{test2}</code><br />
                        obj2.toISOString(): <code>{obj2.toISOString()}</code>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MomentJs;
