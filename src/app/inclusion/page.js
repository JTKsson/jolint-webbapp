import React from 'react';
import inclusionContent from '../assets/inclusion-content';
import InclusionDropdownComponent from '../components/InclusionDropdownComponent';
import mentalHealth from '../assets/mental-health';
import inclusionDiversity from '../assets/inclusion-diversity';

const InclusionPage = () => {
  return (
    <div>
      <InclusionDropdownComponent />
      <div>
        {inclusionContent.map((inclusionItem, index) => (
          <div key={`inclusion-${index}`}>
            <h3>{inclusionItem.title}</h3>
            <p>{inclusionItem.content}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>About mental health at work</h3>
        {mentalHealth.map((item, index) => (
          <div key={`mental-health-${index}`}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      {inclusionDiversity.map((item, index) => (
        <div key={`diversity-${index}`}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default InclusionPage;

