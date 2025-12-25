import React from 'react';

const teamMembers = [
  {
    name: 'Yehuda Suprato',
    role: 'Project Leader',
    image: './Gambar/Yehuda.png',
    githubUrl: 'https://github.com/YuutoRaimi',
    social: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-github' viewBox='0 0 16 16'><path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8'/></svg>"
  },
  {
    name: 'Given Morthen',
    role: 'Web Designer',
    image: './Gambar/nigev.jpg',
    githubUrl: 'https://github.com/Araldius',
    social: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-github' viewBox='0 0 16 16'><path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8'/></svg>"
  },
  {
    name: 'Dave William',
    role: 'Front-end Developer',
    image: './Gambar/Dave.png',
    githubUrl: 'https://github.com/Depiliem',
    social: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-github' viewBox='0 0 16 16'><path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8'/></svg>"
  },
  {
    name: 'Rifqi Aldino Amin',
    role: 'Front-end Developer',
    image: './Gambar/akumanis.jpg',
    githubUrl: 'https://github.com/M1goNu',
    social: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-github' viewBox='0 0 16 16'><path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8'/></svg>"
  }
];

function AboutUs({ theme }) {
  const titleColor = theme === 'light' ? 'text-customRed' : 'text-customWhite';

  return (
    <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-8 lg:px-12 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#151515]' : 'bg-[#F1F1F1]'}`}>
      
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${titleColor}`}>
            Our Team
          </h1>
          <div className={`h-1 w-20 mx-auto rounded-full mb-4 ${theme === 'light' ? 'bg-customRed' : 'bg-costumBlue'}`}></div>
          <p className={`text-lg font-medium ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>Grup PTI</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="group">
              <div className={`h-full flex flex-col items-center rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl ${theme === 'light' ? 'bg-customRed text-customWhite' : 'bg-costumBlue text-customWhite'}`}>
                
                {/* Container Gambar dengan rasio tetap */}
                <div className="w-full aspect-square overflow-hidden bg-white/10">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>

                <div className="p-6 text-center flex-grow flex flex-col justify-center">
                  <h2 className="text-xl font-bold mb-1 leading-tight">{member.name}</h2>
                  <p className="text-sm opacity-80 mb-4 italic">{member.role}</p>
                  
                  <div className="mt-auto">
                    <a 
                      href={member.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                      dangerouslySetInnerHTML={{ __html: member.social }}
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;