import os, re

def fix_unescaped(filepath):
    if not os.path.exists(filepath): return
    with open(filepath, "r") as f: content = f.read()
    content = content.replace('We don\'t', 'We don&apos;t')
    content = content.replace('doesn\'t', 'doesn&apos;t')
    content = content.replace('I\'m', 'I&apos;m')
    content = content.replace('You\'re', 'You&apos;re')
    content = content.replace('it\'s', 'it&apos;s')
    content = content.replace('"$500/hr consulting"', '&quot;$500/hr consulting&quot;')
    content = content.replace('"digital transformations"', '&quot;digital transformations&quot;')
    content = content.replace('we\'ve', 'we&apos;ve')
    content = content.replace('we\'re', 'we&apos;re')
    content = content.replace('they\'re', 'they&apos;re')
    content = content.replace('that\'s', 'that&apos;s')
    with open(filepath, "w") as f: f.write(content)

def replace_a_with_link(filepath):
    if not os.path.exists(filepath): return
    with open(filepath, "r") as f: content = f.read()
    content = re.sub(r'<a\s+href="/#booking"', '<Link href="/#booking"', content)
    content = re.sub(r'</a\s*>', '</Link>', content)
    if '<Link' in content and 'import Link' not in content:
        content = 'import Link from "next/link";\n' + content
    with open(filepath, "w") as f: f.write(content)

def remove_unused(filepath, unused):
    if not os.path.exists(filepath): return
    with open(filepath, "r") as f: content = f.read()
    for u in unused:
        content = content.replace(f", {u}", "")
        content = content.replace(f"{u}, ", "")
        content = content.replace(f"import {{ {u} }}", "import {}")
    with open(filepath, "w") as f: f.write(content)

# Fix unescaped
for f in ["src/app/about/page.tsx", "src/app/solutions/page.tsx", "src/components/sections/BookingWizard.tsx", "src/components/sections/ReviewsCarousel.tsx"]:
    fix_unescaped(f)

# Fix a to Link
for f in ["src/app/solutions/audit-ready/page.tsx", "src/app/solutions/field-to-cash/page.tsx", "src/app/solutions/pipeline-reset/page.tsx", "src/components/layout/Footer.tsx"]:
    replace_a_with_link(f)

# Fix unused
remove_unused("src/app/page.tsx", ["CheckCircle2"])
remove_unused("src/components/sections/BookingWizard.tsx", ["Icon"])
remove_unused("src/components/shared/BookingLink.tsx", ["Link"])

