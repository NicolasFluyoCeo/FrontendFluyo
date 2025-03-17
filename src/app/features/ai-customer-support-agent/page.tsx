import PageWrapper from "@/components/PageWrapper";
import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AICustomerSupportAgentPage() {
  return (
    <PageWrapper>
      <div className="py-16">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <FadeIn>
              <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
                AI Customer <span className="text-primary">Support Agent</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl text-center mb-8">
                Enhance customer support with AI-driven agents that provide instant, accurate responses. SAMMY reduces ticket volume, speeds up resolutions, and improves user satisfaction.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://ext.same-assets.com/1461835929/1988075725.png"
                  alt="AI Customer Support Agent"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* Key Features Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">Multimodal Understanding</h3>
                <p>Our AI agents understand text, images, videos, and code snippets, allowing users to communicate in the way that's most natural to explain their issue.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">Contextual Knowledge</h3>
                <p>Agents access your product documentation, past support cases, and user preferences to provide personalized and relevant support.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
                <p>Provide round-the-clock support without increasing your team size or creating burnout, ensuring users get help when they need it.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">Human Handoff</h3>
                <p>Seamlessly escalate complex issues to human agents with full context of the conversation, ensuring a smooth transition for users.</p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16 bg-gray-50 p-10 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Reduce Ticket Volume</h3>
                <p>Decrease support tickets by up to 45% by resolving common issues instantly without human intervention.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <polyline points="1 20 1 14 7 14"></polyline>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Faster Resolution</h3>
                <p>Resolve issues in seconds rather than hours or days, improving customer satisfaction and loyalty.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Higher Satisfaction</h3>
                <p>Improve customer satisfaction scores by providing immediate, helpful responses to user inquiries.</p>
              </div>
            </div>
          </div>

          {/* Use Case Example */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">See It In Action</h2>
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-bold mb-4">Support Conversation Example</h3>
                  <div className="rounded-lg bg-gray-50 p-4 mb-4">
                    <p className="font-medium mb-2">User:</p>
                    <p className="mb-4 bg-gray-100 p-3 rounded-lg">I'm trying to export my data but I keep getting an error message. Here's a screenshot of what I'm seeing.</p>

                    <p className="font-medium mb-2">SAMMY:</p>
                    <p className="mb-4 bg-primary/10 p-3 rounded-lg">I can see you're encountering Error Code E-1045 when trying to export data. This typically happens when your export contains more than 100,000 rows. You have two options:
                    <br /><br />
                    1. Split your export into smaller batches using the date range filter
                    <br />
                    2. Use our Bulk Export API for larger datasets
                    <br /><br />
                    Would you like me to walk you through either of these solutions?</p>

                    <p className="font-medium mb-2">User:</p>
                    <p className="bg-gray-100 p-3 rounded-lg">I'll try the date range filter. Can you show me how to do that?</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-bold mb-4">Results</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500 mr-2 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Issue identified and diagnosed within seconds</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500 mr-2 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Multiple solutions provided with context</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500 mr-2 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Personalized guidance offered based on user preference</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500 mr-2 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>No wait time for the customer</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500 mr-2 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Support team freed up to handle complex issues</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to revolutionize your customer support?</h2>
            <p className="mb-6">Get started with SAMMY's AI Customer Support Agent today.</p>
            <Button asChild size="lg" className="bg-primary text-white px-8">
              <Link href="/Contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
