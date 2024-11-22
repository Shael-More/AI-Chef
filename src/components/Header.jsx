import logo from '../assets/logo-1.png';

export default function Header() {
  return (
    <div className='flex items-center justify-center gap-2 shadow-md py-2'>
      <img src={logo} alt='logo' className='w-20 mr-2'/>
      <h1 className='text-3xl font-medium font-montserrat'>Chef Claude</h1>
    </div>
  );
}
