import Container from '../Shared/Container';

const ResearchPapers = () => {
  const researchPapers = [
    {
      title: 'Flinders University Research Projects',
      author: 'John Doe',
      publicationDate: '2022-07-01',
      link: 'https://www.flinders.edu.au/flinders-nt/our-research/research-projects'
    },
    {
      title: 'Hokkaido University Research Student',
      author: 'Jane Smith',
      publicationDate: '2020-05-01',
      link: 'https://www.let.hokudai.ac.jp/en/admission/research-student'
    },
    {
      title: 'Lincoln University Research Paper',
      author: 'Alice Johnson',
      publicationDate: '2023-02-01',
      link: 'https://www.lincoln.edu/langston-hughes-memorial-library/research-paper-basics.html'
    },

  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <Container>
      <div className="p-4 md:p-8 lg:p-10">
        <h2 className="text-3xl text-gray-600 font-semibold text-center mb-6">Explore Our Recommended Research Papers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchPapers.map((paper, index) => (
            <div key={index} className="border border-gray-300 rounded-md w-full p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                <p className="text-gray-600 mb-2">Author: {paper.author}</p>
                <p className="text-gray-600 mb-2">Publication Date: {formatDate(paper.publicationDate)}</p>
              </div>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 mt-4 text-center"
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
