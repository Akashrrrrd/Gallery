import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LinkedinIcon, GithubIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6 py-20 md:py-16">
      <div className="mb-4 mt-8">
        <Image
          src={assets.user_image}
          alt=""
          className="rounded-full w-32 mx-auto"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Akash Rajendran{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        full stack developer.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Aspiring full stack developer from Chennai, runner-up at Smart Industry
        Hackathon 4.0 (AgroConnect) and Google Chrome Built-in Challenge
        (SyncOps), with 500+ problems solved on LeetCode and CodeChef.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/assets/resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <Link
          href="https://www.linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <LinkedinIcon size={32} />
        </Link>
        <Link
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <GithubIcon size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
