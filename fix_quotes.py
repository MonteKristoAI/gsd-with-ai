import re
f1 = "src/components/sections/BookingWizard.tsx"
with open(f1, 'r') as f: c1 = f.read()
c1 = c1.replace("We don't do", "We don&apos;t do")
c1 = c1.replace("Let's get", "Let&apos;s get")
c1 = c1.replace("we'll", "we&apos;ll")
c1 = c1.replace("it's", "it&apos;s")
c1 = c1.replace("won't", "won&apos;t")
c1 = c1.replace("You're", "You&apos;re")
c1 = c1.replace("I'm", "I&apos;m")
with open(f1, 'w') as f: f.write(c1)

f2 = "src/components/sections/ReviewsCarousel.tsx"
with open(f2, 'r') as f: c2 = f.read()
c2 = c2.replace("we're", "we&apos;re")
c2 = c2.replace("We're", "We&apos;re")
c2 = c2.replace("they've", "they&apos;ve")
with open(f2, 'w') as f: f.write(c2)
