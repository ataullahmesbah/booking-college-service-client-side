import  { useState, useEffect } from "react";
import Container from "../Shared/Container";

const GallerySection = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    
    fetch("/gallery.json")
      .then((response) => response.json())
      .then((data) => setGalleryData(data));
  }, []);

  return (
    <Container>
      <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 mt-5">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-blue-950">
        Welcome to Scholars For Search <br />Gallery
      </h2>
      <p className="text-lg md:text-xl lg:text-xl text-center text-gray-600">
        Explore some inspiring college graduates group pictures from different
        colleges. Witness the joy and pride of these <br /> accomplished students as
        they embark on their new journey after years of hard work and dedication.
        Each image <br /> showcases a unique story of triumph and success, representing
        the dreams and aspirations of our talented <br /> scholars. We believe that
        education is the key to unlocking a brighter future, and we are honored <br />
        to be  a part of their academic journey. Let these pictures inspire you
        as <br /> you pursue your own path towards excellence and success.
      </p>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10">
        {galleryData.map((item, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <img
              src={item.image}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
    </Container>
  );
};

export default GallerySection;
