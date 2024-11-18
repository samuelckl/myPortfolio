import ProjectCard from "../pages/components/ProjectCard";
import VisualCard from "../pages/components/VisualCard";
import WelliWireFrame from "../images/visualProjects/IPSE_Welli.png";
import NKTDS from "../images/visualProjects/NKTDS1200.jpg";
import Faichun from "../images/visualProjects/faichun_think.png";
export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-orange-50 to-orange-200 select-none">
      <ProjectCard
        title="GeneGuardian Research Portal"
        videoLink="https://www.youtube.com/watch?v=U7w-0r8M1mY"
        description={`
          -- Collaborated with a team to design and develop a genomic data management portal using React, TypeScript, and Material UI for the front end.
          -- Built and integrated REST APIs with AWS services for seamless back-end functionality.
          -- Explored DUO ontology and implemented robust security protocols for genomic data protection.
          -- Gained expertise in Terraform and strengthened collaboration with industry partners throughout the project.
          `}
      />

      <ProjectCard
        title="iOS Development - Welli"
        videoLink="https://www.youtube.com/watch?v=Y8H9XHJ2uSs"
        description={`
          -- Worked collaboratively with a teammate to develop an iOS application for senior citizens.
          -- Built the app using SwiftUI, UIKit, TranslationKit, and REST APIs from OpenWeather and Twilio.
          -- Designed senior-friendly features, including Image-to-Speech, Magnifier, Medicine Reminders, Weather Forecast, and an SOS button with live location sharing.
          -- Enhanced technical skills in SwiftUI, REST API handling, and documentation, following the MV (Model-View) pattern.
          -- Utilized Figma for wireframe design and Miro Board for project management and planning.
          `}
      />

      <ProjectCard
        title="E-Commerce Website Development - SOIL"
        videoLink=""
        description={`
          -- Collaborated with a teammate to develop an e-commerce portal using ReactJS and NodeJS.
          -- Built the back end with MySQL, Express, GraphQL, Apollo, and implemented testing with Jest.
          -- Developed features such as secure login, a shopping cart, checkout, and a product review system.
          -- Implemented automated filtering for inappropriate reviews, with admin control for deleting reviews or managing user access.
          -- Enhanced the admin dashboard with product management, real-time review updates, and sales data analysis using integrated charts.
          `}
      />
      <ProjectCard
        title="Hackathon - GradeTracker"
        videoLink="https://www.youtube.com/watch?v=WFOuf4wlTaE"
        description={`
          -- A very fun project in limited short time developed with great team mates.
          -- Grade Tracker is an iOS app designed to help students track their academic performance with ease. 
          -- Students can manage semesters, courses, and assignments while monitoring their progress toward specific grade goals. 
          -- Key features include semester management, course tracking, assignment tracking, and progress monitoring with a clean, user-friendly UI. 
          -- The app also provides real-time calculations to guide students in achieving their desired grades.
          `}
      />
      <ProjectCard
        title="IoT project - scooter sharing system"
        videoLink=""
        description={`
          -- Collaborated in a team of 3 to develop scooter sharing system using Python, Flask, GoogleCloudPlatform for MySQL and map rendering.
          -- Built the back end with MySQL, SQLAlchemy, Sockets for Rasperry connection, QR detection with OpenCV and implemented testing with PyTest.
          -- Developed for users and admin, while user can register and login with verification, make booking event - synced with google calender.
          -- And Admin can update details of user and scooter, and view the data analysis with chart.
          -- Implemented Enhanced features of low battery detection, royalty system, return scooter for reward and voice input for login.
          `}
      />

      <VisualCard
        title="iPhone application Welli WireFrame"
        image={WelliWireFrame}
        description={`
          -- The wireframe, icon, color and font design for iOS app Welli using Figma.
          `}
      />

      <VisualCard
        title="Social Media Visual"
        image={NKTDS}
        description={`
          -- A Visual for social media designed and produced by Adobe Illustrator and Photoshop.
          `}
      />
      <VisualCard
        title="Chinese New Year Decoration Design"
        image={Faichun}
        description={`
          -- Graphic design for chinese new year embroidery decoration using Adobe Illustrator.
          `}
      />
    </div>
  );
}
