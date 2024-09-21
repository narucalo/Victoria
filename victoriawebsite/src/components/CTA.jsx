import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

function Avatar() {
  return (
    <img
      className="avatar"
      src=" "
      alt="Victoria Joseph"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return (
    <Avatar />
  );
}




export default CTA;

