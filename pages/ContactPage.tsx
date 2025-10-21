import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

  return (
    <div className="py-12 max-w-xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-white">Hubungi Kami</h1>
            <p className="text-lg text-slate-400 mt-2">Punya pertanyaan atau masukan? Kami siap mendengar.</p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            {submitted ? (
                <div className="text-center p-8 bg-green-900/50 border border-green-700 rounded-lg">
                    <h3 className="text-2xl font-bold text-green-300">Terima Kasih!</h3>
                    <p className="text-green-400 mt-2">Pesan Anda telah kami terima (simulasi).</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300">Nama</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="mt-1 block w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="mt-1 block w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300">Pesan</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            required
                            className="mt-1 block w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-slate-900 transition-colors"
                        >
                            Kirim Pesan
                        </button>
                    </div>
                </form>
            )}
        </div>
    </div>
  );
};

export default ContactPage;