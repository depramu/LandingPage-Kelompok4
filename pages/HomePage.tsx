import React from 'react';
import { Page } from '../App';

interface HomePageProps {
    setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="text-center py-16 md:py-32">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Website simpel oleh <span className="text-cyan-400">Kelompok 4</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-8">
            Membangun solusi perangkat lunak yang modern dan efisien untuk mengatasi tantangan masa kini.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
                onClick={() => setCurrentPage('project')}
                className="px-8 py-3 font-semibold text-white bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors duration-200"
            >
                Lihat Proyek Kami
            </button>
            <button
                onClick={() => setCurrentPage('about')}
                className="px-8 py-3 font-semibold text-slate-200 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors duration-200"
            >
                Tentang Kami
            </button>
        </div>
    </div>
  );
};

export default HomePage;