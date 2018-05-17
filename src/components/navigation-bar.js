import React from 'react';

import './navigation-bar.css';

// The NavigationBar component goes here.  It should be the default export.
export default function NavigationBar(props){
   const links = props.links.map((link, index) =>
      <li>
         <a key={index} href={link.href}>
            {link.text}
         </a>
      </li>
   );
   return(

     <nav className="navigation-bar navigation-bar-nav">
       <h1>
         {props.title}
       </h1>
         {links}
     </nav>
   );
};

NavigationBar.defaultProps={
  title: '',
  links: ''
};
