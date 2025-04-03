import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  CodeIcon,
  PlaneIcon,
  SettingsIcon,
  FlashIcon,
} from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <CodeIcon />,
    title: "AI-Powered",
    description:
      "Our advanced AI craft smart, tailored responses to Google reviews in seconds, saving you effort while keeping it professional.",
  },
  {
    icon: <FlashIcon />,
    title: "Lightning Fast",
    description:
      "Get polished replies generated in under a second, so you can keep up with reviews without missing a beat.",
  },
  {
    icon: <PlaneIcon />,
    title: "Multi-Language",
    description:
      "Choose the tone—friendly, formal, or anything in between—and tweak the generated reply manually to match your brand perfectly.",
  },
  {
    icon: <SettingsIcon />,
    title: "Fully Customizable",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
];

export const HowItWorks = () => {
  return (
    <section id="features" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Simple Steps to Smarter Review Management
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
