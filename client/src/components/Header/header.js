import React, { useEffect } from "react";
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className="jumbotron text-center">
      <div className="container" data-aos="fade-up" data-aos-duration="2000">
        <h1>Search and save the books you love</h1>
        <i class="fas fa-book-open fa-2x"></i>
      </div>
    </div>
  );
}

export default Header;
