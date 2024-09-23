import React, { useState } from 'react';
import Sidebar from './Sidebar';
import articleData from '../data.json';

const Article = () => {
  const [activeSection, setActiveSection] = useState({ sectionIdx: 0, subsectionIdx: 0, subsubsectionIdx: 0 });

  const handleClick = (sectionIdx, subsectionIdx = 0, subsubsectionIdx = 0) => {
    setActiveSection({ sectionIdx, subsectionIdx, subsubsectionIdx });
  };

  const renderHTML = (htmlString) => {
    return { 
      __html: htmlString.replace(/<ul>/g, '<ul class="list-disc ml-5 mb-2">').replace(/<ol>/g, '<ol class="list-decimal ml-5 mb-2">') 
    };
  };

  const currentSection = articleData.subsections[activeSection.sectionIdx];
  const currentSubsection = currentSection.subsections[activeSection.subsectionIdx];

  return (
    <div className="flex overflow-y-auto">
      <Sidebar sections={articleData.subsections} handleClick={handleClick} activeSection={activeSection} />
      <div className="w-3/4 md:w-1/2 ml-15 p-6 pl-20 mt-10 article">
        <h1 className="text-3xl font-semibold mb-2 mt-5">{currentSubsection.section}</h1>
        {currentSubsection.subsections.map((subsubsection, subsubsectionIdx) => (
          <div key={subsubsectionIdx}>
            <h3 className="text-xl font-semibold mb-3 mt-4">{subsubsection.subsection}</h3>
            <div className="mt-4" dangerouslySetInnerHTML={renderHTML(subsubsection.content)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
