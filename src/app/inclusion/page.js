import React from 'react';
import inclusionContent from '../assets/inclusion-content';
import InclusionDropdownComponent from '../components/InclusionDropdownComponent';
import mentalHealth from '../assets/mental-health';

const InclusionPage = () => {
  return (
    <>
      <div>
        <h2>Inclusion page</h2>
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
            <h4>{item.title}</h4> 
            <p>{item.content}</p>
          </div>
        ))}
      </div>

      <InclusionDropdownComponent />
    </>
  );
};

export default InclusionPage;
