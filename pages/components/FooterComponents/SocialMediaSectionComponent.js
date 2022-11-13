import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';
import {
    faHomeAlt,
    faPerson,
    faAddressBook,
    faPhone,
    faMailBulk
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IconComponent from './IconComponent';  
const SocialMediaSectionCompnent = () => {

    return(
        <div className="grid grid-cols-5 gap-4">
        <IconComponent link="#" icon1 ={faHomeAlt} />
        <IconComponent link="/about" icon1 ={faPerson} />
        <IconComponent link="#" icon1 ={faAddressBook} />
        <IconComponent link="#" icon1 ={faPhone} />
        <IconComponent link="#" icon1 ={faMailBulk} />
            </div>
        
    );
}

export default SocialMediaSectionCompnent ;