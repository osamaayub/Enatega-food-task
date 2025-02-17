import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4'>
        {/* Get to Know */}
        <div>
          <h3 className='text-xl font-bold mb-4'>Get to Know</h3>
          <ul className='space-y-2 text-green-500'>
            <li>
              <a href='#'>Terms & Conditions</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
            <li>
              <a href='#'>Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Let Us Help You */}
        <div>
          <h3 className='text-xl font-bold mb-4'>Let Us Help You</h3>
          <ul className='space-y-2 text-green-500'>
            <li>
              <a href='#'>Vendors</a>
            </li>
            <li>
              <a href='#'>Drivers</a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className='text-xl font-bold mb-4'>Follow Us</h3>
          <div className='flex space-x-4 text-green-500'>
            <i className='pi pi-facebook text-2xl'></i>
            <i className='pi pi-twitter text-2xl'></i>
            <i className='pi pi-linkedin text-2xl'></i>
            <i className='pi pi-instagram text-2xl'></i>
            <i className='pi pi-youtube text-2xl'></i>
          </div>
        </div>

        {/* Partner with Us */}
        <div>
          <h3 className='text-xl font-bold mb-4'>Partner with Us</h3>
          <Button
            label='Become a Vendor'
            className='w-full mb-2 bg-green-500 text-black'
          />
          <Button
            label='Become a Restaurant'
            className='w-full bg-green-500 text-black'
          />
          <div className='mt-4'>
            <h3 className='text-xl font-bold mb-2'>Subscribe</h3>
            <div className='flex'>
              <input
                type='email'
                placeholder='Enter Your Email Address'
                className='p-2 rounded-l-md border-none outline-none text-black w-full'
              />
              <Button
                icon='pi pi-send'
                className='bg-green-500 text-black rounded-r-md'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-8 flex justify-between mx-2 text-center text-green-500'>
        <p>Enatega - © 2025 All Rights Reserved</p>
        <p>
          Powered by : <span className='text-white'>ninjascode</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
