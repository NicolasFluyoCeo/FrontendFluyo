import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import FadeIn from "@/components/animations/FadeIn";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Customer Success is changing",
      subtitle: "Customer Success is changing and SAMMY can help you navigate that change",
      category: "Customer Success",
      imageSrc: "https://ext.same-assets.com/4068490162/3295631986.png",
      href: "/customer-success"
    },
    {
      title: "UI & E2E testing is getting better, but it's not enough",
      subtitle: "UI & E2E testing has a new player in town, it wants to stop you sinking your dev time into testing",
      category: "Software QA",
      imageSrc: "https://ext.same-assets.com/1481231525/3021869311.png",
      href: "/ui-testing"
    },
    {
      title: "LLM SEO - see how your brand ranks in the various LLMs & why Demo-Led SEO is here to help",
      subtitle: "LLMs are the new search engines - modern businesses are making sure LLMs not only show users their content but also make sure their brand is presented favourably",
      category: "LLM SEO",
      imageSrc: "https://ext.same-assets.com/3158617101/3044498050.png",
      href: "/llm-seo"
    }
  ];

  return (
    <PageWrapper>
      <div className="py-16">
        <div className="container mx-auto">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl font-bold mb-16">Case Studies</h1>
          </FadeIn>

          <div className="grid gap-8">
            {caseStudies.map((study, index) => (
              <FadeIn key={index} delay={0.1 * (index + 1)}>
                <Link href={study.href} className="block">
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="relative h-96">
                        <Image
                          src={study.imageSrc}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                          <div className="mb-1 text-sm font-medium">{study.category}</div>
                          <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                          <p>{study.subtitle}</p>
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
