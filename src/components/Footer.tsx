import { Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            <Zap />
            <a className="ml-2">Fast Talk</a>
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Dribbble
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Web
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Mobile
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Desktop
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#features"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#waiting"
              className="opacity-60 hover:opacity-100"
            >
              Waiting List
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Youtube
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Discord
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitch
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 All rights reserved by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href=""
            className="text-primary transition-all border-primary hover:border-b-2"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Fast Talk
          </a>
        </h3>
      </section>
    </footer>
  );
};
