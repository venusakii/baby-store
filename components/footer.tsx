import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TB</span>
              </div>
              <span className="font-bold text-xl text-primary">TheBabyStore</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted source for premium baby products and expert reviews.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/reviews" className="block text-sm text-muted-foreground hover:text-primary">
                Reviews
              </Link>
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Categories</h3>
            <div className="space-y-2">
              <Link
                href="/reviews?category=pacifiers"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                Pacifiers
              </Link>
              <Link href="/reviews?category=bottles" className="block text-sm text-muted-foreground hover:text-primary">
                Feeding Bottles
              </Link>
              <Link
                href="/reviews?category=accessories"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                Accessories
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 TheBabyStore.com. All rights reserved. Amazon Associate Program participant. 🛒 As an Amazon
            Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
