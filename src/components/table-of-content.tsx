import cx from "classnames";
import {useScroll} from "@hooks/useScroll";
import {generateTableOfContents} from "@utils/common";
import {useEffect, useState} from "react";

const TableOfContent = ({markdownContents}: {markdownContents: string}) => {
  const isScrolling = useScroll();
  const tableOfContents = generateTableOfContents(markdownContents);
  const [contentSlug, setContentSlug] = useState<string>("");
  const [manuallySet, setManuallySet] = useState<boolean>(false);

  const handleScroll = () => {
    if (!manuallySet) {
      const currentPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxScrollHeight =
        document.documentElement.scrollHeight - windowHeight;

      const sections = tableOfContents.map((item) => item.slug);

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (
            currentPosition >= sectionTop &&
            currentPosition < sectionBottom
          ) {
            setContentSlug(sections[i]);
            break;
          }
        }
      }

      // Handle scrolling at the bottom of the page
      if (Math.floor(currentPosition) === maxScrollHeight) {
        setContentSlug(sections[sections.length - 1]);
      }

      if (currentPosition === 0) setContentSlug("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      setManuallySet(false);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [manuallySet, tableOfContents]);

  const handleClick = (slug: string) => {
    setContentSlug(slug);
    setManuallySet(true);
  };

  return (
    <div
      className={cx(
        "fixed w-[16%] left-44 transition-all",
        "duration-300 ease-in-out block 2xl:hidden p-2",
        {
          "top-20": !isScrolling,
          "top-5": isScrolling,
        }
      )}>
      <p className="text-2xl font-bold no-underline font-playfair">
        In This Post
      </p>

      <div className="flex flex-col space-y-3 mt-4">
        {tableOfContents.map((item) => (
          <a
            href={`#${item.slug}`}
            key={item.slug}
            onClick={() => handleClick(item.slug)}
            className={cx(
              "toc-list no-underline transition-all duration-300 ease-in-out text-[15px]",
              {
                "ml-4": item.level === 3,
                "text-gray-400": item.slug !== contentSlug,
                "!ml-5": item.level === 3 && contentSlug === item.slug,
                "!text-[#3AA6B9] ml-[5px] border-l-2 px-[7px] !border-[#3AA6B9]":
                  contentSlug === item.slug,
              }
            )}>
            {item.content}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TableOfContent;
