import re

with open(r'D:\IPTV branded\zyminex iptv\.next\server\chunks\_0muyrbf._.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

match = re.search(r'(const blogPosts\s*=\s*\[.*?\];)', text, re.DOTALL)
if match:
    print('Found const blogPosts')
    with open('extracted_blogPosts.txt', 'w', encoding='utf-8') as out:
        out.write(match.group(1))
else:
    # Try finding just an array that has our unique strings
    match = re.search(r'(\[\s*\{\s*id\s*:\s*(?:"|\')1(?:"|\').*?\])', text, re.DOTALL)
    if match:
        print('Found raw array')
        with open('extracted_blogPosts.txt', 'w', encoding='utf-8') as out:
            out.write(match.group(1))
    else:
        print('Not found')
