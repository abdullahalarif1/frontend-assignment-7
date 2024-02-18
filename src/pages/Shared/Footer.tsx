import { Facebook,Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import img from '../../assets/large-removebg-preview.png'

const Footer = () => {
  return (
    <footer className=" bg-black text-white mt-20 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between md:px-5">
          <div className="flex flex-col ">
            <img className="w-52" src={img} alt="" />
            <Link to="/" className="text-sm font-semibold mb-2">
              Home
            </Link>
            <Link to="/winter-clothes" className="text-sm font-semibold mb-4">
              All Winter Clothes
            </Link>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold italic-regular text-primary">
              Stay Connected
            </h4>
            <p className="text-sm mt-2">
              Follow us on social media for updates and announcements.
            </p>
            <div className="flex mt-4">
              <a href="#" className="mr-4">
                <Facebook className="text-white text-lg hover:text-gray-400" />
              </a>
              <a href="#" className="mr-4">
                <Twitter className="text-white text-lg hover:text-gray-400" />
              </a>
              <a href="#">
                <Instagram className="text-white text-lg hover:text-gray-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 italic-regular text-primary">
              Contact Us
            </h4>
            <p className="text-sm">Email: info@winterclothesdistribution.org</p>
            <p className="text-sm mt-2">Phone: 123-456-7890</p>
          </div>
        </div>
        <hr className="border-gray-700 mt-8" />
        <p className="text-sm text-center mt-4">
          &copy; 2024 WinterClothesDistribution.org. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
