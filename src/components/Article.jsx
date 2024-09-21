import React, { useState } from 'react';
import Sidebar from './Sidebar';
import articleData from '../data.json';

const Article = () => {
  const [activeSection, setActiveSection] = useState({ sectionIdx: 0, subsectionIdx: 0, subsubsectionIdx: 0 });

  const handleClick = (sectionIdx, subsectionIdx = 0, subsubsectionIdx = 0) => {
    setActiveSection({ sectionIdx, subsectionIdx, subsubsectionIdx });
  };

  const renderHTML = (htmlString) => {
    return { __html: htmlString.replace(/<ul>/g, '<ul class="list-disc ml-5 mb-2">', /ol/g, '<ol class="list-decimal ml-5 mb-2">') };
  };

  const currentSection = articleData.subsections[activeSection.sectionIdx];
  const currentSubsection = currentSection.subsections[activeSection.subsectionIdx];
  const currentSubsubsection = currentSubsection.subsections[activeSection.subsubsectionIdx];

  return (
    <div className="flex">
      <Sidebar sections={articleData.subsections} handleClick={handleClick} activeSection={activeSection} />
      <div className="w-3/4 ml-6 p-6">
        <h2 className="text-lg font-bold" dangerouslySetInnerHTML={{ __html: currentSubsubsection.subsection }} />
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: currentSubsubsection.content }} />
      </div>
    </div>
  );
};

export default Article;
