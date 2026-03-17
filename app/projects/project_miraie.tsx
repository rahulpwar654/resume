import Link from "next/link";

export default function ProjectMiraie() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-2">Panasonic MirAIe – IoT Platform</h1>
      <p className="text-gray-500 text-sm mb-8">
        Impressico Business Solutions · Jan 2022 – Sept 2023
      </p>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Overview</h2>
        <p className="text-sm leading-relaxed">
          Built the backend for Panasonic&apos;s MirAIe smart home IoT platform,
          enabling users to control and monitor connected appliances such as
          air conditioners, washing machines, and air purifiers from a single
          mobile app. The platform handled real-time device telemetry,
          command execution, and user management at scale.
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
            "OAuth2",
            "Kafka",
            "AWS Lambda",
            "AWS EC2",
            "MongoDB",
            "Redis",
            "Docker",
            "JUnit 5",
            "Mockito",
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
            Designed and developed Spring Boot microservices for device
            registration, telemetry ingestion, and remote command execution.
          </li>
          <li>
            Implemented Kafka-based messaging pipelines for real-time
            communication between smart devices and the cloud backend.
          </li>
          <li>
            Built OAuth2-based authentication and authorization using Spring
            Security, supporting multi-tenant user access control.
          </li>
          <li>
            Developed RESTful APIs consumed by the MirAIe mobile app for
            device management, scheduling, and energy monitoring.
          </li>
          <li>
            Used MongoDB for flexible device metadata storage and Redis for
            caching frequently accessed device states.
          </li>
          <li>
            Deployed services on AWS EC2 and Lambda, with Docker containers
            for consistent environments across dev and production.
          </li>
          <li>
            Led a team of 3 developers, conducting code reviews and mentoring
            junior engineers on microservices best practices.
          </li>
        </ul>
      </section>

      {/* Architecture Highlights */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Architecture Highlights</h2>
        <ul className="list-disc ml-6 text-sm space-y-2">
          <li>
            Event-driven architecture with Kafka enabling asynchronous
            device-to-cloud and cloud-to-device communication.
          </li>
          <li>
            Redis caching layer for sub-millisecond device state lookups,
            reducing database load significantly.
          </li>
          <li>
            Multi-tenant design supporting multiple Panasonic product lines
            on a shared backend infrastructure.
          </li>
          <li>
            Health monitoring and alerting for all microservices using Spring
            Boot Actuator and CloudWatch.
          </li>
        </ul>
      </section>

      {/* Impact */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Impact</h2>
        <ul className="list-disc ml-6 text-sm space-y-2">
          <li>
            Powered Panasonic&apos;s flagship smart home platform serving
            thousands of connected devices across India.
          </li>
          <li>
            Achieved reliable real-time device control with low-latency Kafka
            messaging and Redis caching.
          </li>
          <li>
            Improved development velocity by establishing microservices
            patterns and reusable component libraries.
          </li>
        </ul>
      </section>
    </main>
  );
}
