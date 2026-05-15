export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-5xl font-bold">
          About Me
        </h1>

        <p className="mb-6 text-lg text-gray-300">
          My name is Dawei (David). I am currently studying
          Fullstack Software Development in California.
        </p >

        <p className="mb-6 text-lg text-gray-300">
          I have previous experience in supply chain management,
          global product development, and international business.
        </p >

        <p className="mb-6 text-lg text-gray-300">
          I am currently learning React, Next.js, Tailwind CSS,
          GitHub, and cloud technologies.
        </p >

        <div className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-gray-800 px-4 py-2">
              HTML
            </span>

            <span className="rounded-full bg-gray-800 px-4 py-2">
              CSS
            </span>

            <span className="rounded-full bg-gray-800 px-4 py-2">
              JavaScript
            </span>

            <span className="rounded-full bg-gray-800 px-4 py-2">
              React
            </span>

            <span className="rounded-full bg-gray-800 px-4 py-2">
              Next.js
            </span>

            <span className="rounded-full bg-gray-800 px-4 py-2">
              Tableau
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}