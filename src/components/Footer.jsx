import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

/**
 * Footer Component
 * 
 * This functional component renders the footer of the website. 
 * It includes copyright information and links to social media profiles.
 * 
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' style={{ border: "none", marginBottom: "1rem" }} /> {/* Remove border */}

      <div className='footer-container' style={{ backgroundColor: "transparent", boxShadow: "none", padding: "0" }}>
        <p>
          © 2024 <strong>Victoria </strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
