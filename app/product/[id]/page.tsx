import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Star, ShoppingCart, Heart, Share2, CheckCircle, X, ExternalLink } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const products = [
  {
    id: 1,
    name: "MAM Perfect Pacifier",
    category: "pacifiers",
    rating: 4.8,
    reviews: 1247,
    price: "$12.99",
    originalPrice: "$15.99",
    image: "premium baby pacifier silicone",
    badge: "Best Seller",
    description:
      "The MAM Perfect Pacifier is designed with orthodontic expertise to support natural oral development. Made from extra soft silicone with an ultra-thin neck, it's accepted by 94% of babies and recommended by pediatric dentists worldwide.",
    pros: [
      "BPA-free silicone construction",
      "Orthodontic design supports natural development",
      "Ultra-thin neck reduces pressure on teeth and jaw",
      "Easy to clean and sterilize",
      "Accepted by 94% of babies",
      "Glow-in-the-dark button for nighttime use",
    ],
    cons: ["Slightly more expensive than basic pacifiers", "May be too large for very small newborns"],
    specifications: {
      "Age Range": "0-6 months, 6+ months",
      Material: "Silicone (nipple), PP (shield)",
      "BPA Free": "Yes",
      "Dishwasher Safe": "Yes",
      "Sterilizer Safe": "Yes",
      "Colors Available": "Pink, Blue, Clear, Green",
    },
    amazonLink: "https://amazon.com/mam-perfect-pacifier",
    inStock: true,
    fastShipping: true,
    ratingBreakdown: {
      5: 78,
      4: 15,
      3: 4,
      2: 2,
      1: 1,
    },
  },
  {
    id: 2,
    name: "Philips Avent Natural Bottle",
    category: "bottles",
    rating: 4.7,
    reviews: 892,
    price: "$24.99",
    originalPrice: "$29.99",
    image: "natural baby feeding bottle wide neck",
    badge: "Editor's Choice",
    description:
      "The Philips Avent Natural bottle features a wide, breast-shaped nipple that promotes natural latch-on similar to the breast, making it easy to combine breast and bottle feeding. The unique petals inside the nipple increase softness and flexibility without nipple collapse.",
    pros: [
      "Natural latch nipple design",
      "Anti-colic valve reduces air ingestion",
      "Wide neck for easy filling and cleaning",
      "Compatible with entire Avent Natural range",
      "BPA-free materials",
      "Ergonomic shape for comfortable holding",
    ],
    cons: ["More expensive than basic bottles", "Wide design may not fit all bottle warmers"],
    specifications: {
      Capacity: "9oz / 260ml",
      "Age Range": "0+ months",
      Material: "PP (bottle), Silicone (nipple)",
      "BPA Free": "Yes",
      "Dishwasher Safe": "Yes (top rack)",
      "Microwave Safe": "Yes",
      "Flow Rate": "Newborn, Slow, Medium, Fast",
    },
    amazonLink: "https://amazon.com/philips-avent-natural-bottle",
    inStock: true,
    fastShipping: true,
    ratingBreakdown: {
      5: 72,
      4: 18,
      3: 6,
      2: 3,
      1: 1,
    },
  },
  {
    id: 3,
    name: "Dr. Brown's Options+ Bottle",
    category: "bottles",
    rating: 4.9,
    reviews: 2156,
    price: "$19.99",
    originalPrice: "$24.99",
    image: "anti colic baby bottle venting system",
    badge: "Top Rated",
    description:
      "Dr. Brown's Options+ bottle features a unique internal vent system that helps reduce colic, spit-up, burping, and gas by eliminating the vacuum and air bubbles. The vent system is proven to help preserve bottle milk's nutrients and can be removed as baby's feeding develops.",
    pros: [
      "Clinically proven to reduce colic",
      "Internal vent system eliminates vacuum",
      "Preserves vitamins C, A, and E",
      "Options+ allows removal of vent system",
      "Dishwasher safe (top rack)",
      "Available in multiple sizes",
    ],
    cons: ["More parts to clean than standard bottles", "Vent system can be tricky to assemble initially"],
    specifications: {
      Capacity: "8oz / 240ml",
      "Age Range": "0+ months",
      Material: "PP (bottle), Silicone (nipple)",
      "BPA Free": "Yes",
      "Dishwasher Safe": "Yes (top rack)",
      "Vent System": "Removable",
      "Nipple Levels": "Preemie, Level 1, 2, 3, 4, Y-Cut",
    },
    amazonLink: "https://amazon.com/dr-browns-options-bottle",
    inStock: true,
    fastShipping: true,
    ratingBreakdown: {
      5: 85,
      4: 10,
      3: 3,
      2: 1,
      1: 1,
    },
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href="/reviews" className="hover:text-primary">
            Reviews
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <img
                    src={`/abstract-geometric-shapes.png?height=400&width=400&query=${product.image}`}
                    alt={product.name}
                    className="h-64 w-64 object-contain"
                  />
                </div>
                <Badge className="absolute top-4 left-4">{product.badge}</Badge>
                {product.inStock && (
                  <Badge variant="secondary" className="absolute top-4 right-4">
                    In Stock
                  </Badge>
                )}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-muted rounded-lg flex items-center justify-center cursor-pointer hover:bg-muted/80"
                  >
                    <img
                      src={`/abstract-geometric-shapes.png?height=100&width=100&query=${product.image} angle ${i}`}
                      alt={`${product.name} view ${i}`}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">{product.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Amazon Prime</Badge>
                  {product.fastShipping && <Badge variant="outline">Fast Shipping</Badge>}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button size="lg" className="w-full" asChild>
                  <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Buy on Amazon
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Heart className="mr-2 h-4 w-4" />
                    Add to Wishlist
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Safety Tested</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">BPA Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Easy Returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Fast Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="comparison">Compare</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Pros
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <X className="h-5 w-5 text-destructive" />
                      Cons
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Product Specifications</CardTitle>
                  <CardDescription>Detailed technical information about this product</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border last:border-b-0">
                        <span className="font-medium">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Reviews</CardTitle>
                    <CardDescription>{product.reviews} verified reviews</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="text-center mb-4">
                          <div className="text-4xl font-bold text-primary mb-2">{product.rating}</div>
                          <div className="flex items-center justify-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">Based on {product.reviews} reviews</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {Object.entries(product.ratingBreakdown)
                          .reverse()
                          .map(([stars, percentage]) => (
                            <div key={stars} className="flex items-center gap-2">
                              <span className="text-sm w-8">{stars}★</span>
                              <Progress value={percentage} className="flex-1" />
                              <span className="text-sm text-muted-foreground w-8">{percentage}%</span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Sample Reviews */}
                <div className="space-y-4">
                  {[
                    {
                      name: "Sarah M.",
                      rating: 5,
                      date: "2 weeks ago",
                      review:
                        "Absolutely love this product! My baby took to it immediately and it's so easy to clean. Highly recommend to other parents.",
                      verified: true,
                    },
                    {
                      name: "Mike D.",
                      rating: 4,
                      date: "1 month ago",
                      review:
                        "Great quality and works as advertised. Only minor complaint is the price, but you get what you pay for.",
                      verified: true,
                    },
                    {
                      name: "Emma L.",
                      rating: 5,
                      date: "3 weeks ago",
                      review:
                        "Perfect for our little one. The design is thoughtful and it's clear a lot of research went into this product.",
                      verified: true,
                    },
                  ].map((review, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">{review.name}</span>
                              {review.verified && (
                                <Badge variant="secondary" className="text-xs">
                                  Verified Purchase
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.review}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="comparison" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Compare Similar Products</CardTitle>
                  <CardDescription>See how this product compares to similar options</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <p>Comparison feature coming soon!</p>
                    <p className="text-sm mt-2">
                      We're working on a comprehensive comparison tool to help you make the best choice.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">You Might Also Like</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Other highly-rated products that parents love</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                      <img
                        src={`/abstract-geometric-shapes.png?height=120&width=120&query=${relatedProduct.image}`}
                        alt={relatedProduct.name}
                        className="h-24 w-24 object-contain"
                      />
                    </div>
                    <CardTitle className="text-lg">{relatedProduct.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(relatedProduct.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">({relatedProduct.reviews})</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-primary">{relatedProduct.price}</span>
                      <Badge variant="secondary">{relatedProduct.badge}</Badge>
                    </div>
                    <Button className="w-full" asChild>
                      <Link href={`/product/${relatedProduct.id}`}>View Details</Link>
                    </Button>
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
