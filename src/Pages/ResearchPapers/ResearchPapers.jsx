import React from 'react';
import Container from '../Shared/Container';

const ResearchPapers = () => {
  const researchPapers = [
    {
      title: 'Research Paper 1',
      author: 'John Doe',
      publicationDate: 'July 2023',
      link: 'https://www.example.com/research-paper-1'
    },
    {
      title: 'Research Paper 2',
      author: 'Jane Smith',
      publicationDate: 'August 2023',
      link: 'https://www.example.com/research-paper-2'
    },
    {
      title: 'Research Paper 3',
      author: 'Alice Johnson',
      publicationDate: 'September 2023',
      link: 'https://www.example.com/research-paper-3'
    },
   
  ];

  return (
    <Container>
        <div className="p-4 md:p-8 lg:p-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Recommended Research Papers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {researchPapers.map((paper, index) => (
          <div key={index} className="border border-gray-300 rounded-md w-96 p-4 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
              <p className="text-gray-600 mb-2">Author: {paper.author}</p>
              <p className="text-gray-600 mb-2">Publication Date: {paper.publicationDate}</p>
            </div>
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 mt-4"
            >
              Read Paper
            </a>
          </div>
        ))}
      </div>
    </div>
    </Container>
  );
};

export default ResearchPapers;
