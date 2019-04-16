/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Panel from 'components/Panel';
import Panels from './Panels';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          background: '#3166ed',
          color: '#ffffff',
          link: '/biz',
          date: 'UPDATED 3 DAYS AGO',
          title: 'BizBox',
          description:
            'The best place to run your business. Real-time tracking and future projections, all in one box.',
        },
        {
          background: '#e37898',
          color: '#ffffff',
          link: '/brand',
          date: 'UPDATED 3 DAYS AGO',
          title: 'BrandBox',
          description:
            'Make sure everything is on-brand. Vital info and assets for team members and outsiders alike.',
        },
        {
          background: '#3cdf91',
          color: '#ffffff',
          link: '/',
          date: 'UPDATED TODAY',
          title: 'ToolBox',
          description:
            "Run a business? There's an app for that. Instant overview apps you use - and apps you should be using.",
        },
        {
          background: '#f9f5f1',
          color: '#5d5043',
          link: '/',
          date: 'COMING SOON',
          title: 'PaperBox',
          description:
            "Run a business? There's an app for that. Instant overview apps you use - and apps you should be using.",
        },
        {
          background: '#f9f2fc',
          color: '#4b3851',
          link: '/',
          date: 'COMING SOON',
          title: 'Storage Box',
          description:
            "Run a business? There's an app for that. Instant overview apps you use - and apps you should be using.",
        },
      ],
    };
  }

  panelList = list =>
    list.map(panel => <Panel panel={panel} key={panel.title} />);

  render() {
    const { list } = this.state;
    return (
      <Panels id="panels" className="panels">
        {this.panelList(list)}
      </Panels>
    );
  }
}
