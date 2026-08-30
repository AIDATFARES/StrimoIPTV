import re

file_path = r'src/data/blog.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

def trim_links(content, target=10):
    # Find all markdown links
    matches = list(re.finditer(r'\]\(/[^)]+\)', content))
    if len(matches) <= target:
        return content
    excess = len(matches) - target
    new_content = content
    for i in range(excess):
        m = matches[-(i+1)]
        start, end = m.span()
        # Find opening '[' for this link
        anchor_start = new_content.rfind('[', 0, start)
        if anchor_start == -1:
            continue
        # Extract anchor text (between '[' and ']')
        anchor_end = new_content.find(']', anchor_start, start)
        if anchor_end == -1:
            continue
        anchor_text = new_content[anchor_start+1:anchor_end]
        # Replace the whole link with just the anchor text
        new_content = new_content[:anchor_start] + anchor_text + new_content[end:]
    return new_content

slugs = [
    'how-to-choose-best-iptv-service-2026',
    'iptv-not-working-20-things-to-check',
    'why-does-iptv-keep-buffering'
]

for slug in slugs:
    pattern = rf'(slug:\\s*\"{slug}\".*?content:\\s*`)(.*?)(`\\s*\\n\\s*\}}\s*,?)'
    match = re.search(pattern, text, re.DOTALL)
    if not match:
        continue
    original = match.group(2)
    trimmed = trim_links(original, target=10)
    text = re.sub(pattern, rf'\1{trimmed}\3', text, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(text)
print('Trimmed links to 10 per article')
