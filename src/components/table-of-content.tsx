import cx from "classnames";
import {useScroll} from "@hooks/useScroll";
import {generateTableOfContents} from "@utils/common";
import {useEffect, useState} from "react";

const TableOfContent = ({markdownContents}: {markdownContents: string}) => {
  const isScrolling = useScroll();
  const tableOfContents = generateTableOfContents(markdownContents);
  const [contentSlug, setContentSlug] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
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
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [tableOfContents]);

  return (
    <div
      className={cx(
        "fixed w-1/5 left-28 transition-all",
        "duration-300 ease-in-out block 2xl:hidden p-8",
        {
          "top-20": !isScrolling,
          "top-0": isScrolling,
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
            onClick={() => setContentSlug(item.slug)}
            className={cx(
              "no-underline text-gray-400 transition-all duration-300 ease-in-out",
              {
                "ml-4 text-[15px]": item.level === 3,
                "text-[16px]": item.level !== 3,
                "text-[#3AA6B9] ml-[5px] border-l-2 px-[7px] border-[#3AA6B9] text-[15px]":
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
