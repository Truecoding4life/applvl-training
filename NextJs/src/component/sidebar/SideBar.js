import Link from 'next/link'; // Import the Link component

import Stack from 'react-bootstrap/Stack';
import logo from '../../../../assets/images/AppLevel_Logo_Small.png'
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router'; 
import { useEffect, useState } from 'react'; // Import useState and useEffect

import './style.css'
function SideBar() {
  return (
    <div>
      <div className="text-center m-4">
        <Image 
          src={logo} 
          alt="Logo"
        />
      </div>
      <Stack className='' gap={3}>
        <div className="p-2 hover-item">
          <Link href="/dashboard">
            <Button variant="none" className="p-2 sidebar-text">Dashboard</Button>
          </Link>
        </div>
        <div className="p-2 hover-item">
          <Link href="/engagement">
            <Button variant="none" className="p-2 sidebar-text">Engagement</Button>
          </Link>
        </div>
        <div className="p-2 hover-item">
          <Link href="/monetization">
            <Button variant="none" className="p-2 sidebar-text">Monetization</Button>
          </Link>
        </div>
        <div className="p-2 hover-item">
          <Link href="/training">
            <Button variant="none" className="p-2 sidebar-text">Training</Button>
          </Link>
        </div>
      </Stack>
    </div>
  );
}
export default SideBar