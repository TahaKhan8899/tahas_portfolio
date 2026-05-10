import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | AgentArc",
  description:
    "AgentArc privacy policy — how we collect, use, and protect your personal information.",
};

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border/50">
        {title}
      </h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
      <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function Ul({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 list-none">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-blue-500 mt-1.5 shrink-0">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="3" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm">
            Effective Date: May 9, 2026 &nbsp;·&nbsp; Last Updated: May 9, 2026
          </p>
        </div>

        {/* Intro */}
        <div className="mb-12 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            AI RenoSystems Inc. (&ldquo;<strong className="text-foreground">AgentArc</strong>,&rdquo; &ldquo;<strong className="text-foreground">we</strong>,&rdquo; &ldquo;<strong className="text-foreground">us</strong>,&rdquo; or &ldquo;<strong className="text-foreground">our</strong>&rdquo;) operates the website{" "}
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">agentarc.dev</Link>{" "}
            and provides AI consulting, AI agent engineering, and related software services. This Privacy Policy explains what personal information we collect, why we collect it, how we use and share it, and the rights you have over it.
          </p>
          <p>
            This policy applies to information collected through our website, our marketing and outreach activities, and the consulting and AI-development services we deliver to our clients.
          </p>
          <p>
            We have written this policy in plain language. If anything is unclear, contact us at{" "}
            <a href="mailto:taha@agentarc.dev" className="text-blue-400 hover:text-blue-300 transition-colors">taha@agentarc.dev</a>{" "}
            and we will explain.
          </p>
        </div>

        <div className="h-px bg-border/50 mb-12" />

        {/* Section 1 */}
        <Section title="1. Who We Are and How to Reach Us">
          <div className="bg-secondary/30 border border-border/50 rounded-xl p-6 space-y-2 text-sm">
            <p><strong className="text-foreground">Legal entity:</strong> AI RenoSystems Inc. (operating as AgentArc)</p>
            <p><strong className="text-foreground">General contact:</strong>{" "}
              <a href="mailto:taha@agentarc.dev" className="text-blue-400 hover:text-blue-300 transition-colors">taha@agentarc.dev</a>
            </p>
            <p><strong className="text-foreground">Privacy inquiries, requests, and complaints:</strong>{" "}
              <a href="mailto:taha@agentarc.dev" className="text-blue-400 hover:text-blue-300 transition-colors">taha@agentarc.dev</a>
            </p>
          </div>
          <p>
            For privacy matters, please put <strong className="text-foreground">&ldquo;Privacy Request&rdquo;</strong> in the subject line so we can route and respond to your request within the timelines required by applicable law.
          </p>
        </Section>

        {/* Section 2 */}
        <Section title="2. Scope: Three Categories of People">
          <p>This policy distinguishes between three groups, because different rules apply to each:</p>
          <Ul items={[
            <><strong className="text-foreground">Website visitors and prospects</strong> — anyone who visits agentarc.dev, fills out a contact form, books a call, or receives outreach from us.</>,
            <><strong className="text-foreground">Clients</strong> — businesses (and their authorized representatives) that engage us for AI consulting, agent development, or related services.</>,
            <><strong className="text-foreground">Client end-users</strong> — individuals whose data is processed by AI systems we build <em>for</em> our clients. For this category, our client is the <strong className="text-foreground">data controller</strong> and we act as a <strong className="text-foreground">data processor</strong> on their behalf. Our handling of that data is governed primarily by the agreement (and any Data Processing Addendum) between us and that client. If you are an end-user of a system we built and want to exercise your rights, please contact the company that operates the product first; we will support them in responding to your request.</>,
          ]} />
        </Section>

        {/* Section 3 */}
        <Section title="3. Information We Collect">
          <SubSection title="3.1 Information you provide directly">
            <Ul items={[
              <><strong className="text-foreground">Contact and lead information:</strong> Name, email address, company, role, phone number, and any message or details you share through forms, email, or scheduling tools.</>,
              <><strong className="text-foreground">Client engagement information:</strong> Business documents, project requirements, source data, sample data, credentials, configurations, and other materials you share with us so we can deliver the services you&rsquo;ve engaged us for.</>,
              <><strong className="text-foreground">Billing information:</strong> Company name, billing address, invoicing details, and tax IDs as needed for invoicing. Payment card and bank details are entered directly with our payment processors (see Section 6) — we do not store full card numbers or banking credentials on our systems.</>,
              <><strong className="text-foreground">Communications:</strong> Emails, meeting notes, recordings (when you&rsquo;ve consented), and other records of our correspondence.</>,
            ]} />
          </SubSection>
          <SubSection title="3.2 Information collected automatically">
            <Ul items={[
              <><strong className="text-foreground">Hosting and security logs:</strong> Our website is hosted on Vercel, which automatically logs technical information such as IP address, browser type, device type, referring page, and timestamps for security, performance, and abuse-prevention purposes.</>,
              <><strong className="text-foreground">Cookies:</strong> We use a small number of strictly necessary cookies required for the site to function. We do <strong className="text-foreground">not</strong> currently use third-party analytics or advertising cookies. If we add analytics in the future, we will update this policy and, where required, obtain your consent first.</>,
            ]} />
          </SubSection>
          <SubSection title="3.3 Information processed through AI systems we build">
            <p>
              When we develop AI systems for clients, those systems may process data the client (or its end-users) provides — such as text inputs, uploaded documents, images, or other content. The nature of that data varies by project and is governed by our agreement with the client.
            </p>
          </SubSection>
        </Section>

        {/* Section 4 */}
        <Section title="4. How We Use Your Information">
          <p>We use information for the following purposes:</p>
          <Ul items={[
            <><strong className="text-foreground">To respond to inquiries</strong> and follow up on contact-form submissions, calls, and emails.</>,
            <><strong className="text-foreground">To deliver our services</strong> — design, build, deploy, support, and improve the AI systems and consulting deliverables you&rsquo;ve engaged us for.</>,
            <><strong className="text-foreground">To manage our business</strong> — invoicing, payments, accounting, tax compliance (including retention required under Canadian tax law), and contract management.</>,
            <><strong className="text-foreground">To send marketing communications</strong> — newsletters and direct outreach to businesses we believe may benefit from our services. You can unsubscribe at any time (see Section 9).</>,
            <><strong className="text-foreground">To improve our internal tooling, prompts, and processes</strong> in aggregated or anonymized form. We may study patterns across our work to refine our methods, but we do not use any client data to train or fine-tune AI models (see Section 5).</>,
            <><strong className="text-foreground">To secure our systems</strong> and detect, prevent, and respond to fraud, abuse, or security incidents.</>,
            <><strong className="text-foreground">To comply with legal obligations</strong>, respond to lawful requests, and enforce our agreements.</>,
          ]} />
          <div className="bg-secondary/30 border border-border/50 rounded-xl p-5 text-sm">
            <p className="font-semibold text-foreground mb-2">Legal bases (GDPR/UK GDPR)</p>
            <p>
              Where EU/UK data protection law applies, we rely on: (a) your <strong className="text-foreground">consent</strong> for marketing emails to individuals and for any optional cookies; (b) <strong className="text-foreground">performance of a contract</strong> to deliver services to clients; (c) our <strong className="text-foreground">legitimate interests</strong> in running and growing our business, securing our systems, and conducting B2B outreach; and (d) <strong className="text-foreground">legal obligations</strong> for tax, accounting, and compliance.
            </p>
          </div>
        </Section>

        {/* Section 5 */}
        <Section title="5. AI-Specific Practices">
          <p>Because we are an AI agency, we want to be explicit about how we handle data in AI workflows.</p>
          <SubSection title="5.1 We do not train or fine-tune models on client data">
            <p>
              We do <strong className="text-foreground">not</strong> use client data — or data processed through systems we build for clients — to train, fine-tune, or otherwise improve any AI model, whether ours or a third party&rsquo;s. Client data is used solely to deliver the services contracted by that client.
            </p>
          </SubSection>
          <SubSection title="5.2 Internal improvements use only aggregated or anonymized information">
            <p>
              We may use <strong className="text-foreground">aggregated, anonymized, or de-identified</strong> information about our work (e.g., performance benchmarks, prompt structures, common failure patterns) to improve our internal methodology, prompts, and tooling. This information cannot reasonably be used to identify any individual or client.
            </p>
          </SubSection>
          <SubSection title="5.3 No automated decisions with legal or significant effects">
            <p>
              The AI systems we build and operate do not, on our behalf, make automated decisions that produce legal or similarly significant effects on individuals (within the meaning of GDPR Article 22). If a client deploys a system we built in a way that produces such effects, the client — as data controller — is responsible for the appropriate disclosures, safeguards, and human-review mechanisms.
            </p>
          </SubSection>
          <SubSection title="5.4 AI sub-processors">
            <p>When delivering services, we may route data through the following AI infrastructure providers under their respective business / API terms (which generally prohibit training on customer inputs):</p>
            <Ul items={[
              <><strong className="text-foreground">Amazon Web Services (AWS)</strong>, including Amazon Bedrock</>,
              <><strong className="text-foreground">Anthropic</strong></>,
              <><strong className="text-foreground">OpenAI</strong></>,
            ]} />
            <p>
              We select providers whose terms align with our commitment not to permit training on client data, and we configure our integrations accordingly.
            </p>
          </SubSection>
        </Section>

        {/* Section 6 */}
        <Section title="6. Third-Party Service Providers">
          <p>
            We use the following service providers to operate our business. Each receives only the information needed to perform its function and is bound by its own privacy and security commitments:
          </p>
          <div className="overflow-x-auto rounded-xl border border-border/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/50 border-b border-border/50">
                  <th className="px-5 py-3 text-left font-semibold text-foreground">Provider</th>
                  <th className="px-5 py-3 text-left font-semibold text-foreground">Purpose</th>
                  <th className="px-5 py-3 text-left font-semibold text-foreground">Data involved</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {[
                  ["Vercel", "Website hosting and security logs", "Visitor IP, request metadata"],
                  ["Google Workspace", "Email, calendar, document storage", "Communications, files we exchange"],
                  ["HighLevel", "CRM and scheduling", "Contact and lead information, communications"],
                  ["Stripe", "Card payments", "Billing details (cardholder data handled directly by Stripe)"],
                  ["Wise", "International transfers", "Billing/banking details (handled directly by Wise)"],
                  ["AWS, Anthropic, OpenAI", "AI model and infrastructure providers (see Section 5.4)", "Project-specific inputs as required to deliver services"],
                  ["Direct invoicing partners", "Bookkeeping, tax filing, payment processing", "Billing and accounting records"],
                ].map(([provider, purpose, data]) => (
                  <tr key={provider} className="hover:bg-secondary/20 transition-colors">
                    <td className="px-5 py-3 font-medium text-foreground whitespace-nowrap">{provider}</td>
                    <td className="px-5 py-3 text-muted-foreground">{purpose}</td>
                    <td className="px-5 py-3 text-muted-foreground">{data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            We do <strong className="text-foreground">not</strong> sell your personal information, and we do <strong className="text-foreground">not</strong> share it with third parties for their own marketing purposes.
          </p>
        </Section>

        {/* Section 7 */}
        <Section title="7. International Data Transfers">
          <p>
            We are based in Canada. Several of our service providers — including AWS, Anthropic, OpenAI, Stripe, Vercel, Google, and HighLevel — are located in or transfer data to the <strong className="text-foreground">United States</strong> and other countries.
          </p>
          <p>
            For transfers of personal data from the <strong className="text-foreground">European Economic Area, the United Kingdom, or Switzerland</strong>, we rely on appropriate safeguards, including the <strong className="text-foreground">European Commission&rsquo;s Standard Contractual Clauses (SCCs)</strong> (and the UK International Data Transfer Addendum where applicable), together with supplementary measures where needed.
          </p>
          <p>
            For transfers from <strong className="text-foreground">Canada</strong>, we comply with PIPEDA&rsquo;s accountability requirements: we use contractual measures to ensure transferred information receives a comparable level of protection.
          </p>
          <p>
            You can request more information about the specific safeguards in place by emailing{" "}
            <a href="mailto:taha@agentarc.dev" className="text-blue-400 hover:text-blue-300 transition-colors">taha@agentarc.dev</a>.
          </p>
        </Section>

        {/* Section 8 */}
        <Section title="8. How Long We Keep Your Information">
          <p>We retain personal information only as long as necessary for the purposes described in this policy or as required by law:</p>
          <Ul items={[
            <><strong className="text-foreground">Lead and prospect data:</strong> up to 24 months after our last meaningful contact, then deleted or anonymized.</>,
            <><strong className="text-foreground">Client project data:</strong> for the duration of the engagement and up to 7 years after the engagement ends, to satisfy Canadian tax-record retention requirements and to support warranty, audit, and legal-defense needs. Clients may request earlier deletion of project materials that are not required for tax or legal purposes.</>,
            <><strong className="text-foreground">Billing and tax records:</strong> 7 years from the end of the relevant tax year.</>,
            <><strong className="text-foreground">Website hosting and security logs:</strong> retained by Vercel under its standard retention windows (typically short — days to weeks).</>,
            <><strong className="text-foreground">Marketing list data:</strong> until you unsubscribe, plus a brief suppression-list retention so we honour your unsubscribe request going forward.</>,
            <><strong className="text-foreground">Aggregated or anonymized data:</strong> may be retained indefinitely, since it is no longer personal information.</>,
          ]} />
          <p>When the retention period ends, we delete, destroy, or anonymize the information.</p>
        </Section>

        {/* Section 9 */}
        <Section title="9. Marketing and CASL Compliance">
          <p>We send newsletters and conduct B2B outreach to businesses we believe may benefit from our services.</p>
          <Ul items={[
            "Every commercial electronic message we send identifies us, includes our mailing address, and contains a working unsubscribe link or instruction.",
            <>We honour unsubscribe requests promptly (and within the 10-business-day window required by Canada&rsquo;s Anti-Spam Legislation, <strong className="text-foreground">CASL</strong>).</>,
            "For recipients in the EEA/UK and other consent-based jurisdictions, we obtain consent where required.",
            <>You can unsubscribe at any time by clicking the unsubscribe link in any of our emails or emailing <a href="mailto:taha@agentarc.dev" className="text-blue-400 hover:text-blue-300 transition-colors">taha@agentarc.dev</a> with the word &ldquo;unsubscribe.&rdquo;</>,
          ]} />
        </Section>

        {/* Section 10 */}
        <Section title="10. Your Rights">
          <p>Depending on where you live, you may have the following rights over your personal information:</p>
          <Ul items={[
            <><strong className="text-foreground">Access</strong> — request a copy of the personal information we hold about you.</>,
            <><strong className="text-foreground">Correction</strong> — ask us to fix inaccurate or incomplete information.</>,
            <><strong className="text-foreground">Deletion / erasure</strong> — ask us to delete your information (subject to legal retention obligations).</>,
            <><strong className="text-foreground">Restriction or objection</strong> — ask us to limit or stop certain processing.</>,
            <><strong className="text-foreground">Portability</strong> — receive your information in a portable format.</>,
            <><strong className="text-foreground">Withdraw consent</strong> — where we rely on consent, withdraw it at any time without affecting prior processing.</>,
            <><strong className="text-foreground">Opt out of marketing</strong> — at any time, with no effect on our services to you.</>,
            <><strong className="text-foreground">Lodge a complaint</strong> with a supervisory authority — for EU/UK residents, your local Data Protection Authority; for Canadians, the <strong className="text-foreground">Office of the Privacy Commissioner of Canada (OPC)</strong>; for Ontario residents, the <strong className="text-foreground">Information and Privacy Commissioner of Ontario</strong> where applicable.</>,
          ]} />

          <SubSection title="California residents (CCPA/CPRA)">
            <p>
              If you are a California resident, you have additional rights, including the right to know what personal information we collect, to request deletion or correction, to opt out of &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal information (we do <strong className="text-foreground">not</strong> sell or share personal information as those terms are defined under California law), and to be free from discrimination for exercising your rights. We do not use or disclose <strong className="text-foreground">sensitive personal information</strong> for purposes beyond those permitted by the CPRA.
            </p>
          </SubSection>

          <SubSection title="How to exercise your rights">
            <p>
              Email <a href="mailto:taha@agentarc.dev" className="text-blue-400 hover:text-blue-300 transition-colors">taha@agentarc.dev</a> with &ldquo;Privacy Request&rdquo; in the subject line. We will verify your identity and respond within the timelines required by applicable law — generally <strong className="text-foreground">30 days</strong> under PIPEDA and GDPR, and <strong className="text-foreground">45 days</strong> under the CCPA, with extensions where permitted.
            </p>
            <p>
              If you are an end-user of a product or service we built for a client, please contact that client first. We will support them in responding to your request.
            </p>
          </SubSection>
        </Section>

        {/* Section 11 */}
        <Section title="11. How We Protect Your Information">
          <p>We use reasonable administrative, technical, and physical safeguards to protect personal information, including:</p>
          <Ul items={[
            "Encryption in transit (TLS) and, where supported by our providers, encryption at rest.",
            "Access controls, least-privilege permissions, and authentication on accounts handling client data.",
            "Secrets management for API keys and credentials.",
            "Vetting of sub-processors and use of providers with established security programs (SOC 2, ISO 27001, or equivalent where available).",
            "Confidentiality obligations on all personnel and contractors.",
            "Routine review of our practices and prompt investigation of suspected incidents.",
          ]} />
          <p>
            No system is perfectly secure. If we become aware of a breach affecting your personal information, we will notify you and the relevant regulators in accordance with applicable law.
          </p>
        </Section>

        {/* Section 12 */}
        <Section title="12. Children's Privacy">
          <p>
            Our services are directed at businesses, not children. We do not knowingly collect personal information from anyone under 16. If you believe a child has provided us with personal information, contact{" "}
            <a href="mailto:taha@agentarc.dev" className="text-blue-400 hover:text-blue-300 transition-colors">taha@agentarc.dev</a>{" "}
            and we will delete it.
          </p>
        </Section>

        {/* Section 13 */}
        <Section title="13. Third-Party Links">
          <p>
            Our website and communications may contain links to third-party sites. We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies.
          </p>
        </Section>

        {/* Section 14 */}
        <Section title="14. Changes to This Policy">
          <p>
            We may update this policy from time to time. When we make material changes, we will update the &ldquo;Last Updated&rdquo; date above and, where appropriate, provide additional notice (for example, by email or a prominent notice on the website). Your continued use of our services after the update means you accept the revised policy.
          </p>
        </Section>

        {/* Section 15 */}
        <Section title="15. Contact">
          <p>
            For any questions, requests, or complaints about this Privacy Policy or our handling of your personal information:
          </p>
          <div className="bg-secondary/30 border border-border/50 rounded-xl p-6 space-y-2 text-sm">
            <p className="font-semibold text-foreground">AI RenoSystems Inc. (operating as AgentArc)</p>
            <p>
              <strong className="text-foreground">Email:</strong>{" "}
              <a href="mailto:taha@agentarc.dev" className="text-blue-400 hover:text-blue-300 transition-colors">
                taha@agentarc.dev
              </a>{" "}
              <span className="text-muted-foreground">(subject line: &ldquo;Privacy Request&rdquo;)</span>
            </p>
          </div>
        </Section>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-muted-foreground/60 text-sm italic">
            This policy is provided for informational purposes and does not constitute legal advice. Before publishing, we recommend a one-time review by a Canadian privacy lawyer familiar with PIPEDA, GDPR, and CCPA, particularly given the cross-border data flows inherent to AI services.
          </p>
          <div className="mt-8">
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
              ← Back to AgentArc
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
