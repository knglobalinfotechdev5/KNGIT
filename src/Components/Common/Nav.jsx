"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/Nav_menu";
import { cn } from "../lib/utils";
import { KNGIT, Logo } from "../../Assets/data";
import { Link } from 'react-router-dom';


export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-between">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center gap-[100px]">
          <div className=" flex items-center">
            <img className="w-[90px] h-[50px] rounded-md" src={Logo} alt="logo" />
            <img className="w-[140px]" src={KNGIT} alt="" />
          </div>
          <div className="flex gap-4">
            <MenuItem setActive={setActive} active={active} item="Home">
              <a href="/" className="flex flex-col space-y-4 text-sm">
                <HoveredLink>Who We Are</HoveredLink>
                <HoveredLink>Our Products</HoveredLink>
                <HoveredLink>Contact Us</HoveredLink>
              </a>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="KN Gas Application"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="KN Gas Distribution System streamlines gas supply chain management efficiently."
                />
                <ProductItem
                  title="KN Store Management System"
                  href="https://tailwindmasterkit.com"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="KN Store Management System streamlines retail operations, managing inventory and sales."
                />
                <ProductItem
                  title="KN Transport Management System"
                  href="https://gomoonbeam.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="KN Transport Management System streamlines logistics for efficient vehicle operations."
                />
                <ProductItem
                  title="Custom Websites"
                  href="https://userogue.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="About Us">
              <div className="flex flex-col space-y-4 text-sm">
                <Link to="/about">
                  <HoveredLink>Company Profile</HoveredLink>
                </Link>
                <Link to="/our-team">
                  <HoveredLink>Our Team</HoveredLink>
                </Link>
                <Link to="/terms-and-conditions">
                  <HoveredLink>Terms & Conditions</HoveredLink>
                </Link>
                <Link to="/privacy-policy">
                  <HoveredLink>Privacy Policy</HoveredLink>
                </Link>
                <Link to="/refund-policy">
                  <HoveredLink>Refund Policy</HoveredLink>
                </Link>
              </div>
            </MenuItem>

          </div>
        </div>
      </Menu>
    </div>
  );
}
