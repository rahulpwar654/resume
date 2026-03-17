import Link from "next/link";

export default function ProjectTruist() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-2">Truist Bank – Cards API</h1>
      <p className="text-gray-500 text-sm mb-8">
        Cognizant · Oct 2023 – Apr 2025
      </p>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Overview</h2>
        <p className="text-sm leading-relaxed">
          Led the backend development of the Cards API platform for Truist
          Bank, one of the largest financial services companies in the US. The
          project involved building a suite of Spring Boot microservices to
          manage credit and debit card operations including card issuance,
          activation, transaction history, and card controls — all exposed via
          secure RESTful APIs.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          {[
            "Java 17",
            "Spring Boot",
            "Spring Security",
            "AWS Lambda",
            "API Gateway",
            "DynamoDB",
            "GitLab CI/CD",
            "OpenAPI / Swagger",
            "JUnit 5",
            "Mockito",
            "SonarQube",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Key Contributions */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Key Contributions</h2>
        <ul className="list-disc ml-6 text-sm space-y-2">
          <li>
            Designed and developed RESTful microservices for card lifecycle
            management — issuance, activation, blocking, and replacement.
          </li>
          <li>
            Deployed services as serverless functions on AWS Lambda behind API
            Gateway for cost-efficient scaling.
          </li>
          <li>
            Implemented OAuth2 / JWT-based authentication and role-based
            authorization using Spring Security.
          </li>
          <li>
            Built comprehensive OpenAPI (Swagger) documentation for all API
            endpoints, enabling seamless integration for frontend and
            third-party teams.
          </li>
          <li>
            Set up GitLab CI/CD pipelines for automated build, test, and
            deployment across dev, staging, and production environments.
          </li>
          <li>
            Wrote extensive unit and integration tests with JUnit 5 and
            Mockito, achieving high code coverage enforced via SonarQube.
          </li>
          <li>
            Collaborated with cross-functional teams including QA, DevOps, and
            business analysts to deliver features in agile sprints.
          </li>
        </ul>
      </section>

      {/* Architecture Highlights */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Architecture Highlights</h2>
        <ul className="list-disc ml-6 text-sm space-y-2">
          <li>
            Serverless-first architecture using AWS Lambda for each
            microservice, reducing infrastructure overhead and operational
            costs.
          </li>
          <li>
            API Gateway configured with request validation, throttling, and
            usage plans for secure external access.
          </li>
          <li>
            Centralized error handling and standardized API response formats
            across all services.
          </li>
          <li>
            Environment-specific configuration management using AWS Systems
            Manager Parameter Store.
          </li>
        </ul>
      </section>

      {/* Impact */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Impact</h2>
        <ul className="list-disc ml-6 text-sm space-y-2">
          <li>
            Enabled Truist Bank to modernize their card management platform
            with scalable, cloud-native APIs.
          </li>
          <li>
            Reduced deployment time from hours to minutes with fully automated
            CI/CD pipelines.
          </li>
          <li>
            Improved API reliability with comprehensive error handling and
            monitoring.
          </li>
        </ul>
      </section>
    </main>
  );
}