import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-6">
      
      <div className="max-w-4xl w-full">
        <div className="bg-slate-200 backdrop-blur-xl border border-black/10 rounded-3xl shadow-2xl p-10 md:p-16 text-center">

          {/* Logo / Badge */}
          <div className="mb-6">
            <span className="px-4 py-2 rounded-full bg-indigo-700 text-indigo-100 text-sm font-medium border border-indigo-400/30">
              Your Personal Knowledge Vault
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-black">
              Second Brain
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-black text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Capture ideas, store notes, keep a personal diary, and organize
            everything important in one secure place.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button
              onClick={() => navigate("/login")}
              className="px-8 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-all duration-300 shadow-lg hover:scale-105"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="px-8 py-4 rounded-2xl bg-green-500 border border-slate-400 text-white hover:bg-green-500 hover:text-slate-900 font-semibold transition-all duration-300 hover:scale-105"
            >
              Register
            </button>
          </div>

          {/* Footer note */}
          <p className="mt-10 text-sm text-black">
            Save thoughts. Build systems. Extend your memory.
          </p>

        </div>
      </div>

    </div>
  );
}