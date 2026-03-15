import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold">
          AI Startup Builder
        </h1>

        <p className="mt-4 text-gray-500 text-lg">
          Turn your startup idea into a live website using AI
        </p>

        <a
          href="/idea"
          className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg"
        >
          Build Your Startup
        </a>
      </main>
    </div>
  );
}