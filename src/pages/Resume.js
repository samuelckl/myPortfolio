import {FaFilePdf} from "react-icons/fa";
export default function Resume() {
  return (
    <div className="text-center mt-8 p-6 bg-gradient-to-r from-orange-50 to-orange-200 select-none">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold">Kin Lok, Chan</h1>
        
        <p className="text-xs sm:text-base">
          E-mail: <a href="mailto:samuelckl@gmail.com" className="text-blue-500 hover:text-blue-800 ">samuelckl@gmail.com</a> | Phone: +61451093203
        </p>
        <p className="text-sm sm:text-base">
          Wyndham Vale, Victoria, Australia |{" "}
          <a href="https://www.linkedin.com/in/samchankinlok" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-800 ">
            LinkedIn
          </a>
        </p>
        <a
          href="/resources/Kin_Lok_Chan_Resume.pdf"
          download="Kin_Lok_Chan_Resume.pdf"
          className="flex items-center justify-center text-blue-600 hover:text-blue-900 text-xs sm:text-base mt-2"
        >
          <FaFilePdf className="text-xl sm:text-2xl mr-2 " />
          Download Resume in PDF
        </a>
      </div>

      {/* Personal Summary */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Personal Summary</h2>
        <p className="text-xs sm:text-base">
          A dedicated Master of Information Technology graduate with a 3.8 GPA and hands-on expertise in full-stack development. Delivered 3+ successful projects, including a genomic data management portal for CSIRO. Proficient in modern technologies like React, Node.js, and AWS, with strong problem-solving and team collaboration skills.
        </p>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Education</h2>
        <p className="text-sm sm:text-base font-semibold">
          Master of Information Technology - GPA 3.8
        </p>
        <p className="text-xs sm:text-base">RMIT University | Feb 2023 — Present</p>
        <p className="text-xs sm:text-base">
          Key Courses: Full Stack Development, iOS Application Development, Cloud Computing, Database Application, IoT Application, Software Engineering.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Skills</h2>
        <ul className="list-disc list-inside text-xs sm:text-base">
          <li><strong>Programming Languages:</strong> JavaScript, TypeScript, Python, SQL, Swift (iOS application for Swift UI)</li>
          <li><strong>Front-End Development:</strong> React, Swift UI, Tailwind CSS, Material UI</li>
          <li><strong>Back-End Development:</strong> Node.js, REST API, Express.js, GraphQL</li>
          <li><strong>Databases & Cloud:</strong> MySQL, MongoDB, AWS (Lambda, DynamoDB, S3), Google Cloud Platform</li>
          <li><strong>DevOps & Tools:</strong> Terraform, Docker, GitHub, Miro, Trello, Adobe Illustrator, Photoshop, Figma</li>
          <li><strong>Testing & Debugging:</strong> Unit Testing, Debugging Tools</li>
          <li><strong>Soft Skills:</strong> Communication, Teamwork, Problem-solving, Critical Thinking, Proactiveness</li>
        </ul>
      </div>

      {/* Projects */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Projects</h2>
        <div className="mb-4">
          <h3 className="text-sm sm:text-lg font-semibold">Capstone Project with CSIRO – GeneGuardian Researcher Portal</h3>
          <ul className="list-disc list-inside text-xs sm:text-base">
            <li>Collaborated with a team to design and develop a genomic data management portal using React, TypeScript, and Material UI for the front-end.</li>
            <li>Built and integrated REST APIs with AWS services for back-end functionality.</li>
            <li>Explored DUO ontology and implemented robust security for genomic data.</li>
            <li>Developed technical skills in Terraform and strengthened collaboration with industry partners.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-sm sm:text-lg font-semibold">Welli – iOS Application for Senior Daily Usage</h3>
          <ul className="list-disc list-inside text-xs sm:text-base">
            <li>Developed with UIKit and TranslationKit for capturing and processing photo and text translation.</li>
            <li>Integrated with REST APIs to fetch weather data and send SMS with current location.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm sm:text-lg font-semibold">E-commerce Full Stack Development – A Supermarket E-shopping Website</h3>
          <ul className="list-disc list-inside text-xs sm:text-base">
            <li>Full Stack Development (React, Node.js, Express, GraphQL, MySQL, Apollo, Jest).</li>
            <li>Features: Secure login, cart, checkout, and admin-managed review system.</li>
          </ul>
        </div>
      </div>

      {/* Languages */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Languages</h2>
        <p className="text-xs sm:text-base">
          English, Cantonese, Mandarin - Native or bilingual proficiency | IELTS 8.0 (British Council)
        </p>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Certifications</h2>
        <ul className="list-disc list-inside text-xs sm:text-base">
          <li>Peer Mentoring – RMIT | Jul 2023</li>
          <li>Microsoft Certified: Azure Fundamentals, AI Fundamentals | Nov 2023 / Apr 2024</li>
          <li>Capstone Project with CSIRO – Frontend, Backend (REST API) | Oct 2024</li>
          <li>Industry Experience Program | Apr 2024</li>
        </ul>
      </div>
    </div>
  );
}