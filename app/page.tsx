import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";

type Experience = {
  company: string;
  role: string;
  duration: string;
  details: string[];
};

type Project = {
  name: string;
  description: string[];
};

export default function Page() {
  const experiences: Experience[] = [
    {
      company: "EPAM Systems",
      role: "Technical Lead Engineer",
      duration: "Apr 2025 – Nov 2025",
      details: [
        "Worked on Regnology project migrating Java 8 to Java 17.",
        "Improved secure API design and error recovery strategies.",
        "Used GitHub Copilot, LangChain and GenAI tools for development productivity.",
      ],
    },
    {
      company: "Cognizant",
      role: "Technical Lead",
      duration: "Oct 2023 – Apr 2025",
      details: [
        "Developed Spring Boot and Python Flask microservices.",
        "Deployed services on AWS Lambda and API Gateway.",
        "Led development of Cards API for Truist Bank.",
      ],
    },
    {
      company: "Impressico Business Solutions",
      role: "Senior Software Developer",
      duration: "Jan 2022 – Sept 2023",
      details: [
        "Designed Spring Boot microservices deployed on AWS Lambda and EC2.",
        "Built backend for Panasonic MirAIe IoT platform.",
        "Led team of 3 developers.",
      ],
    },
    {
      company: "JetSynthesys",
      role: "Software Developer",
      duration: "Feb 2018 – Jan 2022",
      details: [
        "Developed Spring Boot APIs and Kafka streaming services.",
        "Worked on high scale platforms including 100MB cricket platform.",
        "Led backend development for multiple apps including Airtel ViPlay.",
      ],
    },
    {
      company: "IT Gurus Software",
      role: "Software Developer",
      duration: "Mar 2016 – Aug 2017",
      details: [
        "Developed Spring Boot APIs.",
        "Worked on PeopleHR and DoctoPlus platforms.",
      ],
    },
  ];

  const projects: Project[] = [
    {
      name: "REST API Client – JetBrains Plugin",
      description: [
        "Built and published an open-source IntelliJ IDEA plugin on the JetBrains Marketplace.",
        "Lightweight REST client tool window supporting HTTP methods, headers, body, auth, history, and collections.",
        "500+ downloads. Licensed under MIT.",
      ],
    },
    {
      name: "Truist Bank Cards API",
      description: [
        "Spring Boot microservices deployed on AWS Lambda.",
        "GitLab CI/CD pipelines for deployment.",
        "OpenAPI documentation for REST APIs.",
      ],
    },
    {
      name: "Panasonic MirAIe",
      description: [
        "IoT backend built using Spring Boot.",
        "Kafka messaging for smart device communication.",
        "OAuth2 security using Spring Security.",
      ],
    },
    {
      name: "100MB Cricket Platform",
      description: [
        "Real-time cricket scoring backend.",
        "Kafka Streams for live data processing.",
        "Migrated monolith to microservices.",
      ],
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Rahul Raghunath Pawar</h1>
        <p className="text-gray-600 mt-2">
          Technical Lead | Java | Spring Boot | Microservices | AWS | Kafka
        </p>

        <div className="text-sm text-gray-500 mt-2">
          <p>Email: rahulpwar654@gmail.com</p>
          <p>Mobile: 7776003630</p>
          <p>Pune, Maharashtra, India</p>
        </div>
      </header>

      {/* Objective */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Career Objective</h2>
        <p>
          Seeking a challenging role in software development where I can
          leverage my expertise in Java, Spring Boot, and cloud technologies to
          build scalable microservices and drive business growth.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Technical Skills</h2>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold">Languages</h3>
            <p>Java (8,17,21), Kotlin, SQL</p>
          </div>

          <div>
            <h3 className="font-semibold">Frameworks</h3>
            <p>Spring Boot, Microservices, Spring Security, Spring Cloud</p>
          </div>

          <div>
            <h3 className="font-semibold">Cloud</h3>
            <p>AWS Lambda, API Gateway, EC2, S3</p>
          </div>

          <div>
            <h3 className="font-semibold">Databases</h3>
            <p>MySQL, Redis, MongoDB, SQLite</p>
          </div>

          <div>
            <h3 className="font-semibold">Tools</h3>
            <p>Kafka, Docker, Swagger, GitHub Copilot</p>
          </div>

          <div>
            <h3 className="font-semibold">CI/CD</h3>
            <p>Git, Jenkins, GitLab CI/CD</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-5">Work Experience</h2>

        {experiences.map((exp, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-bold text-lg">
              {exp.role} – {exp.company}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>

            <ul className="list-disc ml-6 text-sm space-y-1">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-5">Key Projects</h2>

        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold">
              {project.name}
              {project.name.includes("JetBrains") && (
                <a
                  href="https://plugins.jetbrains.com/plugin/28269-rest-api-client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-sm font-normal text-blue-600 hover:underline"
                >
                  View on Marketplace →
                </a>
              )}
              {project.name.includes("Truist") && (
                <Link
                  href="/projects/truist"
                  className="ml-2 text-sm font-normal text-blue-600 hover:underline"
                >
                  View Details →
                </Link>
              )}
              {project.name.includes("MirAIe") && (
                <Link
                  href="/projects/miraie"
                  className="ml-2 text-sm font-normal text-blue-600 hover:underline"
                >
                  View Details →
                </Link>
              )}
              {project.name.includes("100MB") && (
                <Link
                  href="/projects/cricket"
                  className="ml-2 text-sm font-normal text-blue-600 hover:underline"
                >
                  View Details →
                </Link>
              )}
            </h3>

            <ul className="list-disc ml-6 text-sm">
              {project.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Education</h2>
        <p>
          BE Computer Science – Shivaji University, Kolhapur
        </p>
      </section>

      {/* Resume Download */}
      <section>
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-black text-white px-5 py-2 rounded"
        >
          Download Resume
        </a>
      </section>
    </main>
  );
}