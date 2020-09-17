import React from 'react';
import dayjs from 'dayjs';
import routeConf from '../route-config';
import TopMenu from '../components/top-menu';

const DayJs = (): JSX.Element => {
    const test1 = new Date('2018-01-16');
    const obj1 = dayjs(test1);
    const year1 = obj1.year();
    const diff1 = dayjs().diff(obj1, 'day');

    const test2 = '2016-07-20';
    const obj2 = dayjs(test2, 'YYYY-MM-DD');

    return (
        <div className="app">
            <TopMenu active={routeConf.DayJs.uri} />
            <div className="content">
                <div className="example-box">
                    <div className="example-title">
                        <span className="number">0.</span>
                        <span className="source">Usage</span>
                    </div>
                    <div className="example-body">
                        Start using Day.js by adding it to your project:
                        <br />
                        <code>npm i dayjs</code> or <code>yarn add dayjs</code>
                        <br /><br />
                        Then import it:
                        <br />
                        <code>import dayjs from 'dayjs';</code>
                        <br /><br />
                        Even to those of you who have never heard of Moment
                        before the two previous lines should ring a bell as
                        if you’ve seen this before. And you’d be right to say
                        that it looks exactly like Moment’s installation and import.
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
                        Day.js might not be a drop-in replacement for Moment.js
                        but it gives you pretty similar API and uses the same
                        concept of turning everything into its own object.
                        <br /><br />
                        Convert it:
                        <br />
                        <code>const obj1 = dayjs(test1); // Dayjs</code>
                        <br /><br />
                        And if we need to know what year is inside, then we just get it:
                        <br />
                        <code>obj1.year(); // number</code>
                        <br />
                        Or simply count how many days have passed since then:
                        <br />
                        <code>dayjs().diff(obj1, 'day'); // number</code>
                        <br />
                        The thing about using Moment.js is that you could
                        count <i>days</i> or <i>years</i> as well as
                        <i>day</i> or <i>year</i> — that  doesn’t matter at all.
                        We couldn’t say the same  about Day.js, but on
                        the other hand that's  the price you pay for having
                        a really lightweight library.
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
                        <br /><br />
                        And again we need to convert it. Day.js as well as
                        Moment.js will parse any string given its ISO 8601.
                        But if you want to parse anything different from
                        that, you must provide it with the desired format:
                        <br />
                        <code>const obj2 = dayjs(test2, 'YYYY-MM-DD'); // Dayjs</code>
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

export default DayJs;
