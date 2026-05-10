import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | AgentArc",
  description:
    "AgentArc terms of service — the agreement governing use of our website and AI consulting services.",
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

function PartHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="my-12 py-6 border-y border-border/50">
      <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-1">{title}</p>
      <p className="text-muted-foreground text-sm">{subtitle}</p>
    </div>
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

function Ol({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="space-y-2 list-none">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-blue-500 font-semibold shrink-0 min-w-[1.25rem]">{i + 1}.</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-sm">
            Effective Date: May 9, 2026 &nbsp;·&nbsp; Last Updated: May 9, 2026
          </p>
        </div>

        {/* Intro */}
        <div className="mb-12 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            These Terms of Service (&ldquo;<strong className="text-foreground">Terms</strong>&rdquo;) are a binding agreement between{" "}
            <strong className="text-foreground">AI RenoSystems Inc.</strong>, an Ontario corporation operating as{" "}
            <strong className="text-foreground">AgentArc</strong> (&ldquo;<strong className="text-foreground">AgentArc</strong>,&rdquo; &ldquo;<strong className="text-foreground">we</strong>,&rdquo; &ldquo;<strong className="text-foreground">us</strong>,&rdquo; or &ldquo;<strong className="text-foreground">our</strong>&rdquo;), and the business that uses our website or engages us for services (&ldquo;<strong className="text-foreground">Client</strong>,&rdquo; &ldquo;<strong className="text-foreground">you</strong>,&rdquo; or &ldquo;<strong className="text-foreground">your</strong>&rdquo;).
          </p>
          <p>
            By visiting{" "}
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">agentarc.dev</Link>,
            submitting a contact form, signing a proposal or Statement of Work, or otherwise using our services, you agree to these Terms. If you do not agree, do not use the website or engage us.
          </p>
          <p>These Terms cover two things:</p>
          <Ul items={[
            <><strong className="text-foreground">Part A — Website Use:</strong> rules that apply to anyone visiting agentarc.dev.</>,
            <><strong className="text-foreground">Part B — Services Engagements:</strong> the default contract terms that apply when we deliver consulting, AI development, design, or related services to a client. A signed proposal or Statement of Work (&ldquo;<strong className="text-foreground">SOW</strong>&rdquo;) may incorporate or modify these terms.</>,
          ]} />
          <p>If a signed SOW or written agreement between us conflicts with these Terms, the signed document controls for that engagement.</p>
        </div>

        <div className="h-px bg-border/50 mb-12" />

        {/* Section 1 — Definitions */}
        <Section title="1. Definitions">
          <Ul items={[
            <><strong className="text-foreground">&ldquo;Services&rdquo;</strong> means the consulting, AI development, software engineering, design, and related professional services AgentArc provides under an SOW.</>,
            <><strong className="text-foreground">&ldquo;Deliverables&rdquo;</strong> means the specific work product identified in an SOW that AgentArc creates for a Client (for example, custom code, configurations, prompts, agents, and documentation built for that engagement).</>,
            <><strong className="text-foreground">&ldquo;AgentArc IP&rdquo;</strong> means our pre-existing tools, frameworks, methodologies, prompt libraries, internal scripts, code components, and know-how — including improvements developed independently of any specific Client engagement.</>,
            <><strong className="text-foreground">&ldquo;AI Outputs&rdquo;</strong> means content generated by AI systems we build or operate (text, code, images, summaries, recommendations, etc.).</>,
            <><strong className="text-foreground">&ldquo;SOW&rdquo;</strong> means a Statement of Work, proposal, order form, or similar written document signed or accepted in writing by both parties that defines scope, fees, and timeline for a specific engagement.</>,
          ]} />
        </Section>

        <PartHeading title="Part A" subtitle="Website Use — rules that apply to anyone visiting agentarc.dev." />

        {/* Section 2 */}
        <Section title="2. Eligibility">
          <p>
            The website is intended for <strong className="text-foreground">business use by individuals 18 years of age or older</strong> who have the authority to act on behalf of a company or other legal entity. By using the website, you confirm you meet these requirements.
          </p>
          <p>
            You may not use the website if you are located in, or are a resident of, any country or region subject to comprehensive trade sanctions by Canada, the United States, or the United Nations, or if you are on any restricted-party or denied-persons list maintained by those authorities.
          </p>
        </Section>

        {/* Section 3 */}
        <Section title="3. Permitted Use of the Website">
          <p>You may view our website, read our content, and submit inquiries through the forms or contact details we provide. You may not:</p>
          <Ul items={[
            "Use the site to harm, defraud, or mislead others.",
            "Attempt to access non-public areas, accounts, or systems.",
            "Probe, scan, or test for vulnerabilities, or otherwise circumvent security measures.",
            <>Scrape, crawl, or use automated tools to extract content beyond what is permitted by our <code className="text-blue-400 text-sm">robots.txt</code> or applicable law.</>,
            "Use the site to train AI models on our content without our written permission.",
            "Misrepresent your identity or affiliation.",
          ]} />
        </Section>

        {/* Section 4 */}
        <Section title="4. Our Website Content">
          <p>
            All content on agentarc.dev — including text, graphics, logos, code samples, case studies, and design — is owned by AgentArc or licensed to us, and is protected by copyright and other intellectual-property laws. We grant you a limited, revocable, non-exclusive, non-transferable license to view the content for legitimate evaluation of our services. All other rights are reserved.
          </p>
        </Section>

        {/* Section 5 */}
        <Section title="5. Third-Party Links">
          <p>
            The website may link to third-party sites. We do not control and are not responsible for those sites or their content.
          </p>
        </Section>

        <PartHeading title="Part B" subtitle="Services Engagements — applies when AgentArc delivers Services to a Client under an SOW." />

        {/* Section 6 */}
        <Section title="6. Engagement Structure">
          <p>Each engagement is governed by:</p>
          <Ol items={[
            "The signed SOW (controls in case of conflict);",
            "These Terms; and",
            "Any Data Processing Addendum or other written agreements between us.",
          ]} />
          <p>The SOW will set out scope, deliverables, timeline, fees, and any project-specific terms. If something is not addressed in the SOW, these Terms apply.</p>
        </Section>

        {/* Section 7 */}
        <Section title="7. Client Eligibility and Authority">
          <p>Services are provided to <strong className="text-foreground">businesses only</strong>. By signing an SOW or otherwise engaging us, you represent that:</p>
          <Ul items={[
            "You are at least 18 years old.",
            "You have the authority to bind the entity you represent.",
            "You are not located in, and will not use the Services from, a comprehensively sanctioned jurisdiction.",
            "The information you provide is accurate and complete.",
          ]} />
        </Section>

        {/* Section 8 */}
        <Section title="8. Fees and Payment">
          {[
            { label: "8.1 Fees.", text: "Fees are set in each SOW. Currency is specified in the SOW." },
            { label: "8.2 Invoicing.", text: "Unless the SOW says otherwise, AgentArc issues invoices according to the milestones or schedule set out in the SOW. Payment is due Net 7 from the invoice date." },
            { label: "8.3 Deposits and milestones.", text: "Where the SOW requires a deposit or milestone payment, work on the relevant phase will not begin (or continue) until that payment clears." },
            { label: "8.4 Taxes.", text: "Fees are exclusive of HST, GST, sales tax, VAT, and any other taxes, levies, or duties, which the Client is responsible for paying except taxes on AgentArc's net income." },
            { label: "8.5 Expenses.", text: "Pre-approved out-of-pocket expenses (e.g., third-party API costs, software licenses, travel) are billed at cost unless the SOW states otherwise." },
          ].map(({ label, text }) => (
            <p key={label}><strong className="text-foreground">{label}</strong> {text}</p>
          ))}
          <p>
            <strong className="text-foreground">8.6 No refunds.</strong> All fees are <strong className="text-foreground">non-refundable</strong> once paid. This reflects the bespoke, time-and-skill-intensive nature of our work. If we fail to deliver something we committed to in writing, we will work in good faith to remedy the issue (including re-performing the affected work) before any refund discussion.
          </p>
          <p>
            <strong className="text-foreground">8.7 Suspension for non-payment.</strong> If an invoice is more than <strong className="text-foreground">15 days overdue</strong>, we may suspend Services until paid. Suspension does not extend deadlines or relieve the Client of payment obligations.
          </p>
          <p>
            <strong className="text-foreground">8.8 Payment processors.</strong> Payments may be processed through Stripe, Wise, or direct bank transfer, as specified in the SOW or invoice.
          </p>
        </Section>

        {/* Section 9 */}
        <Section title="9. Client Responsibilities">
          <p>To deliver well, we need timely cooperation. The Client agrees to:</p>
          <Ul items={[
            "Provide accurate requirements, materials, access credentials, and feedback within reasonable timeframes.",
            "Designate a primary point of contact with authority to make decisions for the engagement.",
            "Ensure that any data, content, or materials it provides do not infringe third-party rights and comply with applicable laws.",
            "Use any Deliverables and AI systems lawfully, including in compliance with all laws and regulations applicable to the Client's industry (such as healthcare, legal, financial-services, or consumer-protection regulations).",
            "Conduct appropriate human review of AI Outputs before relying on them for decisions that affect people, finances, safety, or legal rights.",
          ]} />
        </Section>

        {/* Section 10 */}
        <Section title="10. Acceptable Use of AI Systems">
          <p>The Client (and any end-users it permits) may not use AgentArc-built or AgentArc-hosted AI systems to:</p>
          <Ul items={[
            "Generate, distribute, or facilitate illegal content, including child sexual abuse material.",
            "Produce instructions or designs for weapons capable of mass casualties (chemical, biological, radiological, nuclear, or high-yield explosive).",
            "Create deceptive deepfakes, impersonations, or non-consensual intimate imagery of real persons.",
            "Conduct unlawful surveillance, harassment, stalking, or doxxing.",
            "Generate content intended to defraud, deceive, or manipulate people in violation of consumer-protection or anti-fraud laws.",
            "Circumvent security measures, exfiltrate confidential data, or violate the terms of any underlying AI provider (Anthropic, OpenAI, AWS, etc.).",
            "Generate content that infringes intellectual-property rights or violates privacy laws.",
          ]} />
          <p>
            We may <strong className="text-foreground">suspend or terminate</strong> Services immediately, with notice where practical, if we reasonably believe the Client or its end-users are violating this section. Suspension or termination under this section does not entitle the Client to a refund.
          </p>
        </Section>

        {/* Section 11 */}
        <Section title="11. Intellectual Property">
          <SubSection title="11.1 Custom Deliverables">
            <p>Subject to full payment of all fees due under the applicable SOW, AgentArc assigns to the Client all right, title, and interest in the <strong className="text-foreground">custom Deliverables</strong> specifically created for that engagement.</p>
          </SubSection>
          <SubSection title="11.2 AgentArc IP">
            <p>AgentArc retains all right, title, and interest in <strong className="text-foreground">AgentArc IP</strong>, including any tools, frameworks, libraries, prompt patterns, methodologies, scripts, and components that pre-existed the engagement or were developed independently. To the extent AgentArc IP is incorporated into a Deliverable, AgentArc grants the Client a worldwide, perpetual, non-exclusive, royalty-free, non-transferable license to use that AgentArc IP <strong className="text-foreground">as part of, and solely for the operation of</strong>, the Deliverable. The Client may not extract, sublicense, resell, or repackage AgentArc IP separately from the Deliverable.</p>
          </SubSection>
          <SubSection title="11.3 AI Outputs">
            <p>As between AgentArc and the Client, the Client owns the <strong className="text-foreground">AI Outputs</strong> generated by Deliverables in the course of the Client&rsquo;s lawful use, to the extent such ownership is legally possible. The Client acknowledges that AI Outputs are not always copyrightable, may be similar to outputs generated for others, and may not be exclusive.</p>
          </SubSection>
          <SubSection title="11.4 Client Materials">
            <p>The Client retains ownership of all data, content, and materials it provides (&ldquo;<strong className="text-foreground">Client Materials</strong>&rdquo;). The Client grants AgentArc a limited license to use Client Materials solely to deliver the Services.</p>
          </SubSection>
          <SubSection title="11.5 Feedback">
            <p>If the Client provides suggestions, ideas, or feedback about our methodology, tools, or services, AgentArc may use that feedback freely, without obligation, to improve its offerings.</p>
          </SubSection>
          <SubSection title="11.6 Portfolio and case-study rights">
            <p>
              AgentArc may use the Client&rsquo;s name and logo, and describe the Services performed in <strong className="text-foreground">anonymized or aggregated form</strong>, in its portfolio, case studies, marketing materials, and proposals. The Client may opt out by emailing{" "}
              <a href="mailto:taha@agentarc.dev" className="text-blue-400 hover:text-blue-300 transition-colors">taha@agentarc.dev</a>{" "}
              at any time. AgentArc will not disclose Client confidential information or specific commercial terms in such materials without prior written consent.
            </p>
          </SubSection>
        </Section>

        {/* Section 12 */}
        <Section title="12. AI-Specific Disclaimers">
          <p>The Client understands and agrees that:</p>
          <Ul items={[
            <><strong className="text-foreground">AI is probabilistic.</strong> AI Outputs may be inaccurate, incomplete, biased, outdated, or fabricated (&ldquo;hallucinated&rdquo;). Outputs should be reviewed by qualified humans before being relied upon for decisions that affect people, finances, safety, legal rights, or regulatory compliance.</>,
            <><strong className="text-foreground">No guaranteed outcomes.</strong> Unless explicitly stated in an SOW, AgentArc makes no guarantees about specific business outcomes — revenue lift, accuracy percentages, conversion rates, cost savings, latency, or similar metrics.</>,
            <><strong className="text-foreground">Third-party model dependencies.</strong> AgentArc&rsquo;s Deliverables often depend on third-party AI providers (including Anthropic, OpenAI, and AWS). AgentArc is not responsible for outages, deprecations, model changes, content-policy changes, rate limits, or pricing changes by those providers. AgentArc will use commercially reasonable efforts to migrate or adapt Deliverables when notified of material provider changes, subject to a change order if scope materially changes.</>,
            <><strong className="text-foreground">No legal, medical, financial, or professional advice.</strong> AI Outputs do not constitute legal, medical, financial, tax, or other professional advice. The Client is responsible for engaging qualified professionals where needed.</>,
            <><strong className="text-foreground">Industry compliance.</strong> The Client is responsible for ensuring its use of any Deliverable complies with the laws applicable to its industry, including healthcare (e.g., HIPAA, PHIPA), financial services, education, consumer protection, and advertising standards.</>,
          ]} />
        </Section>

        {/* Section 13 */}
        <Section title="13. Confidentiality">
          <SubSection title="13.1 Definition">
            <p>&ldquo;<strong className="text-foreground">Confidential Information</strong>&rdquo; means non-public information disclosed by one party to the other in connection with the Services that is marked or reasonably understood to be confidential, including business plans, technical information, customer lists, pricing, strategies, source code, prompts, and Client Materials.</p>
          </SubSection>
          <SubSection title="13.2 Obligations">
            <p>Each party will: (a) use the other party&rsquo;s Confidential Information only to perform under these Terms; (b) protect it with at least the same care it uses for its own confidential information (and no less than reasonable care); and (c) limit access to its personnel and contractors who have a need to know and are bound by comparable confidentiality obligations.</p>
          </SubSection>
          <SubSection title="13.3 Exceptions">
            <p>Confidential Information does not include information that is (a) publicly available without breach of this section, (b) already known to the recipient without confidentiality obligation, (c) independently developed without use of the disclosing party&rsquo;s Confidential Information, or (d) rightfully received from a third party without confidentiality obligation.</p>
          </SubSection>
          <SubSection title="13.4 Compelled disclosure">
            <p>A party may disclose Confidential Information to the extent legally compelled, after giving the other party reasonable advance notice (where lawful) so it can seek protective measures.</p>
          </SubSection>
          <SubSection title="13.5 Survival">
            <p>This section survives termination for <strong className="text-foreground">three (3) years</strong>, except for trade secrets, which remain protected for as long as they qualify as trade secrets under applicable law.</p>
          </SubSection>
        </Section>

        {/* Section 14 */}
        <Section title="14. Personal Data and Privacy">
          <p>
            If AgentArc processes personal data on the Client&rsquo;s behalf in delivering the Services, AgentArc acts as a <strong className="text-foreground">data processor</strong> and the Client acts as the <strong className="text-foreground">data controller</strong>. Where personal data is involved, the parties will sign a <strong className="text-foreground">Data Processing Addendum (DPA)</strong> that governs that processing. AgentArc&rsquo;s general handling of information is described in our{" "}
            <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</Link>.
          </p>
        </Section>

        {/* Section 15 */}
        <Section title="15. Non-Solicitation">
          <p>
            During the engagement and for <strong className="text-foreground">twelve (12) months</strong> after it ends, the Client agrees not to directly or indirectly solicit for employment or independent contract any AgentArc employee, subcontractor, or principal who was materially involved in the Services. General job advertisements not specifically targeted at such persons are not a violation. If the Client breaches this section, the Client agrees to pay AgentArc a placement fee equal to <strong className="text-foreground">fifty percent (50%)</strong> of the solicited person&rsquo;s annualized compensation, as liquidated damages reflecting AgentArc&rsquo;s recruiting and training investment.
          </p>
        </Section>

        {/* Section 16 */}
        <Section title="16. Communication and Change Management">
          <p>
            <strong className="text-foreground">16.1 Communication norms.</strong> Unless an SOW says otherwise, AgentArc operates <strong className="text-foreground">async-first</strong> with response targets of <strong className="text-foreground">one (1) business day</strong> during standard business hours (Eastern Time, Monday–Friday, excluding Ontario statutory holidays). Live meetings are scheduled in advance.
          </p>
          <p>
            <strong className="text-foreground">16.2 Out-of-scope work.</strong> Requests outside the scope of an active SOW will be handled through a <strong className="text-foreground">change order</strong>, which sets out the additional scope, fees, and timeline impact. We will not perform out-of-scope work without a written change order.
          </p>
        </Section>

        {/* Section 17 */}
        <Section title="17. Term, Suspension, and Termination">
          <p><strong className="text-foreground">17.1 Term.</strong> Each engagement begins on the SOW effective date and continues until the Services are completed or the SOW is terminated.</p>
          <p><strong className="text-foreground">17.2 Termination for convenience.</strong> Either party may terminate an SOW for convenience on <strong className="text-foreground">fourteen (14) days&rsquo; written notice</strong>. The Client remains responsible for fees for all Services performed and expenses committed up to the effective date of termination.</p>
          <p><strong className="text-foreground">17.3 Termination for cause.</strong> Either party may terminate immediately if the other party materially breaches these Terms or an SOW and fails to cure the breach within <strong className="text-foreground">fifteen (15) days</strong> of written notice (or sooner where the breach cannot reasonably be cured, including violations of Section 10, fraud, or insolvency).</p>
          <p><strong className="text-foreground">17.4 Effect of termination.</strong> On termination: (a) AgentArc will deliver any Deliverables for which payment has been made in full; (b) the Client will pay all undisputed outstanding amounts within <strong className="text-foreground">seven (7) days</strong>; (c) each party will return or destroy the other party&rsquo;s Confidential Information on request; and (d) the rights granted in Section 11 vest only for paid-for Deliverables.</p>
          <p><strong className="text-foreground">17.5 Survival.</strong> Sections that by their nature should survive termination (including 8 (for accrued fees), 11, 12, 13, 15, 18, 19, 20, 21, and 22) survive.</p>
        </Section>

        {/* Section 18 */}
        <Section title="18. Warranties and Disclaimers">
          <p><strong className="text-foreground">18.1 Mutual warranties.</strong> Each party warrants that it has the authority to enter into these Terms and will perform its obligations in compliance with applicable law.</p>
          <p><strong className="text-foreground">18.2 Service warranty.</strong> AgentArc warrants it will perform Services in a professional and workmanlike manner consistent with industry standards. The Client&rsquo;s exclusive remedy for breach of this warranty is re-performance of the affected Services within a reasonable time.</p>
          <div className="bg-secondary/30 border border-border/50 rounded-xl p-5 text-sm">
            <p className="font-semibold text-foreground mb-2">18.3 Disclaimer</p>
            <p className="uppercase text-xs leading-relaxed">
              Except as expressly set out in these Terms or an SOW, the website, services, deliverables, and AI outputs are provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; AgentArc disclaims all other warranties, express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, reliability, uninterrupted operation, and that AI outputs will be correct, complete, or fit for the Client&rsquo;s use. Some jurisdictions do not allow disclaimer of implied warranties; in those jurisdictions, our liability is limited to the maximum extent permitted by law.
            </p>
          </div>
        </Section>

        {/* Section 19 */}
        <Section title="19. Limitation of Liability">
          <div className="bg-secondary/30 border border-border/50 rounded-xl p-5 text-sm space-y-4">
            <div>
              <p className="font-semibold text-foreground mb-1">19.1 Cap</p>
              <p className="uppercase text-xs leading-relaxed">
                Except for the excluded claims below, each party&rsquo;s total aggregate liability arising out of or relating to these Terms or any SOW is limited to the fees paid by the Client to AgentArc in the twelve (12) months immediately preceding the event giving rise to the claim.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">19.2 Excluded damages</p>
              <p className="uppercase text-xs leading-relaxed">
                Neither party is liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, lost revenue, lost goodwill, lost data, or business interruption, even if advised of the possibility of such damages.
              </p>
            </div>
          </div>
          <p>
            <strong className="text-foreground">19.3 Excluded claims.</strong> The cap and exclusions in 19.1 and 19.2 do <strong className="text-foreground">not</strong> apply to: (a) the Client&rsquo;s payment obligations; (b) breach of confidentiality (Section 13); (c) breach of Acceptable Use (Section 10); (d) a party&rsquo;s indemnification obligations; (e) infringement of the other party&rsquo;s intellectual-property rights; or (f) liability that cannot be limited under applicable law (including liability for fraud, gross negligence, or willful misconduct).
          </p>
          <p>
            <strong className="text-foreground">19.4 Allocation of risk.</strong> The Client acknowledges that the fees reflect the allocation of risk in this section, and that AgentArc would not enter into these Terms without these limitations.
          </p>
        </Section>

        {/* Section 20 */}
        <Section title="20. Indemnification">
          <p>
            <strong className="text-foreground">20.1 By the Client.</strong> The Client will defend, indemnify, and hold harmless AgentArc and its officers, employees, and contractors from any third-party claim arising out of: (a) Client Materials, including any claim that they infringe third-party rights; (b) the Client&rsquo;s use of Deliverables or AI Outputs in violation of these Terms or applicable law; (c) the Client&rsquo;s breach of Section 10 (Acceptable Use); or (d) the Client&rsquo;s failure to obtain consents required from its end-users.
          </p>
          <p>
            <strong className="text-foreground">20.2 By AgentArc.</strong> AgentArc will defend the Client against any third-party claim that the Deliverables, as delivered by AgentArc and used as permitted, infringe a third-party copyright or trade secret, and will pay damages and costs finally awarded (or reasonable settlements approved by AgentArc). AgentArc has no obligation under this section for claims arising from: (a) Client Materials; (b) modifications to Deliverables made by anyone other than AgentArc; (c) use of Deliverables in combination with anything not provided or approved by AgentArc; (d) AI Outputs; or (e) use of Deliverables outside the scope of the license or in violation of these Terms.
          </p>
          <p>
            <strong className="text-foreground">20.3 Process.</strong> The indemnified party must promptly notify the indemnifying party of the claim, give it sole control of the defense (provided it does not settle without consent for any non-monetary obligation on the indemnified party), and reasonably cooperate.
          </p>
        </Section>

        {/* Section 21 */}
        <Section title="21. Governing Law and Disputes">
          <p>
            <strong className="text-foreground">21.1 Governing law.</strong> These Terms and any SOW are governed by the laws of the <strong className="text-foreground">Province of Ontario</strong> and the federal laws of Canada applicable therein, without regard to conflicts-of-law rules. The United Nations Convention on Contracts for the International Sale of Goods does not apply.
          </p>
          <p>
            <strong className="text-foreground">21.2 Forum.</strong> The parties submit to the <strong className="text-foreground">exclusive jurisdiction of the courts located in Toronto, Ontario</strong> for any dispute arising out of or relating to these Terms, except that either party may seek injunctive or other equitable relief in any court of competent jurisdiction to protect its intellectual property or confidential information.
          </p>
          <p>
            <strong className="text-foreground">21.3 Good-faith resolution.</strong> Before filing suit (other than for injunctive relief), the parties will attempt in good faith to resolve any dispute through written notice and discussion between senior representatives for at least <strong className="text-foreground">thirty (30) days</strong>.
          </p>
        </Section>

        {/* Section 22 */}
        <Section title="22. General">
          {[
            { label: "22.1 Entire agreement.", text: "These Terms, together with any signed SOW, DPA, and the Privacy Policy, are the entire agreement between the parties on this subject and supersede all prior or contemporaneous discussions and agreements." },
            { label: "22.2 Order of precedence.", text: "In case of conflict: (a) a signed SOW or DPA, then (b) these Terms, then (c) any policy referenced in these Terms." },
            { label: "22.3 Amendments.", text: "We may update these Terms by posting a revised version with a new \"Last Updated\" date. Material changes will not apply retroactively to existing SOWs without the Client's written agreement." },
            { label: "22.4 Assignment.", text: "Neither party may assign these Terms or an SOW without the other's prior written consent, except either party may assign to a successor in connection with a merger, acquisition, or sale of substantially all assets." },
            { label: "22.5 Subcontractors.", text: "AgentArc may use subcontractors to perform Services and remains responsible for their performance and compliance with these Terms." },
            { label: "22.6 Independent contractors.", text: "The parties are independent contractors. Nothing in these Terms creates a partnership, joint venture, agency, or employment relationship." },
            { label: "22.7 Force majeure.", text: "Neither party is liable for any delay or failure to perform (other than payment obligations) caused by events beyond its reasonable control, including natural disasters, war, civil unrest, government actions, internet or infrastructure failures, and large-scale third-party AI provider outages." },
            { label: "22.8 Notices.", text: "Notices must be in writing and sent by email to taha@agentarc.dev (for AgentArc) or to the Client's primary contact email on file. Notices are deemed received on the next business day after sending, absent a bounce or delivery failure." },
            { label: "22.9 Severability.", text: "If any provision is held unenforceable, the remaining provisions remain in effect, and the unenforceable provision will be replaced with an enforceable one that most closely reflects the original intent." },
            { label: "22.10 No waiver.", text: "A failure or delay in enforcing a right is not a waiver of that right." },
            { label: "22.11 Headings.", text: "Headings are for convenience only and do not affect interpretation." },
          ].map(({ label, text }) => (
            <p key={label}><strong className="text-foreground">{label}</strong> {text}</p>
          ))}
          <p><strong className="text-foreground">22.12 Language.</strong> The parties have requested that these Terms be drafted in English. <em>Les parties ont exigé que la présente convention soit rédigée en anglais.</em></p>
        </Section>

        {/* Section 23 */}
        <Section title="23. Contact">
          <p>Questions about these Terms:</p>
          <div className="bg-secondary/30 border border-border/50 rounded-xl p-6 space-y-2 text-sm">
            <p className="font-semibold text-foreground">AI RenoSystems Inc. (operating as AgentArc)</p>
            <p>
              <strong className="text-foreground">Email:</strong>{" "}
              <a href="mailto:taha@agentarc.dev" className="text-blue-400 hover:text-blue-300 transition-colors">
                taha@agentarc.dev
              </a>
            </p>
          </div>
        </Section>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-muted-foreground/60 text-sm italic">
            These Terms are provided for informational purposes and do not constitute legal advice. Before publishing or relying on them in client engagements, we recommend a one-time review by an Ontario commercial lawyer familiar with SaaS and professional-services agreements, particularly regarding the IP assignment, indemnification, and liability provisions.
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
