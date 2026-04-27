import os

def prepend_use_client(filepath):
    if not os.path.exists(filepath):
        return
    with open(filepath, 'r') as f:
        content = f.read()
    if '"use client"' not in content:
        with open(filepath, 'w') as f:
            f.write('"use client";\n' + content)

files = [
    "src/components/layout/FloatingMobileCTA.tsx",
    "src/components/layout/Footer.tsx",
    "src/components/layout/Header.tsx",
    "src/components/sections/CaseStudies.tsx",
    "src/components/sections/HeroSection.tsx",
    "src/components/sections/ContactSection.tsx",
    "src/hooks/useScrollAnimation.ts",
    "src/components/sections/AboutFounder.tsx"
]

for file in files:
    prepend_use_client(file)

# Fix CaseStudies.tsx syntax error
cs_path = "src/components/sections/CaseStudies.tsx"
if os.path.exists(cs_path):
    with open(cs_path, 'r') as f:
        content = f.read()
    content = content.replace('import  from "next/navigation"', '')
    with open(cs_path, 'w') as f:
        f.write(content)
