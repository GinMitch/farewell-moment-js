import React from 'react';
import { DateTime } from 'luxon';
import routeConf from '../route-config';
import TopMenu from '../components/top-menu';

const Luxon = (): JSX.Element => {
    const test1 = new Date('2018-01-16');
    const obj1 = DateTime.fromJSDate(test1);
    const year1 = obj1.toFormat('yyyy');
    const diff1 = DateTime.fromJSDate(new Date()).diff(obj1, 'days').as('days');

    const test2 = '2016-07-20';
    const obj2 = DateTime.fromISO(test2);

    return (
        <div className="app">
            <TopMenu active={routeConf.Luxon.uri} />
            <div className="content">
                <div className="example-box">
                    <div className="example-title">
                        <span className="number">0.</span>
                        <span className="source">Usage</span>
                    </div>
                    <div className="example-body">
                        Take the usual step and add Luxon to your project:
                        <br />
                        <code>npm i luxon</code> or <code>yarn add luxon</code>
                        <br /><br />
                        Luxon in contrast to the other libraries doesn’t
                        ship with its own type definitions, so your modern
                        IDE should scream about when you try to import it.
                        Here’s the way to add TypeScript support:
                        <br />
                        <code>npm i @types/luxon</code> or <code>yarn add @types/luxon</code>
                        <br /><br />
                        Then you may proceed to another usual step:
                        <br />
                        <code>import &#123; DateTime &#125; from 'luxon';</code>
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
                        If you think we should wrap (or convert) the date to
                        use it then you’re right:
                        <br />
                        <code>const obj1 = DateTime.fromJSDate(test1); // DateTime</code>
                        <br />
                        Rather than Moment.js, Luxon will not provide you with
                        a single “entry point” to do it. Refer to its guide
                        or use code completion to parse your date.
                        <br /><br />
                        Get the year value back:
                        <br />
                        <code>obj1.toFormat('yyyy'); // string</code>
                        <br />
                        Here we get result as string because <i>toFormat()</i>
                        could give us nearly anything with the token parameter.
                        <br /><br />
                        Count how many days have passed since then:
                        <br />
                        <code>DateTime.fromJSDate(new
                            Date()).diff(obj1, 'days').as('days'); // number
                        </code>
                        <br />
                        The syntax is trying really hard to look similar to
                        Moment.js, but it's a way longer than I personally
                        like and it gives you an awfully precise result.
                        <br /><br />
                        See the result:<br />
                        test1.toString(): <code>{test1.toString()}</code><br />
                        obj1.toISO(): <code>{obj1.toISO()}</code><br />
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
                        <br /><br />
                        And again we need to convert it using the corresponding
                        method. Though, we could've used <i>fromFormat()</i>
                        if this string was not ISO 8601 but
                        let's stick with <i>fromISO()</i> for now:
                        <br />
                        <code>DateTime.fromISO(test2); // DateTime</code>
                        <br /><br />
                        See the result:<br />
                        test2: <code>{test2}</code><br />
                        obj2.toISO(): <code>{obj2.toISO()}</code>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Luxon;
