import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Clock, Users, Star } from "lucide-react"

const guides = [
  {
    id: "new-parent-essentials",
    title: "New Parent's Essential Feeding Guide",
    description: "Everything you need to know about feeding your newborn, from bottles to schedules.",
    difficulty: "Beginner",
    readTime: "15 min",
    rating: 4.9,
    reviews: 234,
    image: "/baby-feeding-bottle.png",
    topics: ["Bottle Selection", "Feeding Schedule", "Safety Tips", "Cleaning Guide"],
    featured: true,
  },
  {
    id: "pacifier-selection",
    title: "The Complete Pacifier Selection Guide",
    description: "How to choose the right pacifier for your baby's age, needs, and preferences.",
    difficulty: "Beginner",
    readTime: "10 min",
    rating: 4.8,
    reviews: 189,
    image: "/baby-pacifier.png",
    topics: ["Age Groups", "Materials", "Shapes", "Safety Standards"],
    featured: true,
  },
  {
    id: "bottle-feeding-techniques",
    title: "Advanced Bottle Feeding Techniques",
    description: "Master bottle feeding with techniques to reduce colic, gas, and feeding difficulties.",
    difficulty: "Intermediate",
    readTime: "12 min",
    rating: 4.7,
    reviews: 156,
    image: "/baby-bottle-icon.png",
    topics: ["Anti-Colic Methods", "Positioning", "Flow Control", "Troubleshooting"],
    featured: false,
  },
  {
    id: "sterilization-methods",
    title: "Sterilization Methods Compared",
    description: "Compare different sterilization methods and choose the best one for your lifestyle.",
    difficulty: "Intermediate",
    readTime: "8 min",
    rating: 4.6,
    reviews: 98,
    image: "/baby-accessories-icon.png",
    topics: ["Steam Sterilizers", "UV Sterilizers", "Boiling", "Microwave Methods"],
    featured: false,
  },
  {
    id: "feeding-problems",
    title: "Solving Common Feeding Problems",
    description: "Identify and solve common feeding issues like reflux, colic, and bottle refusal.",
    difficulty: "Advanced",
    readTime: "18 min",
    rating: 4.8,
    reviews: 145,
    image: "/baby-feeding-bottle.png",
    topics: ["Reflux Solutions", "Colic Relief", "Bottle Refusal", "Medical Concerns"],
    featured: false,
  },
  {
    id: "travel-feeding",
    title: "Feeding On-the-Go: Travel Guide",
    description: "Essential tips for maintaining feeding routines while traveling with your baby.",
    difficulty: "Intermediate",
    readTime: "10 min",
    rating: 4.5,
    reviews: 87,
    image: "/baby-accessories-icon.png",
    topics: ["Travel Gear", "Sterilization", "Formula Prep", "Airport Tips"],
    featured: false,
  },
]

const difficultyColors = {
  Beginner: "bg-green-100 text-green-800",
  Intermediate: "bg-yellow-100 text-yellow-800",
  Advanced: "bg-red-100 text-red-800",
}

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Buyer's Guides</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive guides to help you make informed decisions about baby products. From beginner basics to
              advanced techniques, we've got you covered.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            <Button variant="default" size="sm">
              All Guides
            </Button>
            <Button variant="outline" size="sm">
              Beginner
            </Button>
            <Button variant="outline" size="sm">
              Intermediate
            </Button>
            <Button variant="outline" size="sm">
              Advanced
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Guides</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {guides
              .filter((guide) => guide.featured)
              .map((guide) => (
                <Card key={guide.id} className="group hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      src={guide.image || "/placeholder.svg"}
                      alt={guide.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={difficultyColors[guide.difficulty as keyof typeof difficultyColors]}>
                        {guide.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{guide.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{guide.rating}</span>
                        <span className="text-sm text-muted-foreground">({guide.reviews})</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{guide.title}</CardTitle>
                    <CardDescription className="text-pretty">{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm text-muted-foreground mb-2">What You'll Learn:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {guide.topics.map((topic) => (
                            <div key={topic} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                              <span className="text-xs">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button asChild className="w-full">
                        <Link href={`/guides/${guide.id}`}>Read Guide</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* All Guides */}
          <h2 className="text-2xl font-bold text-foreground mb-8">All Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Card key={guide.id} className="group hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src={guide.image || "/placeholder.svg"}
                    alt={guide.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={`text-xs ${difficultyColors[guide.difficulty as keyof typeof difficultyColors]}`}>
                      {guide.difficulty}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{guide.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {guide.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{guide.reviews} reviews</span>
                    </div>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/guides/${guide.id}`}>Read</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Need Personalized Advice?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Our experts are here to help you choose the right products for your specific needs and situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get Expert Help</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/faq">View FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
