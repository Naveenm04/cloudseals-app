import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-green-900 text-white">
      <Navbar />
      <div className="text-center mt-20 px-6">
        <h1 className="text-5xl font-bold">No-Code, Open Source</h1>
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400 mt-4">Cloud Automation</h2>
        <button className="mt-8 bg-neon text-black font-bold px-6 py-3 rounded">Get Started</button>
      </div>
    </div>
  );
}
