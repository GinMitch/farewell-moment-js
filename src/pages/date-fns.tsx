import React from 'react';
import { differenceInDays, getYear, parse } from 'date-fns';
import routeConf from '../route-config';
import TopMenu from '../components/top-menu';

const DateFns = (): JSX.Element => {
    const test1 = new Date('2018-01-16');
    const year1 = getYear(test1);
    const diff1 = differenceInDays(new Date(), test1);

    const test2 = '2016-07-20';
    const obj2 = parse(test2, 'yyyy-MM-dd', new Date());

    return (
        <div className="app">
            <TopMenu active={routeConf.DateFns.uri} />
            <div className="content">
                <div className="example-box">
                    <div className="example-title">
                        <span className="number">0.</span>
                        <span className="source">Usage</span>
                    </div>
                    <div className="example-body">
                        To move on to the next library,
                        we need to add date-fns just as usual:
                        <br />
                        <code>npm i date-fns</code> or <code>yarn add date-fns</code>
                        <br /><br />
                        And here comes its first pitfall — you could not import
                        it like Moment.js or Luxon, each of date-fns’ functions
                        should be added to the import statement separately
                        thus you can not use the benefits of code completion.<br />
                        It requires you to know which function you
                        need or refer to its guide to find the right one:
                        <br />
                        <code>import &#123; differenceInDays, getYear &#125; from 'date-fns';</code>
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
                        This library is based on so-called “helper functions”
                        which rely on native Date object manipulations,
                        which is really great. Therefore, we need no
                        conversion to use it right away!
                        <br /><br />
                        Let's get a year from it again:
                        <br />
                        <code>getYear(test1); // number</code>
                        <br /><br />
                        And count how many days have passed since then:
                        <br />
                        <code>differenceInDays(new Date(), test1); // number</code>
                        <br /><br />
                        See the result:<br />
                        test1.toString(): <code>{test1.toString()}</code><br />
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
                        Unfortunately, date-fns could not recognize the string
                        format for us so to parse it we must explicitly provide
                        the string format which is not the point if your
                        project is well-documented and consistent:
                        <br />
                        <code>parse(test2, 'yyyy-MM-dd', new Date()); // Date</code>
                        <br /><br />
                        See the result:<br />
                        test2: <code>{test2}</code><br />
                        obj2.toString(): <code>{obj2.toString()}</code>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateFns;
