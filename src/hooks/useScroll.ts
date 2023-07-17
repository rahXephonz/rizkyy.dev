import {useEffect, useState} from "react";

export const useScroll = (): boolean => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const changePositionY = () => {
    if (window.scrollY >= 80) return setIsScrolling(true);

    return setIsScrolling(false);
  };

  useEffect(() => {
    changePositionY();
    window.addEventListener("scroll", changePositionY);

    return () => {
      window.removeEventListener("scroll", changePositionY);
    };
  }, []);

  return isScrolling;
};
