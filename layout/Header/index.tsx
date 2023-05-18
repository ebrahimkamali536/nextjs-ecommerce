import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import RightSectionIcons from "./RightSectionIcons";
import SearchForm from "./SearchForm";
const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto xl:max-w-screen-xl flex items-center justify-between gap-x-4 p-4">
        {/* mobile menu bar */}
        <div className="lg:hidden">
          <div>
            <Bars3BottomLeftIcon className="w-8 h-8" />
          </div>
        </div>
        <div className="">
            <Image src="/assets/images/logo.png" alt="logo" width={40} height={40} />
        </div>
        <SearchForm />
        <RightSectionIcons />
      </div>
    </header>
  );
};

export default Header;
