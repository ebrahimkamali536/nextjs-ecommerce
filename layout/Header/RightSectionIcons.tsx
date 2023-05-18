import {
  HeartIcon,
  PhoneIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const RightSectionIcons = () => {
  return (
    <div className="flex items-center gap-x-2.5 relative">
      <div className="hidden md:flex items-center gap-x-2">
        <PhoneIcon className="w-7 h-7" />
        <span className="hidden xl:block">+98 917005321</span>
      </div>
      <div className="hidden xl:block border-l border-black h-10" />
      <div className="hidden md:flex items-center gap-x-4">
        <UserIcon className="w-7 h-7" />
        <HeartIcon className="hidden xl:block w-7 h-7" />
      </div>
      <div className="hidden xl:block border-l border-black h-10" />
      <div className="flex items-center gap-x-2">
        <div className="hidden xl:flex flex-col gap-y-1">
          <span>Shopping Cart</span>
          <span>$0.00</span>
        </div>
        <div className="relative">
          <ShoppingBagIcon className="w-7 h-7" />
          <span className="absolute w-5 h-5 rounded-full bg-primary-900 text-white text-xs flex items-center justify-center -top-1.5 -right-1.5">0</span>
        </div>
      </div>
    </div>
  );
};

export default RightSectionIcons;
