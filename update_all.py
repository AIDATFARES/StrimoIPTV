import re

with open('art1.md', 'r', encoding='utf-8') as f:
    content1 = f.read()
with open('art2.md', 'r', encoding='utf-8') as f:
    content2 = f.read()
with open('art3.md', 'r', encoding='utf-8') as f:
    content3 = f.read()

with open(r'src/data/blog.ts', 'r', encoding='utf-8') as f:
    text = f.read()

def replace_content(text, slug, new_content):
    pattern = r'(slug:\s*\"' + slug + r'\".*?content:\s*`)(.*?)(`\s*\n\s*\}\s*[,\]])'
    match = re.search(pattern, text, re.DOTALL)
    if match:
        new_text = text[:match.start(2)] + new_content + text[match.end(2):]
        print('Successfully updated', slug)
        return new_text
    else:
        print('Could not find', slug)
        return text

text = replace_content(text, 'how-to-choose-best-iptv-service-2026', content1)
text = replace_content(text, 'iptv-not-working-20-things-to-check', content2)
text = replace_content(text, 'why-does-iptv-keep-buffering', content3)

with open(r'src/data/blog.ts', 'w', encoding='utf-8') as f:
    f.write(text)
