import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <div className="flex items-center gap-2">
        <span className="text-neon font-bold text-2xl">Cloudseals</span>
      </div>
      <div className="space-x-6 text-white font-medium">
        <a href="#">Solutions</a>
        <a href="#">Services</a>
        <a href="#">Company</a>
        <a href="#">Case Studies</a>
        <Link to="/dashboard" className="px-4 py-2 rounded bg-neon text-black font-bold">Register</Link>
      </div>
    </nav>
  );
}
