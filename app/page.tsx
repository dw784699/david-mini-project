export default function Home() {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">
        Dawei(David) Mini Project
      </h1>

      <p className="text-xl text-gray-300">
        I am learning Fullstack Development and building web applications using React and Next.js.
My background includes supply chain, business, and technology exploration.
      </p >

      <div className="mt-8 flex gap-4">
        <a
          href="https://github.com/dw784699"
          target="_blank"
          className="rounded-full bg-white px-5 py-2 text-black font-semibold hover:bg-gray-300"
        >
          GitHub
        </a >

        <a
          href="mailto:dw784699@gmail.com"
          className="rounded-full border border-white px-5 py-2 text-white hover:bg-white hover:text-black"
        >
          Contact Me
        </a >
      </div>
    </main>
  );
}