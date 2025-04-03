import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How does the AI generate replies to my Google reviews?",
    answer:
      "Our AI analyzes the content and sentiment of each review, then crafts a tailored response based on your chosen tone and brand style—all in under a second.",
    value: "item-1",
  },
  {
    question: "Can I edit the AI-generated replies before posting?",
    answer:
      "Absolutely! You can customize the tone upfront and manually tweak every reply to ensure it perfectly matches your voice and intent.",
    value: "item-2",
  },
  {
    question: "What languages does the tool support?",
    answer:
      "The paid plans support multiple languages, replying in the reviewer’s native tongue. The free plan starts with English-only responses.",
    value: "item-3",
  },
  {
    question: "Is it really free to get started?",
    answer:
      "Yes! Our free plan includes 5 reviews per month with basic features—no credit card required. Upgrade anytime for more power and flexibility.",
    value: "item-4",
  },
  {
    question: "How fast can I see results with this tool?",
    answer:
      "You’ll notice the difference instantly—replies are generated in less than a second, helping you engage customers and boost your reputation right away.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="mailto:contact@fasttalk.xyz"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
