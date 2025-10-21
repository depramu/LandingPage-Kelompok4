import React from 'react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  nim: string;
}

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-slate-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);


const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, nim }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center transform hover:scale-105 hover:border-cyan-500 transition-all duration-300">
        <div className="mb-4">
            <div className="w-24 h-24 rounded-full bg-slate-700 mx-auto flex items-center justify-center">
                 <UserIcon />
            </div>
        </div>
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-cyan-400">{role}</p>
        <p className="text-slate-500 text-sm mt-1">NIM: {nim}</p>
    </div>
  );
};

export default TeamMemberCard;