import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const useLinks = links.map((link)=>{
    return <a href={`#${link}`} key={link}>{link}</a>
  })
  return (
    <nav>
      {useLinks}
    </nav>
    
  )
    
  
}

export default NavBar;
