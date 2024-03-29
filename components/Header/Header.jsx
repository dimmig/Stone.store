import Menu from "./Menu";
import Reveal from "../Reveal";
import "@/styles/globals.css";
import "@/styles/header.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <Reveal isCentered={false}>
        <Menu />
        <div className="w-full flex-center flex-col mt-52">
          <div className="md:ml-16">
            <h1 className="heading-text md:text-8xl stone-color w-max">
              Stone
            </h1>
            <p className="desc md:text-2xl font-normal w-max">
              Sophistication in shades of gray
            </p>
          </div>
        </div>
        <div className="h-2/5 flex-center mt-24">
          <Link
            href="/store"
            className="shop-btn stone-color rounded-sm md:w-60 md:h-16 md:text-3xl"
          >
            Shop now
          </Link>
        </div>
      </Reveal>
    </div>
  );
};

export default Header;
