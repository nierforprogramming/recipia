import React from "react";
import { RiGithubFill, RiInstagramFill, RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <section>
      <footer className="footer sm:footer-horizontal bg-base-200 p-10 px-5 2xl:px-40">
        <nav>
          <h6 className="footer-title">Techstack</h6>
          <a className="link link-hover hover:text-accent">Nextjs</a>
          <a className="link link-hover hover:text-accent">TailwindCSS</a>
          <a className="link link-hover hover:text-accent">DaisyUI</a>
        </nav>
        <nav>
          <h6 className="footer-title">Tools</h6>
          <a className="link link-hover hover:text-accent">VS Code</a>
          <a className="link link-hover hover:text-accent">Vite</a>
          <a className="link link-hover hover:text-accent">GitHub</a>
        </nav>
        <nav>
          <h6 className="footer-title">Follow</h6>
          <a className="link link-hover hover:text-accent">Twitter</a>
          <a className="link link-hover hover:text-accent">Instagram</a>
          <a className="link link-hover hover:text-accent">YouTube</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover hover:text-accent">Terms of use</a>
          <a className="link link-hover hover:text-accent">Privacy policy</a>
          <a className="link link-hover hover:text-accent">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-5 2xl:px-40">
        <aside className="grid-flow-row text-balance items-center">
          <h1 className="font-display font-bold text-2xl">Recipia</h1>
          <p>
            Recipia Industries Ltd.
            <br />
          </p>
          <p className="text-balance max-w-md">
            At Recipia, we believe cooking is more than just preparing meals —
            it’s about creating memories, exploring cultures, and sharing
            moments that bring people closer together.
          </p>
        </aside>
      </footer>

      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content items-center p-4 px-5 2xl:px-40">
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col text-base-content/50 gap-4 md:place-self-center md:justify-self-end">
          <a className="text-xl hover:text-accent">
            <RiLinkedinFill />
          </a>
          <a className="text-xl hover:text-accent">
            <RiGithubFill />
          </a>
          <a className="text-xl hover:text-accent">
            <RiInstagramFill />
          </a>
        </nav>
      </footer>
    </section>
  );
};

export default Footer;
