import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';

const teamMembers = [
  { name: 'Dimas Pramudya', role: 'Project Lead & Backend', nim: '0920240039' },
  { name: 'Dyah Ayu Puspito', role: 'Frontend Developer', nim: '09202400' },
  { name: 'Muhammad Rafi Naufal Hilmy', role: 'UI/UX Designer', nim: '09202400' },
  { name: 'Imelda Zahra', role: 'Database & Testing', nim: '09202400' },
];

const AboutPage: React.FC = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white">Tim Kami</h1>
        <p className="text-lg text-slate-400 mt-2">Orang-orang di balik proyek ini</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map(member => (
          <TeamMemberCard key={member.nim} {...member} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;