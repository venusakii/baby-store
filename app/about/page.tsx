import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">About TheBabyStore</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We're passionate parents and experts dedicated to helping you find the safest, highest-quality baby
            products. Our mission is to make parenting easier through trusted reviews and recommendations.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TheBabyStore was founded in 2020 by a team of new parents who were overwhelmed by the countless baby
                  product options available online. We realized that finding safe, reliable, and effective baby products
                  shouldn't be so complicated.
                </p>
                <p>
                  What started as a small blog sharing our personal experiences has grown into a trusted resource for
                  thousands of parents worldwide. We test every product ourselves, consult with pediatric experts, and
                  gather feedback from real families.
                </p>
                <p>
                  Today, we're proud to be Amazon Associates, helping parents find the best products while earning a
                  small commission that supports our continued testing and review efforts.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8 flex items-center justify-center">
              <img
                src="/family-with-baby.png?height=300&width=400&query=happy family with baby products"
                alt="Happy family"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by these core principles that put your baby's safety and your peace of mind
              first
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Every product we recommend meets or exceeds safety standards and is thoroughly tested for quality.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Parent-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We understand the challenges of parenting and focus on products that make your life easier.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our reviews incorporate feedback from thousands of real parents in our community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Expert Backed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We work with pediatricians and child development experts to ensure our recommendations are sound.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Review Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a rigorous testing and review process to ensure you get honest, comprehensive insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold">Research & Selection</h3>
              <p className="text-muted-foreground">
                We research the market, consult experts, and select products based on safety standards and parent needs.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold">Hands-On Testing</h3>
              <p className="text-muted-foreground">
                Our team of parent reviewers tests each product extensively in real-world conditions with their babies.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold">Community Feedback</h3>
              <p className="text-muted-foreground">
                We gather feedback from our community of parents and incorporate their experiences into our reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by Thousands</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our growing community of parents relies on our reviews to make informed decisions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <p className="text-sm text-muted-foreground">Products Reviewed</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">10,000+</div>
              <p className="text-sm text-muted-foreground">Happy Families</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50,000+</div>
              <p className="text-sm text-muted-foreground">Monthly Visitors</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">4.9★</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Parents, experts, and advocates working together to help your family thrive
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & Lead Reviewer",
                bio: "Mother of two, former pediatric nurse with 10 years of experience in child safety.",
              },
              {
                name: "Mike Chen",
                role: "Product Testing Director",
                bio: "Father of three, mechanical engineer specializing in product safety and quality assurance.",
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Pediatric Consultant",
                bio: "Board-certified pediatrician and mother, ensuring all recommendations meet medical standards.",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="h-24 w-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <img
                      src={`/team-member.png?height=96&width=96&query=professional parent team member ${index + 1}`}
                      alt={member.name}
                      className="h-20 w-20 rounded-full"
                    />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
