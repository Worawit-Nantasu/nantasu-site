import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLine, FaGithub, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

const textContent = {
  en: {
    greeting: "Hello, I'm Worawit",
    description:
      'A motivated fresh graduate passionate about Frontend development and open to any IT opportunities to broaden my skill set.',
    facebook: 'Facebook',
    line: 'Line',
    github: 'GitHub',
    email: 'Email',
  },
  th: {
    greeting: 'สวัสดีครับ ผมวรวิทย์',
    description:
      'เด็กจบใหม่ไฟแรง 💡 ชื่นชอบงาน Frontend และพร้อมรับทุกโอกาสในสายงาน IT เพื่อขยายขอบเขตความสามารถของตัวเองครับ',
    facebook: 'เฟซบุ๊ก',
    line: 'ไลน์',
    github: 'กิตฮับ',
    email: 'อีเมล',
  },
};

function HomeSection({
  lang,
  sectionVariants,
  textPrimaryClass,
  textSecondaryClass,
  darkMode, 
}) {
  const t = textContent[lang] || textContent.en; 

  return (
    <motion.section
      key="home"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col items-center text-center py-20 px-4"
    >
      <img
        src={profileImage}
        alt="Worawit profile"
        className="w-[360px] h-[360px] rounded-full border-4 border-white mb-6 object-cover"
      />

      <h1 className={`text-4xl font-bold mb-2 ${textPrimaryClass}`}>
        {t.greeting}
      </h1>
      <p className={`text-lg ${textSecondaryClass} max-w-xl`}>
        {t.description}
      </p>

      <div className="flex gap-4 mt-6 flex-wrap justify-center">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/armmer.wo.9/"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors
            ${
              darkMode
                ? 'bg-white text-black border border-gray-300 shadow hover:bg-gray-100'
                : 'bg-[#4267B2] text-white hover:bg-[#365493]'
            }
          `}
        >
          <FaFacebookF /> {t.facebook}
        </a>

        {/* Line */}
        {/* <a
          href="https://line.me"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors
            ${
              darkMode
                ? 'bg-white text-black border border-gray-300 shadow hover:bg-gray-100'
                : 'bg-[#00C300] text-white hover:bg-[#00A300]'
            }
          `}
        >
          <FaLine /> {t.line}
        </a> */}

        {/* GitHub */}
        <a
          href="https://github.com/Worawit-Nantasu"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors
            ${
              darkMode
                ? 'bg-white text-black border border-gray-300 shadow hover:bg-gray-100'
                : 'bg-[#181717] text-white hover:bg-black'
            }
          `}
        >
          <FaGithub /> {t.github}
        </a>

        {/* Email */}
        <a
          href="mailto:worawit.n@live.ku.th"
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors
            ${
              darkMode
                ? 'bg-white text-black border border-gray-300 shadow hover:bg-gray-100'
                : 'bg-[#EA4335] text-white hover:bg-[#d93025]'
            }
          `}
        >
          <FaEnvelope /> {t.email}
        </a>
      </div>
    </motion.section>
  );
}

export default HomeSection;
