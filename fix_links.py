import os
import glob
import re

def fix_link_props(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Simple regex to replace <Link to="..."> with <Link href="...">
    content = re.sub(r'<Link\s+([^>]*?)to=', r'<Link \1href=', content)

    # Remove empty lines with import next/navigation if unused
    # (Just basic cleanup)

    with open(filepath, 'w') as f:
        f.write(content)

files = glob.glob("src/components/**/*.tsx", recursive=True)
for file in files:
    fix_link_props(file)
