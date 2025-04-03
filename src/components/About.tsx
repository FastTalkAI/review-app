import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          {/* <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          /> */}
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                us
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                A team of innovators looking to help. Our AI-powered app takes
                the hassle out of managing Google reviews, crafting smart,
                personalized responses in seconds. Born from a simple
                idea—making customer engagement effortless—we’ve built a tool
                that saves time, boosts reputations, and lets you focus on what
                you do best. With cutting-edge tech and a commitment to your
                success, we’re here to turn every review into an opportunity.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
