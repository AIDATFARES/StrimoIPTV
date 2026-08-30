import re

file_path = r'src/data/blog.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Helper to trim links to exactly 10 per article
def trim_links(content, target=10):
    links = list(re.finditer(r'\]\(/[^)]+\)', content))
    if len(links) <= target:
        return content
    # Remove excess links from the end
    excess = len(links) - target
    new_content = content
    for i in range(excess):
        m = links[-(i+1)]  # take from end
        start, end = m.span()
        # remove the whole link including preceding '[' text inside brackets? keep the anchor text but drop link
        # Find the opening '[' that pairs with this closing ')'
        # We'll replace the pattern with just the anchor text (text inside brackets before the link)
        # Find text between '[' and ']' preceding this match
        # Search backwards for '['
        anchor_start = new_content.rfind('[', 0, start)
        if anchor_start == -1:
            continue
        # extract anchor text without brackets
        anchor_text = new_content[anchor_start+1:start-1]  # exclude trailing ']'
        # replace the whole [anchor](url) with anchor_text
        new_content = new_content[:anchor_start] + anchor_text + new_content[end:]
    return new_content

# Pattern to capture each article block
def replace_article(slug, new_block):
    pattern = rf'(slug:\s*"{slug}".*?content:\s*`)(.*?)(`\s*\n\s*\}\s*,?)'
    return re.sub(pattern, rf'\1{new_block}\3', text, flags=re.DOTALL)

# Process each article
slugs = [
    'how-to-choose-best-iptv-service-2026',
    'iptv-not-working-20-things-to-check',
    'why-does-iptv-keep-buffering'
]
for slug in slugs:
    # extract current content
    match = re.search(rf'(slug:\s*"{slug}".*?content:\s*`)(.*?)(`\s*\n\s*\}\s*,?)', text, re.DOTALL)
    if not match:
        continue
    original = match.group(2)
    trimmed = trim_links(original, target=10)
    text = re.sub(rf'(slug:\s*"{slug}".*?content:\s*`)(.*?)(`\s*\n\s*\}\s*,?)', rf'\1{trimmed}\3', text, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(text)
print('Trimmed links to 10 per article')
