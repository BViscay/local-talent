import {useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LiaHandshakeSolid} from "react-icons/lia";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {Home, Bell} from "lucide-react";
import CustomMenuToggle from "./CustomMenuToggle";
import SideMenuUser from "./SideMenuUser";
import SideMenu from "./SideMenu";

const NavBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const menuItems = ["Profile", "Dashboard", "Activity", "Log Out"];

  return (
    <Navbar height='5rem' className='bg-white' maxWidth='xl'>
      {/*Navbar Mobile*/}
      <NavbarContent className='md:hidden justify-evenly w-full' justify='none'>
        <NavbarItem onClick={() => navigate("/home")}>
          <Home size={30} strokeWidth={2.2} color='#266DD3' />
        </NavbarItem>

        <NavbarItem onClick={() => navigate("/create-service")}>
          <AiOutlineAppstoreAdd className='text-[34px] text-[#266DD3]' />
        </NavbarItem>

        <NavbarItem onClick={() => navigate("/matchs")}>
          <LiaHandshakeSolid className='text-[34px] text-[#266DD3]' />
        </NavbarItem>

        <NavbarItem onClick={() => navigate("/notifications")}>
          <Bell size={30} strokeWidth={2.2} color='#266DD3' />
        </NavbarItem>

        <CustomMenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {menuOpen && isLoggedIn ? (
          <SideMenuUser menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        ) : null}
        {menuOpen && !isLoggedIn ? (
          <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        ) : null}
      </NavbarContent>

      {/*Navbar Desktop*/}
      <NavbarContent className='hidden md:flex justify-evenly w-full gap-10 lg:gap-20'>
        <NavbarBrand>
          <img src='/src/Logo.png' className='w-36'></img>
        </NavbarBrand>
        <NavbarItem onClick={() => navigate("/home")}>
          <p className='text-[#172B4D] font-medium text-lg' href='/home'>
            Inicio
          </p>
        </NavbarItem>
        <NavbarItem onClick={() => navigate("/create-service")}>
          <p className='text-[#172B4D] font-medium text-lg' href='/services'>
            Crear Servicio
          </p>
        </NavbarItem>
        <NavbarItem onClick={() => navigate("/matchs")}>
          <p className='text-[#172B4D] font-medium text-lg' href='/services'>
            Mis Matchs
          </p>
        </NavbarItem>
        <NavbarItem onClick={() => navigate("/notifications")}>
          <p
            className='text-[#172B4D] font-medium text-lg'
            href='/notifications'
          >
            Notificaciones
          </p>
        </NavbarItem>
        <Dropdown placement='bottom-end'>
          <DropdownTrigger>
            <Avatar
              showFallback
              isBordered
              as='button'
              className='transition-transform'
              color='primary'
              name='Jason Hughes'
              size='sm'
              src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
            />
          </DropdownTrigger>
          {isLoggedIn ? (
            <DropdownMenu
              aria-label='Profile Actions'
              variant='flat'
              disabledKeys={["profile"]}
            >
              <DropdownItem key='profile' className='h-14 gap-2'>
                <p className='font-semibold'>Signed in as</p>
                <p className='font-semibold'>zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key='dashboard'>Dashboard Admin</DropdownItem>
              <DropdownItem key='payments'>Métodos de Pago</DropdownItem>
              <DropdownItem key='address'>Dirección</DropdownItem>
              <DropdownItem key='notifications'>Notificaciones</DropdownItem>
              <DropdownItem key='support'>Soporte</DropdownItem>
              <DropdownItem key='logout' color='danger'>
                Cerrar Sesión
              </DropdownItem>
            </DropdownMenu>
          ) : (
            <DropdownMenu aria-label='Profile Actions' variant='flat'>
              <DropdownItem
                onClick={() => navigate("/login")}
                className='bg-[#266DD3] text-white'
                key='signin'
              >
                Iniciar Sesión
              </DropdownItem>
              <DropdownItem onClick={() => navigate("/sign-up")} key='signup'>
                Registrarse
              </DropdownItem>
            </DropdownMenu>
          )}
        </Dropdown>
      </NavbarContent>

      <NavbarMenu className='bg-[#266DD3] md:hidden'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className='w-full text-white' href='#' size='lg'>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
