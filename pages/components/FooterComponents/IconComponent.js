import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const IconComponent = (props) => {
    return(
              <div className="bg-blue-900 p-10 p-4 grid place-items-center">
            <Link legacyBehavior href={props.link}  >
                <a className="w-90">
                <FontAwesomeIcon
        icon={props.icon1}
        style={{ fontSize: 20, color: "purple" }}
      />
                </a>
            </Link>
            </div>
        
    );
}

export default IconComponent;