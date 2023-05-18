import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary-300 p-6">
      <div className="flex flex-col items-center justify-center w-full border-b border-secondary-100 pb-8 mb-8 lg:flex-row lg:justify-between">
        <div className="flex items-center gap-x-2.5 mb-4">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={40}
            height={40}
          />
          <span>Shahreboo</span>
        </div>
        <div className="flex flex-col gap-y-1 justify-center items-center mb-4 lg:items-start">
          <h4 className="font-bold">Subscribe to our Newsletter</h4>
          <p className="text-xs">Get all the latest information on Events, Sales and Offers</p>
        </div>
        <div className="flex items-center gap-x-2.5 w-full lg:w-auto">
          <input type="text" placeholder="Email address here..." className="bg-secondary-100 flex-1 lg:flex-initial px-4 py-2 rounded-md" />
          <button className="flex items-center gap-x-1 px-4 py-2 bg-primary-900 text-white rounded-md">
            <span>Subscribe</span>
            <ArrowLongRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-6 lg:flex-row lg:justify-between">
        <div>
            <h4 className="text-white text-lg mb-2.5 font-bold">Contact Info</h4>
            <ul className="flex flex-col gap-y-1.5">
                <li>
                    <span className="font-bold">Phone</span>: +98 917 005 7321
                </li>
                <li>
                    <span className="font-bold">Email</span>: ebrahimkamali536@gmail.com
                </li>
                <li>
                    <span className="font-bold">Address</span>: Qeshm island
                </li>
            </ul>
        </div>
        <div>
            <h4 className="text-white text-lg mb-2.5 font-bold">My Account</h4>
            <ul className="flex flex-col gap-y-1.5">
                <li>
                    View Cart
                </li>
                <li>
                    Sign in
                </li>
                <li>
                    My Wishlist
                </li>
                <li>
                    Privacy Policy
                </li>
            </ul>
        </div>
        <div>
            <h4 className="text-white text-lg mb-2.5 font-bold">About Us</h4>
            <ul className="flex flex-col gap-y-1.5">
                <li>
                    About Us
                </li>
                <li>
                    Returns
                </li>
                <li>
                    Custom Service
                </li>
                <li>
                    Terms & Condition
                </li>
            </ul>
        </div>
        <div>
            <h4 className="text-white text-lg mb-2.5 font-bold">Customer Service</h4>
            <ul className="flex flex-col gap-y-1.5">
                <li>
                    Payment Methods
                </li>
                <li>
                    Money-back guarantee
                </li>
                <li>
                    Products Returns
                </li>
                <li>
                    Support Center
                </li>
                <li>
                    Shipping
                </li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
