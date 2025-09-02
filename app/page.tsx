import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Truck, Award, Users, Heart, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Premium Baby Products for Your Little One
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Discover expertly reviewed pacifiers, feeding bottles, and essential baby products. Trusted by thousands of
            parents worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/reviews">Shop Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Shield className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold">Safe & Tested</h3>
              <p className="text-sm text-muted-foreground">All products meet safety standards</p>
            </div>
            <div className="space-y-2">
              <Truck className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold">Fast Shipping</h3>
              <p className="text-sm text-muted-foreground">Quick delivery via Amazon</p>
            </div>
            <div className="space-y-2">
              <Award className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold">Expert Reviews</h3>
              <p className="text-sm text-muted-foreground">Thoroughly tested by parents</p>
            </div>
            <div className="space-y-2">
              <Users className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold">Trusted Community</h3>
              <p className="text-sm text-muted-foreground">10,000+ happy families</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect products for your baby's needs with our carefully curated categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                  <img src="/baby-pacifier.png" alt="Pacifiers" className="h-24 w-24" />
                </div>
                <CardTitle>Pacifiers</CardTitle>
                <CardDescription>Soothing pacifiers from top brands, designed for comfort and safety</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <Link href="/reviews?category=pacifiers">View Products</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-48 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg mb-4 flex items-center justify-center">
                  <img src="/baby-feeding-bottle.png" alt="Feeding Bottles" className="h-24 w-24" />
                </div>
                <CardTitle>Feeding Bottles</CardTitle>
                <CardDescription>Premium feeding bottles for easy and comfortable feeding experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <Link href="/reviews?category=bottles">View Products</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg mb-4 flex items-center justify-center">
                  <img src="/baby-accessories.png" alt="Accessories" className="h-24 w-24" />
                </div>
                <CardTitle>Accessories</CardTitle>
                <CardDescription>
                  Essential baby accessories to make parenting easier and more enjoyable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <Link href="/reviews?category=accessories">View Products</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Top Rated Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most popular and highly-rated baby products, loved by parents everywhere
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "MAM Perfect Pacifier",
                rating: 4.8,
                reviews: 1247,
                price: "$12.99",
                image: "/mam-perfect-pacifier.png", // Added real product image
                badge: "Best Seller",
              },
              {
                name: "Philips Avent Natural Bottle",
                rating: 4.7,
                reviews: 892,
                price: "$24.99",
                image: "/philips-avent-bottle.png", // Added real product image
                badge: "Editor's Choice",
              },
              {
                name: "Dr. Brown's Options+ Bottle",
                rating: 4.9,
                reviews: 2156,
                price: "$19.99",
                image: "/dr-browns-bottle.png", // Added real product image
                badge: "Top Rated",
              },
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-full w-full object-contain p-4"
                      />
                    </div>
                    <Badge className="absolute top-2 right-2">{product.badge}</Badge>
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Badge variant="secondary">Amazon Prime</Badge>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href={`/product/${index + 1}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Parents Trust Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to helping you find the best products for your baby's health and happiness
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Rigorous Testing</h3>
              <p className="text-muted-foreground">
                Every product is thoroughly tested by real parents and meets the highest safety standards
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Parent-Approved</h3>
              <p className="text-muted-foreground">
                Our recommendations come from experienced parents who understand what works best
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Expert Reviews</h3>
              <p className="text-muted-foreground">
                Detailed reviews and comparisons to help you make informed decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Parents Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real reviews from real parents who trust TheBabyStore for their baby's needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                review:
                  "TheBabyStore helped me find the perfect pacifier for my newborn. The reviews were so detailed and helpful!",
                rating: 5,
              },
              {
                name: "Mike D.",
                review:
                  "Great selection of feeding bottles. My baby loves the one we got based on their recommendation.",
                rating: 5,
              },
              {
                name: "Emma L.",
                review: "Trustworthy reviews and fast shipping through Amazon. Couldn't be happier with my purchases!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.review}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get the latest product reviews, parenting tips, and exclusive deals delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-foreground"
            />
            <Button variant="secondary">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Find the Perfect Products?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our extensive collection of reviewed baby products and find exactly what your little one needs
          </p>
          <Button size="lg" asChild>
            <Link href="/reviews">Start Shopping</Link>
          </Button>
        </div>
      </section>

      {/* Safety Standards Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Safety First</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All our recommended products meet or exceed international safety standards
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold">FDA Approved</h3>
              <p className="text-sm text-muted-foreground">Food and Drug Administration certified</p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold">BPA Free</h3>
              <p className="text-sm text-muted-foreground">No harmful chemicals or toxins</p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold">CE Certified</h3>
              <p className="text-sm text-muted-foreground">European safety standards compliant</p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold">Pediatrician Recommended</h3>
              <p className="text-sm text-muted-foreground">Trusted by healthcare professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Trusted Brand Partners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We partner with the world's leading baby product manufacturers
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {["MAM", "Philips Avent", "Dr. Brown's", "Tommee Tippee", "NUK", "Chicco"].map((brand, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-full bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="font-bold text-gray-600">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age-based Recommendations Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Shop by Age</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find age-appropriate products for your baby's developmental stage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="h-24 w-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">0-6M</span>
                </div>
                <CardTitle>Newborn to 6 Months</CardTitle>
                <CardDescription>Essential products for your newest family member</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Orthodontic pacifiers</li>
                  <li>• Anti-colic bottles</li>
                  <li>• Newborn accessories</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/reviews?age=0-6">View Products</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="h-24 w-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">6-12M</span>
                </div>
                <CardTitle>6 to 12 Months</CardTitle>
                <CardDescription>Growing baby essentials for active exploration</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Transition bottles</li>
                  <li>• Teething pacifiers</li>
                  <li>• Self-feeding accessories</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/reviews?age=6-12">View Products</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="h-24 w-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">12M+</span>
                </div>
                <CardTitle>12+ Months</CardTitle>
                <CardDescription>Toddler-ready products for independent little ones</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Sippy cups</li>
                  <li>• Training accessories</li>
                  <li>• Advanced feeding tools</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/reviews?age=12+">View Products</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick FAQ Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about baby products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">When should I introduce a pacifier?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most pediatricians recommend waiting until breastfeeding is well established, typically around 3-4
                  weeks old.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How often should I replace bottles?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Replace bottles every 4-6 months or sooner if you notice cracks, cloudiness, or wear.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are all products BPA-free?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, all products we recommend are BPA-free and meet strict safety standards for baby products.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer international shipping?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Products are fulfilled by Amazon, so shipping options depend on Amazon's availability in your region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
