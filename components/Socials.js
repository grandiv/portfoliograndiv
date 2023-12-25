// links
import Link from 'next/link'; 

// icons
import {
  RiGithubLine, 
  RiInstagramLine, 
  RiLinkedinLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/muhammad-grandiv-lava-putra-364b0324b/'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://www.github.com/grandiv'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://www.instagram.com/grandiv7'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
