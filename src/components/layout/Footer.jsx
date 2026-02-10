import Logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className='flex-c w-[100%] primary-c justify-between px-14 text-amber-50'>
      <section className='footer-details flex pt-4 pb-8 relative'>
        <div className='flex items-start gap-4'>
          <a href='https://www.humanrightsfirst.org/'>
            <img className='h-10 w-auto shrink-0' src={Logo} alt='HRF logo white' />
          </a>
        </div>
        <div className='text-white/90'>
          <p className='font-semibold'>Human Rights First</p>
          <p className='mt-2'>75 Broad St, 31st Floor</p>
          <p>New York, New York 10004 US</p>
          <p className='mt-6'>For Media Inquiries call 202-370-333</p>
        </div>
      </section>
      <nav className='footer-links flex gap-10 content-center justify-center pb-4'>
        <button className='nav-btn'>About Us</button>
        <button className='nav-btn'>Contact Us</button>
        <button className='nav-btn'>Press</button>
        <button className='nav-btn'>Terms & Privacy</button>
        <button className='nav-btn'>Sign Up</button>
        <button className='nav-btn'>Careers</button>
      </nav>
    </footer>
  );
}
