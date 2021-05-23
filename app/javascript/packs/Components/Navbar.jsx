import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import imparatoLogo from "../../../assets/images/imparato.png";
import {
  HomeIcon,
  MapIcon,
  MenuIcon,
  AdjustmentsIcon,
  XIcon,
  AcademicCapIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChartPieIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "Choisir une école", href: "/", icon: HomeIcon, current: false },
  { name: `Dashboard`, href: "/ecole", icon: ChartPieIcon, current: false },
  { name: "Cours", href: "/cours", icon: AcademicCapIcon, current: false },
  { name: "Adresses", href: "/adresses", icon: MapIcon, current: false },
  {
    name: "Professeurs",
    href: "/professeurs",
    icon: UserGroupIcon,
    current: false,
  },
  { name: "Profil", href: "/profil", icon: AdjustmentsIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentSchool = useSelector((state) => state.currentSchoolReducer);
  if (currentSchool && currentSchool.name) {
    navigation[0].name = `${currentSchool.name.slice(0, 15)}...`;
  }
  const changeSchool = () => {
    window.localStorage.removeItem("school");
    window.location = "/";
  };
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 lg:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-green-600 focus:outline-none">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src={imparatoLogo}
                    alt="Workflow"
                  />
                </div>
                <nav aria-label="Sidebar" className="mt-5">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) =>
                      item === navigation[0] ? (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          // activeClassName="bg-green-300 text-white"
                          className=" mb-5 w-100 group flex align-center hover:no-underline hover:text-white items-center px-0.5 py-2 text-sm font-medium rounded-md"
                        >
                          <item.icon
                            className=" mr-3 h-6 w-6"
                            aria-hidden="true"
                          />
                          <p className="text-white-400 group-hover:text-white-500">
                            {item.name}
                          </p>
                          {currentSchool.name && (
                            <span
                              onClick={changeSchool}
                              className="inline-flex items-center hover:bg-green-800 hover:text-black-500 p-1 ml-2  rounded-full text-sm font-medium bg-green-300 text-white-300"
                            >
                              changer
                            </span>
                          )}
                        </NavLink>
                      ) : (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          activeClassName="bg-green-300 text-white"
                          className={classNames(
                            navigation[0] === item ? " mb-5" : "mb-0",
                            "group flex hover:no-underline hover:text-white items-center px-2 py-2 text-sm font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className="text-white-400 group-hover:text-white-500 mr-3 h-6 w-6"
                            aria-hidden="true"
                          />
                          {item.name}
                        </NavLink>
                      )
                    )}
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 ">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-green-600">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src={imparatoLogo}
                  alt="imparato Logo"
                />
              </div>
              <nav className="mt-5 flex-1" aria-label="Sidebar">
                <div className="px-2 space-y-1">
                  {navigation.map((item) =>
                    // Premier item du menu
                    item === navigation[0] ? (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        // activeClassName="bg-green-300 text-white"
                        className=" mb-5 w-100 group flex align-center hover:no-underline hover:text-white items-center px-0.5 py-2 text-sm font-medium rounded-md"
                      >
                        <item.icon
                          className=" mr-3 h-6 w-6"
                          aria-hidden="true"
                        />
                        <p className="text-white-400 group-hover:text-white-500">
                          {item.name}
                        </p>
                        {currentSchool.name && (
                          <span
                            onClick={changeSchool}
                            className="inline-flex items-center hover:bg-green-800 hover:text-black-500 p-1 ml-2  rounded-full text-sm font-medium bg-green-300 text-white-300"
                          >
                            changer
                          </span>
                        )}
                      </NavLink>
                    ) : (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        activeClassName="bg-green-300 text-white"
                        className={classNames(
                          navigation[0] === item ? " mb-5" : "mb-0",
                          "group flex hover:no-underline hover:text-white items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className="text-white-400 group-hover:text-white-500 mr-3 h-6 w-6"
                          aria-hidden="true"
                        />
                        {item.name}
                      </NavLink>
                    )
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div className="lg:hidden">
          <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
            <div>
              <img className="h-8 w-auto" src={imparatoLogo} alt="Workflow" />
            </div>
            <div>
              <button
                type="button"
                className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
