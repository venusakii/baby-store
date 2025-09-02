import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using TheBabyStore.com (the "Service"), you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              TheBabyStore.com provides product reviews, recommendations, and information about baby products. We are
              participants in the Amazon Services LLC Associates Program and may earn commissions from qualifying
              purchases made through our affiliate links.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on TheBabyStore.com for
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The materials on TheBabyStore.com are provided on an 'as is' basis. TheBabyStore.com makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including
                without limitation, implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Further, TheBabyStore.com does not warrant or make any representations concerning the accuracy, likely
                results, or reliability of the use of the materials on its website or otherwise relating to such
                materials or on any sites linked to this site.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Amazon Associates Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              TheBabyStore.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
              program designed to provide a means for sites to earn advertising fees by advertising and linking to
              Amazon.com. We may earn a commission from qualifying purchases made through our affiliate links, at no
              additional cost to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Product Information</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                While we strive to provide accurate and up-to-date product information, we cannot guarantee that all
                product descriptions, images, prices, and other content are accurate, complete, reliable, current, or
                error-free.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our reviews and recommendations are based on our testing and research at the time of publication.
                Product specifications, availability, and prices may change without notice.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">User Content</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                By submitting content to our website (including comments, reviews, or contact form submissions), you
                grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and display
                such content.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for ensuring that any content you submit does not violate any third-party rights or
                applicable laws.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Prohibited Uses</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You may not use our service:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>
                To violate any international, federal, provincial, or state regulations, rules, laws, or local
                ordinances
              </li>
              <li>
                To infringe upon or violate our intellectual property rights or the intellectual property rights of
                others
              </li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall TheBabyStore.com or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on TheBabyStore.com, even if TheBabyStore.com or an authorized
              representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Accuracy of Materials</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials appearing on TheBabyStore.com could include technical, typographical, or photographic
              errors. TheBabyStore.com does not warrant that any of the materials on its website are accurate, complete,
              or current. TheBabyStore.com may make changes to the materials contained on its website at any time
              without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              TheBabyStore.com has not reviewed all of the sites linked to our website and is not responsible for the
              contents of any such linked site. The inclusion of any link does not imply endorsement by TheBabyStore.com
              of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              TheBabyStore.com may revise these terms of service for its website at any time without notice. By using
              this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the United States
              and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="text-muted-foreground">
                Email: legal@thebabystore.com
                <br />
                Website: thebabystore.com/contact
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <CookieBanner />
    </div>
  )
}
