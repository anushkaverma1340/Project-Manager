import logo from './assets/logo.png';

export default function Header() {
  return (
    <nav className='navbar bg-dark mb-4 p-0'>
      <div className='container'>
        <a href="/" className='navbar-brand'>
          <div className='d-flex'>
            <img src={logo} alt="logo" className='mr-2' />
            <div className='heading'>Project Manager</div>
          </div>
        </a>
      </div>
    </nav>
  )
}
