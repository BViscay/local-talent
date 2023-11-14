import logo from "../../assets/images/Logo.png";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LiaHandshakeSolid} from "react-icons/lia";
//import {AiOutlineAppstoreAdd} from "react-icons/ai";
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
import {Home, Bell, BarChartHorizontal, PencilLine} from "lucide-react";
import CustomMenuToggle from "./CustomMenuToggle";
import SideMenuUser from "./SideMenuUser";
import SideMenu from "./SideMenu";
import RedPointNotification from "../Notification/RedPointNotification";
import useKey from '../../hooks/useKey';

import {
  getName,
  getLastName,
  getMail,
  getImage,
  getRol,
} from "../../redux/sliceLogin";
import useLogin from "../../hooks/useLogin";


const NavBar = () => {
  const navigate = useNavigate();
  const name = useSelector(getName);
  const lastName = useSelector(getLastName);
  const mail = useSelector(getMail);
  const image = useSelector(getImage);
  const rol = useSelector(getRol);
  const {handleLogout} = useLogin();
  const editProfile = () => {
    navigate("/editProfile");
    setMenuOpen(!menuOpen);
  };
  const isAdmin = rol === "admin";
  
  const [menuOpen, setMenuOpen] = useKey('menuOpen');
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const menuItems = ["Profile", "Dashboard", "Activity", "Log Out"];

  const handleClick = () => {
    const url = `https://wa.me/+5492494343156`;
    window.open(url, "_blank");
  };

  return (
    <Navbar height='5rem' className='bg-primary-100' maxWidth='xl'>
      {/*Navbar Mobile*/}
      <NavbarContent className='md:hidden justify-evenly w-full' justify='none'>
        <NavbarItem className="cursor-pointer" onClick={() => navigate("/home")}>
          <Home size={30} strokeWidth={2.2} color='#266DD3' />
        </NavbarItem>

        <NavbarItem className="cursor-pointer" onClick={() => navigate( isLoggedIn ? "/matchs" : "/login")}>
          <LiaHandshakeSolid className='text-[34px] text-[#266DD3]' />
        </NavbarItem>

        <NavbarItem onClick={() => navigate(isLoggedIn ? "/notifications" : "/login")} className='flex cursor-pointer'>
          <Bell size={30} strokeWidth={2.2} color='#266DD3' />
          <RedPointNotification />
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
        <NavbarBrand className="cursor-pointer" onClick={() => navigate("/home")}>
          <img src={logo} className='w-36'></img>
        </NavbarBrand>
        {isLoggedIn && 
          <>
            <NavbarItem onClick={() => navigate("/create-service")}>
              <p className='text-[#172B4D] font-medium text-lg'>
                Crear Servicio
              </p>
            </NavbarItem>
            <NavbarItem onClick={() => navigate("/matchs")}>
              <p className='text-[#172B4D] font-medium text-lg'>
                Mis Matchs
              </p>
            </NavbarItem>
            <NavbarItem onClick={() => navigate("/notifications")}>
              <p
                className='text-[#172B4D] font-medium text-lg'>
                Notificaciones
              </p>
            </NavbarItem>
          </>
        }
        <Dropdown placement='bottom-end'>
          <DropdownTrigger>
            <Avatar
              showFallback
              isBordered
              as='button'
              className='transition-transform'
              color='primary'
              size='sm'
              src={
                  image
                    ? image
                    : "fallback"
                }
            />
          </DropdownTrigger>
          {isLoggedIn ? (
            <DropdownMenu
              aria-label='Profile Actions'
              variant='flat'
              disabledKeys={["profile"]}
            >
              <DropdownItem key='profile' className='h-14 gap-2' textValue="profile">
                <p className='font-semibold'>{name} {lastName}</p>
                <p className='font-medium text-xs'>{mail}</p>
              </DropdownItem>
              <DropdownItem key='edit' onClick={editProfile} textValue="edit">
                <div className="flex items-center text-xs font-normal">
                  <p>Editar</p>
                  <PencilLine size={16} />
                </div>                 
              </DropdownItem>
              {isAdmin && (
                <DropdownItem key='admin' textValue="profile" onClick={() => {
                    navigate("/dashboard-admin");
                    setMenuOpen(!menuOpen);
                  }}>
                  <div className='w-full flex p-3 items-center gap-2 bg-primary-100 rounded-lg cursor-pointer'>
                    <BarChartHorizontal
                      size={28}
                      strokeWidth={2.2}
                      className='text-primary-600'
                    />
                    <p className='text-[#266DD3] font-extrabold text-lg'>
                      Dashboard Admin
                    </p>
                  </div>
                </DropdownItem>
              )}
              <DropdownItem key='service' onClick={() => {navigate("/create-service");setMenuOpen(!menuOpen)}}>Crear Servicio</DropdownItem>
              <DropdownItem key='my-services' onClick={() => {navigate("/my-services");setMenuOpen(!menuOpen)}}>Mis Servicios</DropdownItem>
              <DropdownItem key='suscriptions' onClick={() => {navigate("/suscriptions");setMenuOpen(!menuOpen)}}>Suscripciones</DropdownItem>
              <DropdownItem key='address' onClick={() => {navigate("/my-location");setMenuOpen(!menuOpen);}}>Dirección</DropdownItem>
              <DropdownItem key='notifications' onClick={() => {navigate("/notifications");setMenuOpen(!menuOpen)}}>Notificaciones</DropdownItem>
              <DropdownItem key='support' onClick={() => {handleClick;setMenuOpen(!menuOpen)}}>Soporte</DropdownItem>
              <DropdownItem key='about-us' onClick={() => {navigate("/about");setMenuOpen(!menuOpen)}}>Quienes Somos?</DropdownItem>
              <DropdownItem key='logout' color='danger' onClick={() => {handleLogout;setMenuOpen(!menuOpen)}}>
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
