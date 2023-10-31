const CustomMenuToggle = ({menuOpen, setMenuOpen}) => {

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <button
        onClick={handleClick}
        className="group flex items-center justify-center h-full rounded-small tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2"
        aria-label={menuOpen ? "Open menu" : "Close menu"}
        aria-pressed={menuOpen ? "true" : "false"}
        data-open={menuOpen ? "true" : "false"}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#266DD3"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
        >
            <line x1="4" x2="19" y1="7" y2="7" />
            <line x1="4" x2="19" y1="15" y2="15" />
        </svg> 
    </button>
  );
};

export default CustomMenuToggle;