import { LoaderCircle } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            All Your
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Reviews{" "}
            </span>
            In One Interface
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Manage every Google review effortlessly with AI-powered replies—all
            from a single, intuitive dashboard. Start now!
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <a rel="noreferrer noopener" href="#about">
            <Button className="w-full md:w-1/3">Learn more</Button>
          </a>

          <a
            rel="noreferrer noopener"
            href="#waiting"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Join Waiting List
            <LoaderCircle className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
