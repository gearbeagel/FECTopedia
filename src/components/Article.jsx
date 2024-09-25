import React, { useState } from 'react';
import Sidebar from './Sidebar';
import articleData from '../data.json';

const Article = () => {
  const [activeSection, setActiveSection] = useState({
    sectionIdx: 0,
    subsectionIdx: 0,
    subsubsectionIdx: 0,
  });

  const handleClick = (sectionIdx, subsectionIdx = 0, subsubsectionIdx = 0) => {
    setActiveSection({ sectionIdx, subsectionIdx, subsubsectionIdx });
    
    // Handle scroll for section title
    let id;
    if (subsubsectionIdx === 0 && subsectionIdx === 0) {
      id = `section-${sectionIdx}`; // For section title
    } else if (subsubsectionIdx === 0) {
      id = `subsection-${sectionIdx}-${subsectionIdx}`; // For subsection
    } else {
      id = `subsubsection-${sectionIdx}-${subsectionIdx}-${subsubsectionIdx}`; // For subsubsection
    }
    
    const element = document.getElementById(id);

    if (element) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 70; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight - 10,
        behavior: 'smooth',
      });
    }
  };

  const renderHTML = (htmlString) => {
    return {
      __html: htmlString.replace(
        /<ul>/g,
        '<ul class="list-disc ml-5 mb-2">'
      ).replace(/<ol>/g, '<ol class="list-decimal ml-5 mb-2">'),
    };
  };

  const currentSection = articleData.subsections[activeSection.sectionIdx];
  const currentSubsection =
    currentSection.subsections[activeSection.subsectionIdx];

  return (
    <div className="flex overflow-y-auto">
      <Sidebar
        sections={articleData.subsections}
        handleClick={handleClick}
        activeSection={activeSection}
      />
      <div className="w-1/6 md:w-1/2 ml-15 p-6 pl-20 mt-10 article">
        <h1
          id={`section-${activeSection.sectionIdx}`} // Add ID to section title for scrolling
          className="text-3xl font-semibold mb-2 mt-5"
        >
          {currentSubsection.section}
        </h1>
        {currentSubsection.subsections.map((subsubsection, subsubsectionIdx) => (
          <div key={subsubsectionIdx}>
            <h3
              id={`subsubsection-${activeSection.sectionIdx}-${activeSection.subsectionIdx}-${subsubsectionIdx}`}
              className="text-xl font-semibold mb-3 mt-4"
            >
              {subsubsection.subsection}
            </h3>
            <div
              className="mt-4"
              dangerouslySetInnerHTML={renderHTML(subsubsection.content)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
