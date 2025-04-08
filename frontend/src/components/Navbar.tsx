import React from 'react';

interface NavbarProps {
  setIsSection: React.Dispatch<React.SetStateAction<"MainWindow" | "Blogs" | "Find_therapist" >>
}

export default function Navbar({setIsSection }: NavbarProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsSection("Blogs");
  };

  const handleMain = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsSection("MainWindow");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#4A90E2] cursor-pointer"
            onClick={handleMain}>Psych</span>
            <div className="hidden md:flex items-center space-x-8 ml-10">
              <a href="#" className="text-gray-700 hover:text-[#4A90E2]">
                Services
              </a>
              <a
                href="#blogs"
                className="text-gray-700 hover:text-[#4A90E2]"
                onClick={handleClick}
              >
                Blogs
              </a>
              <a href="#" className="text-gray-700 hover:text-[#4A90E2]">
                About
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-700 hover:text-[#4A90E2]">
              Login
            </button>
            <button className="bg-[#4A90E2] text-white px-4 py-2 rounded-lg hover:bg-[#357ABD]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
