import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const faqCategories = [
  {
    title: "Product Safety",
    faqs: [
      {
        question: "How do I know if a pacifier is safe for my baby?",
        answer:
          "Look for pacifiers that are BPA-free, have orthodontic designs, and meet safety standards like CPSC or EN 1400. Always check the age recommendations and inspect for wear regularly.",
      },
      {
        question: "When should I replace baby bottles and pacifiers?",
        answer:
          "Replace bottles every 4-6 months or when you notice cracks, cloudiness, or wear. Pacifiers should be replaced every 2-4 weeks or immediately if damaged. Always inspect before each use.",
      },
      {
        question: "Are silicone products safer than plastic ones?",
        answer:
          "Both can be safe when they meet safety standards. Silicone is naturally BPA-free and more durable, while high-quality plastic bottles are lightweight and break-resistant. Choose based on your preferences and baby's needs.",
      },
    ],
  },
  {
    title: "Feeding & Usage",
    faqs: [
      {
        question: "How often should I sterilize baby bottles?",
        answer:
          "Sterilize bottles before first use and daily for babies under 3 months. After 3 months, thorough washing with hot soapy water is usually sufficient, but sterilize weekly or when baby is sick.",
      },
      {
        question: "Can I use the dishwasher for baby bottles?",
        answer:
          "Yes, most baby bottles are dishwasher safe. Use the top rack and check manufacturer instructions. Remove labels and use a dishwasher basket for small parts like nipples and rings.",
      },
      {
        question: "How do I transition from breast to bottle feeding?",
        answer:
          "Start slowly with one bottle feeding per day, choose nipples that mimic breastfeeding, and have someone else give the bottle initially. Be patient as it may take several attempts.",
      },
    ],
  },
  {
    title: "Product Selection",
    faqs: [
      {
        question: "What's the difference between wide-neck and standard bottles?",
        answer:
          "Wide-neck bottles are easier to fill and clean, and nipples are often more breast-like. Standard bottles are more compact and may fit better in some bottle warmers and bags.",
      },
      {
        question: "Do I need different pacifiers for different ages?",
        answer:
          "Yes, pacifiers come in different sizes for different age ranges (0-6 months, 6-18 months, 18+ months). The size affects the nipple shape and shield size for proper fit and safety.",
      },
      {
        question: "What features should I look for in anti-colic bottles?",
        answer:
          "Look for venting systems that reduce air intake, angled designs, or special nipples that control flow. Popular features include bottom vents, internal straws, or collapsible bags.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    faqs: [
      {
        question: "My baby refuses the pacifier. What should I do?",
        answer:
          "Try different shapes, sizes, or materials. Some babies prefer orthodontic shapes while others like round. Timing matters too - offer when baby is calm, not overly hungry or tired.",
      },
      {
        question: "How do I prevent bottle nipple collapse?",
        answer:
          "Ensure the nipple isn't screwed on too tightly, check for clogs in the nipple holes, and consider nipples with better venting. Some babies create strong suction that causes collapse.",
      },
      {
        question: "Why does my baby get gas from bottle feeding?",
        answer:
          "Gas can result from swallowing air. Try anti-colic bottles, ensure proper nipple flow rate, keep baby upright during feeding, and burp frequently. Check that nipple holes aren't too large.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Find answers to common questions about baby products, safety, and feeding. Can't find what you're looking
              for? Contact our support team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">{category.title}</CardTitle>
                <CardDescription>Common questions about {category.title.toLowerCase()}</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Our customer support team is here to help. Get personalized advice and product recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">Read Our Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
