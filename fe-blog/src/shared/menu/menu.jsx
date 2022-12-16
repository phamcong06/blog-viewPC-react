import { React, useState, createRef, useEffect } from "react";
import { createPopper } from "@popperjs/core";
function Menu() {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const [widthWindow, setWidthWindow] = useState(0);
  const [isMenu, setIsMenu] = useState(false);
  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      setWidthWindow(window.innerWidth);
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();
    if (widthWindow >= 950) {
      setIsMenu(false);
    }
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [widthWindow]);

 
  return (
    <div className="menu">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:   lg:justify-start">
            <a
              className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              DEV TIME
            </a>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setIsMenu(!isMenu)}
            >
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div
            className={`${
              isMenu
                ? "menu_rp w-64 h-64 bg-menu"
                : "hidden lg:flex flex-grow items-center"
            }`}
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                ></a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span
                    className="ml-2"
                    ref={btnDropdownRef}
                    onClick={() => {
                      dropdownPopoverShow
                        ? closeDropdownPopover()
                        : openDropdownPopover();
                    }}
                  >
                    Languges
                  </span>
                </a>
              </li>
            </ul>
            <div className="relative flex w-full sm:hidden md:w-5/12 block px-4 flex-wrap items-stretch lg:ml-auto">
              <div className="flex">
                <span className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-teal-600 rounded-full text-sm bg-teal-100 items-center rounded-r-none pl-2 py-1 text-teal-800 border-r-0 placeholder-teal-300">
                  <i className="fas fa-search"></i>
                </span>
              </div>
              <input
                type="text"
                className="px-2 py-1 h-8 border border-solid  border-teal-600 rounded-full text-sm leading-snug text-teal-700 bg-teal-100 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-teal-300"
                placeholder="Search teal"
              />
            </div>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white"
              }
              style={{ minWidth: "12rem" }}
            >
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                }
                onClick={(e) => e.preventDefault()}
              >
                Action
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                }
                onClick={(e) => e.preventDefault()}
              >
                Another action
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  " text-slate-700"
                }
                onClick={(e) => e.preventDefault()}
              >
                Something else here
              </a>
              <div className="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25" />
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                }
                onClick={(e) => e.preventDefault()}
              >
                Seprated link
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Menu;
