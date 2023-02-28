import React, { useState } from 'react';
import { Tab1 } from './Tab1';
import { Tab2 } from './Tab2';
import { Tab3 } from './Tab3';
import { Tab4 } from './Tab4';
import './Tabs.css';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="homepage-tabs-container">
      <ul className="tabs-nav">
        <li
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => setActiveTab('tab1')}
        >
          Običan pregled
        </li>
        <li
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => setActiveTab('tab2')}
        >
          Stomatološki Pregled
        </li>
        <li
          className={activeTab === 'tab3' ? 'active' : ''}
          onClick={() => setActiveTab('tab3')}
        >
          Bol Zuba
        </li>
        <li
          className={activeTab === 'tab4' ? 'active' : ''}
          onClick={() => setActiveTab('tab4')}
        >
          Stomatološka Anksioznost
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === 'tab1' && <Tab1 />}
        {activeTab === 'tab2' && <Tab2 />}
        {activeTab === 'tab3' && <Tab3 />}
        {activeTab === 'tab4' && <Tab4 />}
      </div>
    </div>
  );
};
