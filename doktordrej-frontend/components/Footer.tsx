import React from 'react'
import Link from 'next/link'
import {FaInstagram,FaPinterest} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {GrUserAdmin} from 'react-icons/gr'
function Footer() {
    const production = process.env.NODE_ENV === "production";
    const baseUrl = production
      ? "https://www.doktordrej.herokuapp.com"
      : "http://localhost:3001";
  
    return (
        <div className='footer'>
            <ul>
                <li>
                    <Link href="https://instagram.com/doktor.drej" passHref>
                        <div>
                            <FaInstagram/> 
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="https://pinterest.com/doktor.drej" passHref>
                        <div>
                            <FaPinterest/> 
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="mailto:natalia.ballardini@gmail.com" passHref>
                        <div>
                            <HiOutlineMail/> 
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href={baseUrl +"/admin"} passHref>
                        <div>
                            <GrUserAdmin/> 
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer
