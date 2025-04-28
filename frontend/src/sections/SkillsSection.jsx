import React from 'react';
import { motion } from 'framer-motion';

const textContent = {
  en: {
    title: 'Skills',
    skillList: [
      'React, HTML, CSS, JavaScript (Basic)',
      'Node.js (Basic), REST APIs (Basic)',
      'MySQL (Basic)',
      'Git, GitHub, Postman, Figma (Basic)',
      'macOS, Windows, Linux (Proficient)',
      'Jest, Mocha (Basic)',
    ],
  },
  th: {
    title: 'ทักษะ',
    skillList: [
      'React, HTML, CSS, JavaScript (พื้นฐาน)',
      'Node.js (พื้นฐาน), REST APIs (พื้นฐาน)',
      'MySQL (พื้นฐาน)',
      'Git, GitHub, Postman, Figma (พื้นฐาน)',
      'macOS, Windows, Linux (ชำนาญ)',
      'Jest, Mocha (พื้นฐาน)',
    ],
  },
};

function SkillsSection({ lang, sectionVariants, textPrimaryClass, textSecondaryClass }) {
  const t = textContent[lang] || textContent.en;

  return (
    <motion.section
      key="skills"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="max-w-3xl mx-auto p-8 pb-16"
    >
      <h2 className={`text-3xl font-semibold mb-4 border-b pb-2 ${textPrimaryClass}`}>
        {t.title}
      </h2>
      {/* 2 คอลัมน์ */}
      <ul className={`grid grid-cols-2 gap-4 list-disc list-inside ${textSecondaryClass}`}>
        {t.skillList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </motion.section>
  );
}

export default SkillsSection;
