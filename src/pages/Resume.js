import { FaFilePdf } from "react-icons/fa";
export default function Resume() {
  return (
    <div className="text-center mt-8 p-6 bg-gradient-to-r from-orange-50 to-orange-200 select-none">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold">Kin Lok, Chan</h1>

        <p className="text-xs sm:text-base">
          E-mail:{" "}
          <a
            href="mailto:samuelckl@gmail.com"
            className="text-blue-500 hover:text-blue-800 "
          >
            samuelckl@gmail.com
          </a>{" "}
          | Phone: +61451093203
        </p>
        <p className="text-sm sm:text-base">
          Wyndham Vale, Victoria, Australia |{" "}
          <a
            href="https://www.linkedin.com/in/samchankinlok"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-800 "
          >
            LinkedIn
          </a>
        </p>
        <a
          href="/resources/SamResume.pdf"
          download="SamResume.pdf"
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
          A dedicated Full Stack Software Engineer with a Master of Information
          Technology from RMIT University with hands-on Software Engineering
          experience. Seeking a Full Stack Software Engineer role to leverage
          expertise in building scalable REST APIs and creating positive user
          experiences.
        </p>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Education</h2>
        <p className="text-sm sm:text-base font-semibold">
          Master of Information Technology - GPA 3.8 / 85 WAM
        </p>
        <p className="text-xs sm:text-base">
          RMIT University | Feb 2023 — Dec 2024
        </p>
        <p className="text-xs sm:text-base">
          Modules: Information Technology, Cloud Computing, Software
          Engineering, Full Stack Development, Agile Methodologies, Mobile
          Application (iPhone)
        </p>
        <p className="text-xs sm:text-base">
          High Distinction Graduate, Participated in Peer mentoring program,
          Industry Experience Program
        </p>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Skills</h2>
        <ul className="list-disc list-inside text-xs sm:text-base">
          <li>
            <strong>Programming Languages:</strong> JavaScript, TypeScript,
            Python, Java, Swift, SQL, HTML, CSS
          </li>
          <li>
            <strong>Front-End Development:</strong> React, Swift UI, Tailwind
            CSS, Material UI
          </li>
          <li>
            <strong>Back-End Development:</strong> Node.js, REST API,
            Express.js, GraphQL, Spring Boot
          </li>
          <li>
            <strong>Databases & Cloud:</strong> MySQL, PostgreSQL, MongoDB, AWS,
            GCP
          </li>
          <li>
            <strong>DevOps & Tools:</strong> Terraform, Docker, GitHub, Miro,
            Trello, Adobe Photoshop, Figma
          </li>
          <li>
            <strong>Testing & Debugging:</strong> Unit Testing, Debugging Tools
          </li>
          <li>
            <strong>Soft Skills:</strong> Communication, Teamwork,
            Problem-solving, Critical Thinking, Proactiveness
          </li>
        </ul>
      </div>

      {/* Projects */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Projects</h2>
        <p className="text-sm sm:text-base font-semibold">
          Capstone Project with CSIRO - GeneGuardian Researcher Portal
        </p>
        <ul className="list-disc list-inside text-xs sm:text-base">
          <li>
            Collaborated with a team to design and deveolop a genomic data
            management portal using React, TypeScript, and Material UI for the
            front-end
          </li>
          <li>
            Built and integrated REST APIs with AWS services for back-end
            functionality.
          </li>
          <li>
            Explored DUO ontology and implemented robust security for genomic
            data.
          </li>
          <li>
            Developed technicall skills in Terraform and strengthened
            collaboration with industry partners.
          </li>
        </ul>
        <br></br>

        <p className="text-sm sm:text-base font-semibold">
          Welli - iOS Application for Senior Daily Usage
        </p>
        <ul className="list-disc list-inside text-xs sm:text-base">
          <li>
            Developed with UIKit and TranslationKit for capturing and processing
            photo and text translation.
          </li>
          <li>
            Integrated with REST APIs to fetch weather data and send SMS with
            current location.
          </li>
        </ul>
        <br></br>

        <p className="text-sm sm:text-base font-semibold">
          E-commerce Full Stack Development - A supermarket E-shopping Website
        </p>
        <ul className="list-disc list-inside text-xs sm:text-base">
          <li>
            Full Stack Development (React, Node.js, Express, GraphQL, MySQL,
            Apollo, Jest).
          </li>
          <li>
            Features: Secure login, cart, checkout, and admin-managed review
            system with auto comment censoring on offensive words.
          </li>
        </ul>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Experience</h2>
        <p className="text-sm sm:text-base font-semibold">
          Full Stack Developer Intern | RDA Group | Jan 2025 - Present
        </p>
        <ul className="list-disc list-inside text-xs sm:text-base">
          <li>
            Developed a dynamic task marketplace app using React & Node.js.
          </li>
          <li>
            Leading frontend development and preparing backend integration.
          </li>
          <li>
            Optimized API and database logic, improving efficiency by 50%.
          </li>
        </ul>
        <br></br>

        <p className="text-sm sm:text-base font-semibold">
          Full-Stack Software Engineer Intern | CSIRO | July 2024 - Nov 2024
        </p>
        <ul className="list-disc list-inside text-xs sm:text-base">
          <li>
            Developed genomic data management portal with React & TypeScript.
          </li>
          <li>
            Optimized AWS services with Terraform, achieving 50% cost savings.
          </li>
          <li>
            Reduced system response time from days to minutes using REST APIs.
          </li>
          <li>
            Enhanced search efficiency by 70% with an optimized data structure.
          </li>
        </ul>
      </div>

      {/* Languages */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Languages</h2>
        <ul className="list-disc list-inside text-xs sm:text-base">
          <li>
            English, Mandarin, Cantonese - Native or bilingual proficiency
          </li>
        </ul>
      </div>

      {/* Certifications */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Certifications</h2>
        <ul className="list-disc list-inside text-xs sm:text-base">
          <li>Peer Mentoring - RMIT | Jul 2023</li>
          <li>
            Microsoft Certified: Azure AI Fundamentals, Azure Fundamentals
          </li>
          <li>Capstone Project with CSIRO – Frontend, Backend (REST API)</li>
          <li>Industry Experience Program | Apr 2024</li>
        </ul>
      </div>
    </div>
  );
}
