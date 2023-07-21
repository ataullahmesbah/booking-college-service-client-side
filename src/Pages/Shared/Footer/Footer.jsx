import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Scholars For Search</h2>
            <p className="mt-4">123 College Street, Cityville, Country</p>
            <p>info@scholarsforsearch.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/admissions">Admissions</a>
              </li>
              <li>
                <a href="/academics">Academics</a>
              </li>
              <li>
                <a href="/student-life">Student Life</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <ul className="flex mt-4">
              <li className="mr-4">
                <a href="#">
                  <FaFacebookF/>
                </a>
              </li>
              <li className="mr-4">
                <a href="#">
                  <FaTwitter/>
                </a>
              </li>
              <li className="mr-4">
                <a href="#">
                  <FaInstagram/>
                </a>
              </li>
              <li className="mr-4">
                <a href="#">
                 <FaLinkedinIn/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Scholars For Search. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
