import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';

import HomeSection from './sections/HomeSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  const [lang, setLang] = useState('en');

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const bgClass = darkMode
    ? 'bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white'
    : 'bg-gradient-to-br from-gray-100 to-white text-gray-900';

  const textPrimaryClass = darkMode ? 'text-white' : 'text-gray-800';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';
  const textMutedClass = darkMode ? 'text-gray-400' : 'text-gray-500';

  return (
    <main
      className={`min-h-screen ${bgClass} font-sans transition-colors duration-300`}
    >
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        lang={lang}
        setLang={setLang}
      />

      <AnimatePresence mode="wait">
        {activeSection === 'home' && (
          <HomeSection
            key="home"
            lang={lang}
            sectionVariants={sectionVariants}
            textPrimaryClass={textPrimaryClass}
            textSecondaryClass={textSecondaryClass}
          />
        )}

        {activeSection === 'education' && (
          <EducationSection
            key="education"
            lang={lang}
            sectionVariants={sectionVariants}
            textPrimaryClass={textPrimaryClass}
            textSecondaryClass={textSecondaryClass}
            textMutedClass={textMutedClass}
          />
        )}

        {activeSection === 'experience' && (
          <ExperienceSection
            key="experience"
            lang={lang}
            sectionVariants={sectionVariants}
            textPrimaryClass={textPrimaryClass}
            textSecondaryClass={textSecondaryClass}
          />
        )}

        {activeSection === 'skills' && (
          <SkillsSection
            key="skills"
            lang={lang}
            sectionVariants={sectionVariants}
            textPrimaryClass={textPrimaryClass}
            textSecondaryClass={textSecondaryClass}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
