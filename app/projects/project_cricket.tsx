import Link from "next/link";

export default function ProjectCricket() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-2">100MB Cricket Platform</h1>
      <p className="text-gray-500 text-sm mb-8">
        JetSynthesys · Feb 2018 – Jan 2022
      </p>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Overview</h2>
        <p className="text-sm leading-relaxed">
          Developed the backend for the 100MB cricket platform — a high-scale,
          real-time cricket scoring and content delivery application. The
          platform provided live match scores, ball-by-ball commentary,
          player statistics, and fan engagement features to millions of
          cricket enthusiasts. A major milestone was migrating the monolithic
          backend to a microservices architecture for improved scalability.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          {[
            "Java 8",
            "Spring Boot",
            "Kafka",
            "Kafka Streams",
            "MySQL",
            "Redis",
            "AWS EC2",
            "Docker",
            "Jenkins",
            "JUnit",
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
            Built real-time cricket scoring APIs that delivered ball-by-ball
            updates, live scoreboards, and match statistics to mobile and web
            clients.
          </li>
          <li>
            Implemented Kafka Streams pipelines for processing live match
            data feeds, transforming raw scoring events into structured,
            queryable data in real time.
          </li>
          <li>
            Led the migration from a monolithic Spring application to a
            microservices architecture, decomposing the system into
            independently deployable services.
          </li>
          <li>
            Designed Kafka-based event-driven communication between
            microservices for decoupled, resilient data flow.
          </li>
          <li>
            Used Redis for caching live match data, enabling sub-millisecond
            response times for score lookups during peak traffic.
          </li>
          <li>
            Built content management APIs for articles, videos, and fan
            engagement features integrated into the platform.
          </li>
          <li>
            Set up Jenkins CI/CD pipelines for automated testing and
            deployment to AWS EC2 instances.
          </li>
        </ul>
      </section>

      {/* Architecture Highlights */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Architecture Highlights</h2>
        <ul className="list-disc ml-6 text-sm space-y-2">
          <li>
            Kafka Streams topology for real-time aggregation of scoring
            events — computing run rates, partnership stats, and player
            milestones on the fly.
          </li>
          <li>
            Microservices decomposition: separate services for scoring,
            content, user management, and notifications, each independently
            scalable.
          </li>
          <li>
            Redis caching with TTL-based invalidation ensuring fresh live
            scores while reducing database load during high-concurrency
            matches.
          </li>
          <li>
            Horizontal scaling on AWS EC2 with load balancing to handle
            traffic spikes during major cricket events (IPL, World Cup).
          </li>
        </ul>
      </section>

      {/* Impact */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Impact</h2>
        <ul className="list-disc ml-6 text-sm space-y-2">
          <li>
            Served millions of cricket fans with low-latency live scoring
            during major tournaments.
          </li>
          <li>
            Monolith-to-microservices migration improved deployment frequency
            and reduced downtime during releases.
          </li>
          <li>
            Kafka Streams processing enabled real-time analytics and
            statistics previously computed only in batch.
          </li>
        </ul>
      </section>
    </main>
  );
}
