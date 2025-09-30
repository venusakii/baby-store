"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    slug: "dr-browns-options-plus-bottle",
    name: "Dr. Brown's Options+ Anti-Colic Bottle",
    category: "bottles",
    rating: 4.9,
    reviews: 2156,
    price: "$19.99",
    image: "https://m.media-amazon.com/images/I/71aVA2bqoiL._SL1500_.jpg",
    badge: "Top Rated",
    description: "Anti-colic bottle with internal vent system to reduce feeding problems",
    pros: ["Reduces colic", "Preserves nutrients", "Dishwasher safe"],
    amazonLink: "https://www.amazon.com/Dr-Browns-Natural-Anti-Colic-Options/dp/",
  },
  {
    id: 2,
    slug: "mam-perfect-pacifier",
    name: "MAM Perfect Pacifier",
    category: "pacifiers",
    rating: 4.8,
    reviews: 1247,
    price: "$12.99",
    image: "https://m.media-amazon.com/images/I/51xt3uS2ZHL._SX679_.jpg",
    badge: "Best Seller",
    description: "Orthodontic pacifier with extra thin, soft neck for natural oral development",
    pros: ["BPA-free silicone", "Orthodontic design", "Easy to clean"],
    amazonLink: "https://www.amazon.com/MAM-Perfect-Pacifiers-Thinner-Nipple/dp/",
  },
  {
    id: 3,
    slug: "philips-avent-natural-bottle",
    name: "Philips Avent Natural Bottle",
    category: "bottles",
    rating: 4.7,
    reviews: 892,
    price: "$24.99",
    image: "https://m.media-amazon.com/images/I/51RL1bQBS-L._SX679_.jpg",
    badge: "Editor's Choice",
    description: "Wide neck bottle with natural latch nipple for easy combination feeding",
    pros: ["Natural latch nipple", "Anti-colic valve", "Easy to hold shape"],
    amazonLink: "https://www.amazon.com/Philips-AVENT-Bottle-Natural-Bottles/dp/",
  },
  {
    id: 4,
    slug: "bottle-warmer-sterilizer",
    name: "Bottle Warmer & Sterilizer Combo",
    category: "accessories",
    rating: 4.7,
    reviews: 432,
    price: "$39.99",
    image: "https://m.media-amazon.com/images/I/61JVpFYW7YL._SX679_.jpg",
    badge: "Premium",
    description: "Multi-function bottle warmer and steam sterilizer",
    pros: ["Fast warming", "Steam sterilization", "Auto shut-off"],
    amazonLink: "https://www.amazon.com/Bottle-Warmer-and-Sterilizer-Combo/dp/",
  },
  {
    id: 5,
    slug: "mushie-silicone-pacifier",
    name: "Mushie 100% Silicone Pacifier",
    category: "pacifiers",
    rating: 4.6,
    reviews: 891,
    price: "$11.99",
    image: "https://m.media-amazon.com/images/I/51Zum7WlcTL._SX679_.jpg",
    badge: "Recommended",
    description: "Soft silicone pacifier designed for comfort and safety",
    pros: ["100% silicone", "Soft and flexible", "BPA-free"],
    amazonLink: "https://www.amazon.com/mushie-100-Silicone-Pacifier-Blush/dp/",
  },
  {
    id: 6,
    slug: "bathtub-toddler-backrest",
    name: "Transforms Bathtub with Toddler Backrest",
    category: "bath",
    rating: 4.5,
    reviews: 567,
    price: "$29.99",
    image: "https://m.media-amazon.com/images/I/71ok+FA6jWL._AC_SX679_.jpg",
    badge: "Essential",
    description: "Convertible bathtub with toddler backrest for assisted bathing",
    pros: ["Adjustable design", "Non-slip surface", "Comfortable backrest"],
    amazonLink: "https://www.amazon.com/Transforms-Bathtub-Toddler-Backrest-Assisted/dp/",
  },
  {
    id: 7,
    slug: "baby-monitor-5-display",
    name: "Baby Monitor with 5-Inch Display",
    category: "monitors",
    rating: 4.8,
    reviews: 743,
    price: "$99.99",
    image: "https://m.media-amazon.com/images/I/61WoQMri81L._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
    badge: "High Tech",
    description: "Baby monitor with pan-tilt-zoom, temperature sensor, and lullabies",
    pros: ["5-inch display", "Two-way audio", "Night vision"],
    amazonLink: "https://www.amazon.com/Monitor-5Display-Pan-Tilt-Zoom-Temperature-Lullabies/dp/",
  },
  {
    id: 8,
    slug: "pamo-babe-portable-bassinet",
    name: "Pamo Babe Portable Bassinet",
    category: "bassinets",
    rating: 4.6,
    reviews: 432,
    price: "$79.99",
    image: "https://m.media-amazon.com/images/I/91wMRWNbv8L._SX679_.jpg",
    badge: "Portable",
    description: "Portable bassinet for newborns, easy to set up and move",
    pros: ["Lightweight", "Breathable mesh", "Easy to assemble"],
    amazonLink: "https://www.amazon.com/Pamo-babe-Portable-Bassinet-Newborn/dp/",
  },
];

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("rating")
  const [visibleProducts, setVisibleProducts] = useState(8)

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "reviews":
          return b.reviews - a.reviews
        case "price-low":
          return Number.parseFloat(a.price.replace("$", "")) - Number.parseFloat(b.price.replace("$", ""))
        case "price-high":
          return Number.parseFloat(b.price.replace("$", "")) - Number.parseFloat(a.price.replace("$", ""))
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  const displayedProducts = filteredAndSortedProducts.slice(0, visibleProducts)
  const hasMoreProducts = visibleProducts < filteredAndSortedProducts.length

  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 8)
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    setVisibleProducts(8) // Reset pagination
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Product Reviews</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the best baby products through our comprehensive reviews and expert recommendations
            </p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="pacifiers">Pacifiers</SelectItem>
                <SelectItem value="bottles">Feeding Bottles</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              Showing {displayedProducts.length} of {filteredAndSortedProducts.length} products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <Link href={`/product/${product.slug}`} key={product.id}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="relative">
                      <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="h-full w-full object-contain p-4"
                        />
                      </div>
                      <Badge className="absolute top-2 right-2" variant="secondary">
                        {product.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <p className="text-sm font-medium text-muted-foreground">Key Features:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {product.pros.slice(0, 2).map((pro, index) => (
                          <li key={index} className="flex items-center gap-1">
                            <div className="h-1 w-1 bg-primary rounded-full" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      {/* Removed price display */}
                      <Badge variant="outline" className="text-xs">
                        Amazon Prime
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full" asChild>
                        <Link href={`/product/${product.slug}`}>Read Full Review</Link>
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <a
                          href={`https://amazon.com/s?k=${encodeURIComponent(product.name)}&tag=thebabystore-20`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Buy on Amazon
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More */}
          {hasMoreProducts && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" onClick={handleLoadMore}>
                Load More Products
              </Button>
            </div>
          )}

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Browse by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find exactly what you're looking for with our organized product categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/baby-pacifier-icon.png" alt="Pacifiers" className="h-12 w-12" />
                </div>
                <CardTitle>Pacifiers</CardTitle>
                <CardDescription>
                  Soothing pacifiers from trusted brands, designed for comfort and healthy oral development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground mb-4">
                  <span className="font-medium">12 Products</span> • Average rating: 4.7★
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => handleCategoryFilter("pacifiers")}
                >
                  View All Pacifiers
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/baby-bottle-icon.png" alt="Bottles" className="h-12 w-12" />
                </div>
                <CardTitle>Feeding Bottles</CardTitle>
                <CardDescription>
                  Premium feeding bottles for comfortable feeding experiences and easy transitions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground mb-4">
                  <span className="font-medium">18 Products</span> • Average rating: 4.6★
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => handleCategoryFilter("bottles")}
                >
                  View All Bottles
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/baby-accessories-icon.png" alt="Accessories" className="h-12 w-12" />
                </div>
                <CardTitle>Accessories</CardTitle>
                <CardDescription>
                  Essential baby accessories to make feeding time easier and more convenient
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground mb-4">
                  <span className="font-medium">8 Products</span> • Average rating: 4.5★
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => handleCategoryFilter("accessories")}
                >
                  View All Accessories
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Why Trust Our Reviews?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Our comprehensive review process ensures you get honest, detailed insights from real parents
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <p className="text-sm text-muted-foreground">Products Tested</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">10,000+</div>
              <p className="text-sm text-muted-foreground">Parent Reviews</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4.8★</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <p className="text-sm text-muted-foreground">Safety Tested</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
