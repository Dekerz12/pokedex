import { NavLink, Outlet } from 'react-router-dom';
export default function Navigation({ onClick }) {
  return (
    <div className='font-body '>
      <h1 className='text-center font-bold text-5xl py-12'>Pokedex</h1>
      <h2 className='text-center font-bold text-xl text-blue-500'>
        Select Generation:
      </h2>
      <div className='text-center'>
        <nav className='font-bold inline-flex flex-wrap justify-center shadow-md mx-4 md:my-6 my-12  '>
          <NavigationLink path={'/gen-i'}>I</NavigationLink>
          <NavigationLink path={'/gen-ii'}>II</NavigationLink>
          <NavigationLink path={'/gen-iii'}>III</NavigationLink>
          <NavigationLink path={'/gen-iv'}>IV</NavigationLink>
          <NavigationLink path={'/gen-v'}>V</NavigationLink>
          <NavigationLink path={'/gen-vi'}>VI</NavigationLink>
          <NavigationLink path={'/gen-vii'}>VII</NavigationLink>
          <NavigationLink path={'/gen-viii'}>VIII</NavigationLink>
          <NavigationLink path={'/gen-ix'}>IX</NavigationLink>
        </nav>
      </div>

      <Outlet />
    </div>
  );
}

function NavigationLink({ path, children, onClick }) {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending
          ? 'px-5 pt-4'
          : isActive
          ? 'px-5 pt-4 border-b-2 border-blue-500'
          : 'hover:bg-blue-500 hover:bg-opacity-40 px-5 pt-4 md:text-lg'
      }
      to={path}
      onClick={onClick}>
      {children}
    </NavLink>
  );
}
