import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                T and T Realty Services Private Limited ("we," "our," or "us") respects your privacy and is committed 
                to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you visit our website or engage with our services, including through 
                LinkedIn advertising campaigns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <h3 className="text-xl font-medium mb-2">Personal Information</h3>
              <p>When you interact with our services or LinkedIn ads, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name and contact information (email, phone number)</li>
                <li>Property preferences and investment requirements</li>
                <li>Communication records and inquiries</li>
                <li>LinkedIn profile information (when accessed through LinkedIn ads)</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-2 mt-4">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Browser type and version</li>
                <li>Device information and IP address</li>
                <li>Website usage data and analytics</li>
                <li>LinkedIn interaction data (clicks, views, engagement)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to your property inquiries and provide consultations</li>
                <li>Send relevant property recommendations and market updates</li>
                <li>Improve our services and website functionality</li>
                <li>Comply with legal obligations and RERA requirements</li>
                <li>Measure and improve our LinkedIn advertising effectiveness</li>
                <li>Personalize your experience with our real estate services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">LinkedIn Advertising & Data</h2>
              <p>
                When you interact with our LinkedIn advertisements, LinkedIn may share certain information with us, 
                including your professional profile data. This helps us provide more relevant property recommendations 
                based on your professional background and investment capacity.
              </p>
              <p>
                We adhere to LinkedIn's advertising policies and use this information solely for legitimate business 
                purposes related to real estate consultation and property marketing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Authorized real estate developers and partners (with your consent)</li>
                <li>Legal advisors and regulatory authorities as required by law</li>
                <li>Service providers who assist in our business operations</li>
                <li>Third-party analytics providers (including LinkedIn) for marketing optimization</li>
              </ul>
              <p className="mt-2">
                We do not sell, rent, or lease your personal information to unauthorized third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission 
                is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data (subject to legal obligations)</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing where applicable</li>
                <li>File complaints with relevant data protection authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
              <p>
                Our website uses cookies to enhance user experience and track website performance. 
                LinkedIn and other advertising platforms may also use cookies to deliver targeted ads 
                and measure campaign effectiveness. You can manage cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p>For privacy-related questions or requests, contact us:</p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>T and T Realty Services Private Limited</strong></p>
                <p>2nd Floor, Ameya One, Golf Course Road</p>
                <p>Sector 42, Gurgaon, Haryana 122022</p>
                <p>Email: info@tandtrealty.in</p>
                <p>Phone: +91 8088113333</p>
                <p>HARERA Registration: /Ext1/2023/222</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Updates to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be posted on this page with 
                an updated revision date. Continued use of our services after changes constitutes acceptance 
                of the updated policy.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;