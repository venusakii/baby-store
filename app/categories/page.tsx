import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    id: "pacifiers",
    name: "Pacifiers & Soothers",
    description: "Safe, BPA-free pacifiers for newborns to toddlers",
    productCount: 24,
    image: "/baby-pacifier-icon.png",
    featured: ["Orthodontic Design", "Night Time", "Newborn Safe"],
  },
  {
    id: "bottles",
    name: "Feeding Bottles",
    description: "Anti-colic bottles and feeding accessories",
    productCount: 18,
    image: "/baby-bottle-icon.png",
    featured: ["Anti-Colic", "Wide Neck", "Glass Options"],
  },
  {
    id: "accessories",
    name: "Feeding Accessories",
    description: "Bottle warmers, sterilizers, and cleaning supplies",
    productCount: 32,
    image: "/baby-accessories-icon.png",
    featured: ["Sterilizers", "Warmers", "Cleaning Kits"],
  },
  {
    id: "teethers",
    name: "Teethers & Toys",
    description: "Safe teething toys and developmental products",
    productCount: 15,
    image: "/baby-pacifier-icon.png",
    featured: ["Silicone Safe", "Textured", "Freezer Safe"],
  },
  {
    id: "bibs",
    name: "Bibs & Burp Cloths",
    description: "Waterproof bibs and soft burp cloths",
    productCount: 28,
    image: "/baby-accessories-icon.png",
    featured: ["Waterproof", "Adjustable", "Easy Clean"],
  },
  {
    id: "highchairs",
    name: "High Chairs & Boosters",
    description: "Safe seating solutions for meal times",
    productCount: 12,
    image: "/baby-bottle-icon.png",
    featured: ["Adjustable", "Easy Clean", "Portable"],
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Product Categories</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Browse our carefully curated selection of baby products organized by category. Each product is tested for
              safety and recommended by parents.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 relative">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription className="text-pretty">{category.description}</CardDescription>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {category.productCount} Products
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Featured Types:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.featured.map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/reviews?category=${category.id}`}>Browse {category.name}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Our team is constantly adding new products and categories. Contact us if you need help finding the perfect
            baby product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/reviews">View All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
