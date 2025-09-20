import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
              <p>
                By accessing our website, engaging with our LinkedIn advertisements, or using our services, 
                you agree to be bound by these Terms and Conditions ("Terms"). T and T Realty Services Private 
                Limited ("Company," "we," "us," or "our") provides real estate consultation services in accordance 
                with these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>T and T Realty Services Private Limited</strong></p>
                <p>Incorporated: 2014</p>
                <p>HARERA Registration Number: /Ext1/2023/222</p>
                <p>Address: 2nd Floor, Ameya One, Golf Course Road, Sector 42, Gurgaon, Haryana 122022</p>
                <p>Contact: +91 8088113333 | info@tandtrealty.in</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Services Offered</h2>
              <p>Our company provides the following real estate services:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Property consultation and advisory services</li>
                <li>Residential and commercial property sales</li>
                <li>Investment guidance and market analysis</li>
                <li>Property management and after-sales support</li>
                <li>RERA-compliant transaction facilitation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">LinkedIn Advertising Terms</h2>
              <p>
                When you engage with our LinkedIn advertisements or promotional content:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>All property information is subject to developer terms and availability</li>
                <li>Pricing and offers mentioned are indicative and subject to change</li>
                <li>Lead information collected will be used for legitimate business purposes only</li>
                <li>We comply with LinkedIn's advertising policies and professional standards</li>
                <li>Your LinkedIn profile data may be accessed to provide personalized services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Client Responsibilities</h2>
              <p>As a client, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate and complete information about your requirements</li>
                <li>Conduct independent due diligence before making investment decisions</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights of all parties</li>
                <li>Pay applicable fees and charges as agreed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Property Transactions</h2>
              <h3 className="text-xl font-medium mb-2">RERA Compliance</h3>
              <p>
                All property transactions facilitated by us comply with the Real Estate (Regulation and Development) 
                Act, 2016 (RERA). We ensure that all developers are RERA-registered and provide necessary disclosures.
              </p>
              
              <h3 className="text-xl font-medium mb-2 mt-4">Investment Risks</h3>
              <p>
                Real estate investments are subject to market risks. Past performance does not guarantee future returns. 
                Clients are advised to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Verify all project approvals and legal clearances</li>
                <li>Understand payment schedules and possession timelines</li>
                <li>Review all terms and conditions before signing agreements</li>
                <li>Consult legal and financial advisors independently</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Fees and Payments</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Consultation fees are as mutually agreed upon</li>
                <li>Brokerage charges are as per industry standards and market practices</li>
                <li>All payments should be made through official company accounts</li>
                <li>We do not accept cash payments beyond legally permissible limits</li>
                <li>Refund policies are subject to individual agreement terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p>
                All website content, marketing materials, property brochures, and promotional content are protected 
                by intellectual property laws. Unauthorized use, reproduction, or distribution is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p>
                Our liability is limited to the consultation and facilitation services provided. We are not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Delays in project completion by developers</li>
                <li>Changes in government policies affecting property values</li>
                <li>Market fluctuations and investment risks</li>
                <li>Third-party service provider failures</li>
                <li>Force majeure events and natural calamities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
              <p>
                Any disputes arising from these Terms or our services shall be resolved through:
              </p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Good faith negotiations between the parties</li>
                <li>Mediation through mutually agreed mediators</li>
                <li>Arbitration under the Arbitration and Conciliation Act, 2015</li>
                <li>Courts in Gurgaon, Haryana shall have exclusive jurisdiction</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Professional Standards</h2>
              <p>
                We adhere to the highest professional standards in real estate consulting:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Transparent communication and ethical business practices</li>
                <li>Compliance with RERA and other applicable regulations</li>
                <li>Confidentiality of client information and requirements</li>
                <li>Continuous professional development and market knowledge</li>
                <li>Fair dealing with all stakeholders</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Termination</h2>
              <p>
                Either party may terminate the service relationship with appropriate notice as specified in 
                individual agreements. Termination does not affect obligations that have already accrued.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Amendments</h2>
              <p>
                These Terms may be updated periodically to reflect changes in our services or legal requirements. 
                Updated terms will be posted on our website with effective dates. Continued engagement with our 
                services constitutes acceptance of updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p>For questions regarding these Terms, contact us:</p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>T and T Realty Services Private Limited</strong></p>
                <p>Legal Department</p>
                <p>Email: info@tandtrealty.in</p>
                <p>Phone: +91 8088113333</p>
                <p>Business Hours: Monday to Saturday, 9:00 AM to 6:00 PM</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsConditions;