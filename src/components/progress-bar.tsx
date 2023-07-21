import React, {Fragment, useEffect, useState} from "react";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const {scrollY} = window;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    const progress = (scrollY / (fullHeight - windowHeight)) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className="w-full h-[2px] bg-gray-300 top-0 fixed z-[2]">
        <div
          className="h-full bg-[#3AA6B9]"
          style={{width: `${scrollProgress}%`}}
        />
      </div>
    </Fragment>
  );
};

export default ProgressBar;
