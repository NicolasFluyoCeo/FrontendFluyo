import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageWrapper from "@/components/PageWrapper";
import FadeIn from "@/components/animations/FadeIn";

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="py-16">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Get in touch with our team</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="block text-sm font-medium">
                          First Name
                        </label>
                        <input
                          id="firstName"
                          className="w-full p-2 border rounded-md focus:scale-[1.01] focus:shadow-[0_0_0_2px_rgba(var(--primary-rgb),0.25)] transition duration-200"
                          placeholder="John"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="lastName" className="block text-sm font-medium">
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          className="w-full p-2 border rounded-md focus:scale-[1.01] focus:shadow-[0_0_0_2px_rgba(var(--primary-rgb),0.25)] transition duration-200"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 border rounded-md focus:scale-[1.01] focus:shadow-[0_0_0_2px_rgba(var(--primary-rgb),0.25)] transition duration-200"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium">
                        Company
                      </label>
                      <input
                        id="company"
                        className="w-full p-2 border rounded-md focus:scale-[1.01] focus:shadow-[0_0_0_2px_rgba(var(--primary-rgb),0.25)] transition duration-200"
                        placeholder="Acme Inc."
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-2 border rounded-md focus:scale-[1.01] focus:shadow-[0_0_0_2px_rgba(var(--primary-rgb),0.25)] transition duration-200"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <div className="hover:scale-[1.02] active:scale-[0.98] transition duration-200">
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
