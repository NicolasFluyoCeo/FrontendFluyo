import PageWrapper from "@/components/PageWrapper";
import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper>
      <div className="py-16">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-4">
                At SAMMY, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
              </p>

              <div>
                <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
                <p>
                  We collect information that you provide directly to us, such as when you create an account,
                  contact us for support, or use our services. This may include your name, email address,
                  company information, and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process and complete transactions</li>
                  <li>Send you technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Communicate with you about products, services, offers, and events</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
                <p>
                  We take reasonable measures to help protect information about you from loss, theft, misuse,
                  unauthorized access, disclosure, alteration, and destruction. We implement appropriate
                  technical and organizational measures to ensure a level of security appropriate to the risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mt-8 mb-4">Data Retention</h2>
                <p>
                  We retain personal information for as long as necessary to fulfill the purposes outlined
                  in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information,
                  such as the right to access, correct, delete, or restrict processing of your information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. If we make material changes,
                  we will notify you by email or through our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  <a href="mailto:privacy@sammylabs.com" className="text-primary hover:underline">
                    privacy@sammylabs.com
                  </a>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
}
