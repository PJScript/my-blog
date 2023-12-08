import { Button, Collapse, IconButton, Navbar, Typography } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { IPageListType } from '../../routes';

const StickyNavbar = ({ pages }: { pages: IPageListType[] }): JSX.Element => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 960) {
        setOpenNav(false);
      }
      // 여기에 resize 이벤트에 대한 로직을 작성합니다.
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {pages.map((item: IPageListType): JSX.Element | null => {
        if (item.path === '/login' || item.path === '/signup') return null;
        return (
          <Link to={item.path}>
            <Typography variant="small" color="blue-gray" className="p-1 font-normal">
              {item.label}
            </Typography>
          </Link>
        );
      })}
    </ul>
  );

  return (
    <div className="flex max-h-[768px] justify-center overflow-auto border-b-2 px-4 py-2 lg:px-8 lg:py-4 ">
      <Navbar className="sticky top-0 z-10 h-max max-w-screen-xl rounded-none px-0  py-0 shadow-none lg:px-0 lg:py-0">
        <div className="flex items-center justify-between text-blue-gray-900 ">
          <Link to="/">
            <Typography className="mr-4 cursor-pointer py-1.5 font-medium">Title</Typography>
          </Link>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Link to="/login">
                <Button variant="text" size="sm" className="hidden lg:inline-block">
                  <span>Log In</span>
                </Button>
              </Link>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={(): void => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default StickyNavbar;
