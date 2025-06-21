import Link from 'next/link';
import data from '@/config/data.json';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const { footerDetails, siteDetails } = data;

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold">{siteDetails.siteName}</h3>
        <p className="mt-2 max-w-md mx-auto text-gray-400">{footerDetails.subheading}</p>
        <div className="mt-6 flex justify-center gap-6">
          {footerDetails.quickLinks.map((link) => (
            <Link key={link.text} href={link.url}>
              <a className="hover:text-blue-400 transition-colors">{link.text}</a>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-6">
          <a href={footerDetails.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400"><FaTwitter /></a>
          <a href={footerDetails.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400"><FaFacebook /></a>
          <a href={footerDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400"><FaLinkedin /></a>
          <a href={footerDetails.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400"><FaInstagram /></a>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-gray-500">
          <p>&copy; {new Date().getFullYear()} {siteDetails.siteName}. All Rights Reserved.</p>
          <p className="mt-2">Email: {footerDetails.email} | Tel: {footerDetails.telephone}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
