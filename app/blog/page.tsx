import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: "choosing-first-pacifier",
    title: "How to Choose Your Baby's First Pacifier",
    excerpt: "A comprehensive guide to selecting the safest and most comfortable pacifier for your newborn.",
    category: "Guides",
    readTime: "5 min read",
    publishDate: "2024-01-15",
    image: "/baby-pacifier.png",
    featured: true,
  },
  {
    id: "bottle-feeding-tips",
    title: "10 Essential Bottle Feeding Tips for New Parents",
    excerpt: "Expert advice on bottle feeding techniques, schedules, and common challenges.",
    category: "Tips",
    readTime: "7 min read",
    publishDate: "2024-01-12",
    image: "/baby-feeding-bottle.png",
    featured: true,
  },
  {
    id: "sterilizing-guide",
    title: "The Complete Guide to Sterilizing Baby Bottles",
    excerpt: "Learn different sterilization methods and when to use each one for maximum safety.",
    category: "Safety",
    readTime: "6 min read",
    publishDate: "2024-01-10",
    image: "/baby-accessories-icon.png",
    featured: false,
  },
  {
    id: "teething-relief",
    title: "Natural Teething Relief: Safe Options for Your Baby",
    excerpt: "Discover safe and effective ways to soothe your teething baby without medication.",
    category: "Health",
    readTime: "4 min read",
    publishDate: "2024-01-08",
    image: "/baby-pacifier-icon.png",
    featured: false,
  },
  {
    id: "feeding-schedule",
    title: "Creating a Healthy Feeding Schedule for Your Baby",
    excerpt: "Age-appropriate feeding schedules and tips for establishing healthy eating habits.",
    category: "Guides",
    readTime: "8 min read",
    publishDate: "2024-01-05",
    image: "/baby-bottle-icon.png",
    featured: false,
  },
  {
    id: "product-safety",
    title: "Baby Product Safety: What Every Parent Should Know",
    excerpt: "Essential safety guidelines for choosing and using baby feeding products.",
    category: "Safety",
    readTime: "6 min read",
    publishDate: "2024-01-03",
    image: "/baby-accessories-icon.png",
    featured: false,
  },
]

const categories = ["All", "Guides", "Tips", "Safety", "Health"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Parenting Blog</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Expert advice, tips, and guides to help you navigate your parenting journey. From feeding tips to product
              safety, we've got you covered.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                    <CardDescription className="text-pretty">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {new Date(post.publishDate).toLocaleDateString()}
                      </span>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/blog/${post.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* All Posts */}
          <h2 className="text-2xl font-bold text-foreground mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.publishDate).toLocaleDateString()}
                    </span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/blog/${post.id}`}>Read</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Get the latest parenting tips, product reviews, and safety updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
