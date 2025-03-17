import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import FadeIn from "@/components/animations/FadeIn";

export default function FeaturesPage() {
  const features = [
    {
      title: "Product Video Tutorial",
      description: "SAMMY's Product Video Tutorials transform onboarding, support, and user education by delivering dynamic, always-current video content that evolves with your product.",
      imageSrc: "https://ext.same-assets.com/2047887226/2886156430.png",
      href: "/features/product-video-tutorial"
    },
    {
      title: "Open Source AI Chatbot",
      description: "SAMMY is the leading free, open-source multimodal AI chatbot for B2B customer success. Empower your team with AI-driven support that enhances efficiency and user experience.",
      imageSrc: "https://ext.same-assets.com/254187130/3718024816.png",
      href: "/features/open-source-ai-chatbot"
    },
    {
      title: "Multimodal Chatbot",
      description: "With SAMMY's multimodal AI chatbot, users get the help they need, exactly how they need it. No more misunderstandings, endless ticket escalations, or frustrating chatbot loops.",
      imageSrc: "https://ext.same-assets.com/3492086774/1480832337.png",
      href: "/features/ai-multimodal-chatbot"
    },
    {
      title: "Software Documentation",
      description: "Keep your software documentation accurate and up-to-date with AI-powered automation. Reduce manual updates, improve support, and enhance user experience.",
      imageSrc: "https://ext.same-assets.com/4071976377/2406010867.png",
      href: "/features/software-documentation"
    },
    {
      title: "Customer Agent",
      description: "Enhance customer support with AI-driven agents that provide instant, accurate responses. SAMMY reduces ticket volume, speeds up resolutions, and improves user satisfaction.",
      imageSrc: "https://ext.same-assets.com/1461835929/1988075725.png",
      href: "/features/ai-customer-support-agent"
    },
    {
      title: "Product Tours",
      description: "Boost user engagement with AI-powered interactive product tours. SAMMY delivers personalized, step-by-step guidance that adapts in real time for seamless onboarding.",
      imageSrc: "https://ext.same-assets.com/4057777445/2803243964.png",
      href: "/features/product-tours"
    },
    {
      title: "Product Walkthroughs",
      description: "SAMMY powers customer success with AI-driven interactive walkthroughs and live docs that keep users delighted, reduce churn and drive growth.",
      imageSrc: "https://ext.same-assets.com/3985057520/2141102763.png",
      href: "/features/product-walkthroughs"
    }
  ];

  return (
    <PageWrapper>
      <div className="py-16">
        <div className="container mx-auto">
          <FadeIn>
            <h1 className="text-primary text-center mb-16">Features</h1>
          </FadeIn>

          <div className="grid gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={0.1 * (index + 1)}>
                <Link href={feature.href} className="block">
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600">
                          <Image
                            src={feature.imageSrc}
                            alt={feature.title}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-full md:w-2/3 p-6">
                          <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
                          <p className="text-gray-700">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
