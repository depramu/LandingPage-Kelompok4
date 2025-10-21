import React from 'react';

const TechIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center gap-2 bg-slate-700 px-3 py-1 rounded-full text-sm text-cyan-300">
        {children}
    </div>
);

const ProjectPage: React.FC = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-white">Proyek Kami: Landing Page</h1>
            <p className="text-lg text-slate-400 mt-2">Kelompok 4 PRG</p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 space-y-8">
            <section>
                <h2 className="text-2xl font-bold text-white mb-3 border-b-2 border-cyan-500 pb-2">Deskripsi Proyek</h2>
                <p className="text-slate-300 leading-relaxed">
                    Proyek ini adalah sebuah aplikasi web yang dirancang untuk memenuhi tugas mata kuliah Pemrograman Berbasis Platform. Kami bertujuan untuk memberikan platform yang memperlihatkan visual minimalis bagi pengguna.
                </p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold text-white mb-3 border-b-2 border-cyan-500 pb-2">Fitur Utama</h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-300">
                    <li><strong className="text-white">Fitur A:</strong> Deskripsi singkat tentang apa yang dilakukan fitur ini dan manfaatnya bagi pengguna.</li>
                    <li><strong className="text-white">Fitur B:</strong> Deskripsi singkat tentang apa yang dilakukan fitur ini dan manfaatnya bagi pengguna.</li>
                    <li><strong className="text-white">Fitur C:</strong> Deskripsi singkat tentang apa yang dilakukan fitur ini dan manfaatnya bagi pengguna.</li>
                    <li><strong className="text-white">Fitur D:</strong> Deskripsi singkat tentang apa yang dilakukan fitur ini dan manfaatnya bagi pengguna.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-3 border-b-2 border-cyan-500 pb-2">Teknologi yang Digunakan</h2>
                <div className="flex flex-wrap gap-3">
                    <TechIcon>React</TechIcon>
                    <TechIcon>TypeScript</TechIcon>
                    <TechIcon>Tailwind CSS</TechIcon>
                    <TechIcon>Node.js</TechIcon>
                    <TechIcon>Express</TechIcon>
                    <TechIcon>PostgreSQL</TechIcon>
                </div>
            </section>
        </div>
    </div>
  );
};

export default ProjectPage;