import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800/50 border-t border-slate-700 mt-12">
      <div className="max-w-7xl mx-auto py-6 px-4 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Kelompok 4. All Rights Reserved.</p>
        <p className="mt-1">Proyek Pemrograman</p>
      </div>
    </footer>
  );
};

export default Footer;