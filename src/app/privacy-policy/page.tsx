"use client";

import { Header } from "@/components/home/Header";
import { FooterSection } from "@/components/home/FooterSection";
import { SEO } from "@/components/SEO";
import { usePalette } from "@/components/home/hooks";
import { ClientOnlyWrapper } from "@/components/ClientOnlyWrapper";
import Link from "next/link";

const PrivacyPolicyContent = () => {
  const { isDark, P } = usePalette();

  // Stylistic helpers
  const headingStyles: React.CSSProperties = {
    color: isDark ? P("white") : P("black"),
  };
  const bigHeadingClass = "text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95]";
  const sectionOuter = (bg: string, withTopBorder = true): React.CSSProperties => ({
    background: bg,
    borderTop: withTopBorder ? `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}` : undefined,
  });

  return (
    <div style={{ background: isDark ? P('charcoal') : P('white'), color: isDark ? P('white') : P('charcoal'), minHeight: '100vh' }}>
      <Header />
      <main className="pt-28">
        <SEO 
          title="Privacy Policy – Adam Gałęcki"
          description="Privacy policy and cookies for galecki.site. Information about personal data processing and cookies usage."
          canonical="https://galecki.site/privacy-policy"
          ogImage="/og_cover.png"
        />

        {/* Title section */}
        <section style={sectionOuter(isDark ? P('charcoal') : P('white'), false)} className="pb-20">
          <div className="container mx-auto max-w-6xl px-6">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm mb-8 pt-4" style={{ opacity: .7 }}>
              <Link href="/" className="hover:opacity-100 transition-opacity">
                Home
              </Link>
              <span>→</span>
              <span className="font-medium" style={{ opacity: 1 }}>
                Privacy Policy
              </span>
            </nav>

            {/* Main title */}
            <div className="mb-12">
              <h1 style={headingStyles} className={bigHeadingClass}>
                Privacy Policy
              </h1>
              <p className="mt-6 text-lg max-w-4xl leading-relaxed" style={{ color: isDark ? P('white') : P('charcoal') }}>
                Information about personal data processing and cookies usage on galecki.site
              </p>
            </div>
          </div>
        </section>

        {/* Policy content */}
        <section style={sectionOuter(P('ecru'))} className="py-24 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="prose prose-lg max-w-none" style={{ color: isDark ? P('white') : P('charcoal') }}>
              
              <h2 style={{ color: isDark ? P('white') : P('black'), fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                Privacy policy and cookies
              </h2>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                1. General information
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                1.1 Personal data administrator
              </h4>
              <p>The administrator of your personal data is:</p>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>NIP:</strong> 9462752489</li>
                <li><strong>REGON:</strong> 541404566</li>
                <li><strong>Legal form:</strong> individual business activity</li>
                <li><strong>Registered address:</strong> ul. Garbarska 7/5, 20-340 Lublin</li>
                <li><strong>Entrepreneur:</strong> Adam Gałęcki</li>
                <li><strong>E-mail address:</strong> agalecki.work@gmail.com</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                1.2 Data Protection Officer
              </h4>
              <p>For matters regarding personal data protection, you can contact our Data Protection Officer: <strong>e-mail: agalecki.work@gmail.com</strong></p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                1.3 Scope of application
              </h4>
              <p>This Privacy Policy applies to the galecki.site service available at https://galecki.site and the related invoice reading process automation application.</p>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                2. Legal bases for data processing
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                2.1 Performance of the contract (art. 6 para. 1 lit. b GDPR)
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Providing invoice reading automation services.</li>
                <li>Processing accounting documents.</li>
                <li>User account management.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                2.2 Fulfillment of a legal obligation (art. 6 para. 1 lit. c GDPR)
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Fulfillment of tax obligations (to the extent required by law)</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                2.3 Legally justified interest (art. 6 para. 1 lit. f GDPR)
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Ensuring system security.</li>
                <li>Preventing abuse and fraud.</li>
                <li>Improving AI algorithms.</li>
                <li>Direct marketing of our services.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                2.4 Consent (art. 6 para. 1 lit. a GDPR)
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Marketing and promotional communication (if expressed).</li>
                <li>Use of analytical cookies.</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                3. Categories of personal data processed
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                3.1 User system data
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Identification data (first name, last name, company name).</li>
                <li>Contact data (e-mail address, phone number, correspondence address).</li>
                <li>Login and authentication data.</li>
                <li>User preference information.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                3.2 Data from processed invoices
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Contractor data (name, NIP, address).</li>
                <li>Contact person data (first name, last name, position).</li>
                <li>Financial information (amounts, taxes, account numbers).</li>
                <li>Goods and services descriptions.</li>
                <li>Issue and payment dates.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                3.3 Technical data
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>IP address.</li>
                <li>Browser and device information.</li>
                <li>System logs.</li>
                <li>Application activity data.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                3.4 Biometric data (in a limited scope)
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Metadata of invoice images processed by OCR.</li>
                <li>Text recognition patterns (anonymized).</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                4. Purposes and methods of data processing
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                4.1 Accounting process automation
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>AI analysis:</strong> We use advanced artificial intelligence algorithms for automatic data reading from invoices.</li>
                <li><strong>OCR technology:</strong> Processing of unreadable documents using optical character recognition.</li>
                <li><strong>Categorization:</strong> Automatic assignment of cost and income categories.</li>
                <li><strong>Verification:</strong> Checking contractors in the GUS database.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                4.2 Archiving and document organization
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Creating backup copies of read data.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                4.3 Financial analysis and reporting
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Creating real-time analytical dashboards.</li>
                <li>Preparing documents for transfer to the accountant.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                4.4 Data security and integrity
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Monitoring unauthorized access.</li>
                <li>Preventing system abuse.</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                5. Data subjects
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                5.1 Parties processing data on our behalf
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>OCR System:</strong> LlamaIndex Inc. (llamaindex.ai)</li>
                <li><strong>Hosting:</strong> Contabo GmbH (contabo.com)</li>
                <li><strong>AI System:</strong> OpenAI (openai.com)</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                5.2 Parties entitled to receive data
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Tax authorities and supervisory authorities (on request).</li>
                <li>Courts and prosecuting authorities (in cases provided by law).</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                5.3 Transferring data to third countries
              </h4>
              <p>Some data may be transferred to third countries outside the EEA due to:</p>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Using Google services (USA) – based on adequacy decision or standard contractual clauses.</li>
                <li>Using Contabo GmBH services (Germany) – processing takes place within the EEA,</li>
                <li>Using LlamaIndex Inc. services (USA) – with appropriate data protection measures,</li>
                <li>Using OpenAI services (USA) – based on standard contractual clauses and additional safeguards.</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                6. Data retention period
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                6.1 User data
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>Active accounts:</strong> for the duration of the contract and for 3 years after its termination.</li>
                <li><strong>System logs:</strong> for 12 months.</li>
                <li><strong>Marketing data:</strong> 3 years from the last contact or until withdrawal of consent.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                6.2 Technical data
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>Cookies:</strong> in accordance with the cookie policy (maximum 24 months).</li>
                <li><strong>Backup copies:</strong> 6 months.</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                7. Rights of data subjects
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                7.1 Right to access data (art. 15 GDPR)
              </h4>
              <p>You have the right to obtain information about whether we process your personal data, and if so, what data and for what purpose.</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                7.2 Right to rectification (art. 16 GDPR)
              </h4>
              <p>You have the right to request correction of incorrect or incomplete personal data.</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                7.3 Right to erasure ("right to be forgotten") (art. 17 GDPR)
              </h4>
              <p>You have the right to request deletion of data, subject to the exception of cases where we are obliged to store them by law.</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                7.4 Right to restriction of processing (art. 18 GDPR)
              </h4>
              <p>In certain circumstances, you may request restriction of processing of your data.</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                7.5 Right to data portability (art. 20 GDPR)
              </h4>
              <p>You have the right to receive your data in a structured, commonly used, machine-readable format.</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                7.6 Right to object (art. 21 GDPR)
              </h4>
              <p>You may object to processing of data based on a legally justified interest.</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                7.7 Right to withdraw consent
              </h4>
              <p>If processing is based on consent, you may withdraw it at any time.</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                7.8 Ways of exercising rights
              </h4>
              <p>To exercise the above rights, please contact us:</p>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>E-mail:</strong> agalecki.work@gmail.com</li>
                <li><strong>By post to:</strong> Adam Gałęcki – Gałęcki Company, ul. Garbarska 7/5, 20-340 Lublin,</li>
              </ul>
              <p>We respond to requests within 30 days.</p>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                8. Data security
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                8.1 Technical measures
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>Encryption:</strong> All data is encrypted both during transmission (TLS/SSL) and storage (AES-256).</li>
                <li><strong>Authentication:</strong> Two-factor authentication (2FA) for all accounts.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                8.2 Organizational measures
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>Training:</strong> Regular training of employees on data protection.</li>
                <li><strong>Security policies:</strong> Implemented security procedures.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                8.3 Backup copies
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Automated daily backups.</li>
                <li>Encrypted storage of backups in different geographical locations.</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                9. Data breaches
              </h3>
              <p>In case of a data breach:</p>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>We will report the breach to the President of the UODO within 72 hours.</li>
                <li>We will inform the interested parties if the breach may pose a high risk to their rights.</li>
                <li>We will take all necessary corrective actions.</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                10. Cookie policy
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                10.1 Types of cookies used
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>Essential:</strong> For authentication and session management of the user.</li>
                <li><strong>Analytical:</strong> Google Analytics for traffic analysis (upon consent).</li>
                <li><strong>Functional:</strong> Remembering user preferences.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                10.2 Managing cookies
              </h4>
              <p>You can manage cookies through your browser settings. Disabling some cookies may limit the functionality of the website.</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                10.3 Cookie retention period
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>Session cookies:</strong> deleted after closing the browser.</li>
                <li><strong>Persistent cookies:</strong> for a maximum of 24 months.</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                11. Legal and regulatory bases
              </h3>
              <p>This privacy policy is in accordance with:</p>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR).</li>
                <li>Act of 10 May 2018 on the Protection of Personal Data.</li>
                <li>Act of 18 July 2002 on electronic services.</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                12. Right to lodge a complaint
              </h3>
              <p>You have the right to lodge a complaint with the supervisory authority – the Office of Personal Data Protection:</p>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>Address:</strong> ul. Stawki 2, 00-193 Warszawa</li>
                <li><strong>Phone:</strong> 22 531 03 00</li>
                <li><strong>E-mail:</strong> kancelaria@uodo.gov.pl</li>
                <li><strong>Website:</strong> https://uodo.gov.pl</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                13. Changes to the privacy policy
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                13.1 Updates
              </h4>
              <p>We reserve the right to make changes to this Privacy Policy. We will inform you of significant changes:</p>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>By e-mail (with 14-day advance notice).</li>
                <li>By message in the application.</li>
                <li>On the website of the service.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                13.2 Continuity of protection
              </h4>
              <p>Changes in the policy do not affect the rights of users arising from previous versions of the document.</p>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                14. Contact
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                14.1 Contact details of the Administrator
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>E-mail:</strong> agalecki.work@gmail.com</li>
                <li><strong>Address:</strong> Adam Gałęcki – Gałęcki Company, ul. Garbarska 7/5, 20-340 Lublin,</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                14.2 Data Protection Inspector
              </h4>
              <p><strong>E-mail:</strong> agalecki.work@gmail.com</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                14.3 Response time
              </h4>
              <p>We respond to all questions regarding data protection within 30 working days.</p>

              <div style={{ 
                marginTop: '3rem', 
                padding: '2rem', 
                border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                background: isDark ? P('charcoal') : P('ecru'),
                textAlign: 'center'
              }}>
                <p style={{ margin: 0, fontWeight: 600 }}>
                  This Privacy Policy was prepared on 14 August 2025 and is in accordance with the currently applicable legal provisions.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default function PrivacyPolicyPage() {
  return (
    <ClientOnlyWrapper fallback={
      <div className="bg-white text-charcoal min-h-screen">
        <div className="fixed top-0 inset-x-0 z-50 bg-white border-b-3 border-black">
          <nav className="w-full h-16 flex items-center relative">
            <a href="#home" className="font-extrabold tracking-tight leading-none ml-4 md:ml-8 text-charcoal">Adam&nbsp;Gałęcki</a>
          </nav>
        </div>
        <main className="pt-28">
          <div className="container mx-auto max-w-6xl px-6 pb-20">
            <nav className="flex items-center gap-2 text-sm mb-8 pt-4 opacity-70">
              <a href="/" className="hover:opacity-100 transition-opacity">Home</a>
              <span>→</span>
              <span className="font-medium opacity-100">Privacy Policy</span>
            </nav>
            <div className="mb-12">
              <h1 className="text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-black">
                Privacy Policy
              </h1>
              <p className="mt-6 text-lg max-w-4xl leading-relaxed text-charcoal">
                Information about personal data processing and cookies usage on galecki.site
              </p>
            </div>
          </div>
        </main>
      </div>
    }>
      <PrivacyPolicyContent />
    </ClientOnlyWrapper>
  );
}
