import PageWrapper from "@/components/PageWrapper";
import FadeIn from "@/components/animations/FadeIn";

export default function SubprocessorsPage() {
  const subprocessors = [
    {
      name: "Amazon Web Services",
      purpose: "Cloud hosting and infrastructure",
      location: "United States",
    },
    {
      name: "Google Cloud Platform",
      purpose: "Cloud hosting and analytics",
      location: "United States",
    },
    {
      name: "ElevenLabs",
      purpose: "Text-to-speech processing",
      location: "United States",
    },
    {
      name: "Stripe",
      purpose: "Payment processing",
      location: "United States",
    },
    {
      name: "SendGrid",
      purpose: "Email communication",
      location: "United States",
    },
    {
      name: "Intercom",
      purpose: "Customer communication",
      location: "United States and Ireland",
    },
  ];

  return (
    <PageWrapper>
      <div className="py-16">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Subprocessors</h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg mb-8">
              SAMMY uses third-party subprocessors to provide various aspects of our services.
              These subprocessors assist us with infrastructure, analytics, payment processing,
              and other critical functions.
            </p>

            <p className="text-lg mb-8">
              We carefully select our subprocessors and ensure they maintain appropriate security
              and privacy standards that align with our commitments to customers.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 mb-8">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-4 text-left">Subprocessor</th>
                    <th className="border border-gray-300 p-4 text-left">Purpose</th>
                    <th className="border border-gray-300 p-4 text-left">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {subprocessors.map((processor, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="border border-gray-300 p-4">{processor.name}</td>
                      <td className="border border-gray-300 p-4">{processor.purpose}</td>
                      <td className="border border-gray-300 p-4">{processor.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-lg">
              This list may be updated from time to time as we modify our service providers.
              For any questions about our subprocessors, please contact us at{" "}
              <a href="mailto:privacy@sammylabs.com" className="text-primary hover:underline">
                privacy@sammylabs.com
              </a>.
            </p>
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
}
