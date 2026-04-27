import os
import glob

def migrate_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Replacements
    content = content.replace('from "react-router-dom"', 'from "next/navigation"')
    content = content.replace("from 'react-router-dom'", 'from "next/navigation"')
    content = content.replace('useLocation', 'usePathname')
    content = content.replace('useNavigate', 'useRouter')
    content = content.replace('.pathname', '') # usePathname directly returns the string
    
    # Handle Link import from next/link
    if 'Link' in content and 'next/navigation' in content:
        content = content.replace('Link,', '')
        content = content.replace(', Link', '')
        content = content.replace('{ Link }', '')
        content = 'import Link from "next/link";\n' + content

    with open(filepath, 'w') as f:
        f.write(content)

files = [
    "src/components/shared/BookingLink.tsx",
    "src/components/layout/FloatingMobileCTA.tsx",
    "src/components/layout/ScrollToTop.tsx",
    "src/components/layout/Footer.tsx",
    "src/components/sections/CaseStudies.tsx",
    "src/components/layout/Header.tsx",
    "src/components/sections/HeroSection.tsx",
    "src/components/sections/ServicePillars.tsx"
]

for file in files:
    if os.path.exists(file):
        migrate_file(file)
