import json
import re

with open('article4.md', 'r', encoding='utf-8') as f:
    new_content = f.read()

new_content = new_content.replace('different IPTV player', 'different [**IPTV player**](/blog/how-to-choose-best-iptv-service-2026)', 1)

with open(r'src/data/blog.ts', 'r', encoding='utf-8') as f:
    text = f.read()

pattern = r'(slug:\s*\"iptv-works-on-one-device-but-not-another\".*?content:\s*`)(.*?)(`\s*\n\s*\}\s*\];)'
match = re.search(pattern, text, re.DOTALL)
if match:
    new_text = text[:match.start(2)] + new_content + text[match.end(2):]
    with open(r'src/data/blog.ts', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print('Successfully updated article 4!')
else:
    print('Could not find article 4 content to replace. Text length:', len(text))
    # let's try finding the start
    start_idx = text.find('slug: "iptv-works-on-one-device-but-not-another"')
    print("Start index:", start_idx)
