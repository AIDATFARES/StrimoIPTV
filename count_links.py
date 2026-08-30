import re

with open(r'src/data/blog.ts', 'r', encoding='utf-8') as f:
    text = f.read()

articles = re.findall(r'(slug:\s*\"(.*?)\".*?content:\s*`)(.*?)(`\s*\n\s*\}\s*[,\]])', text, re.DOTALL)
for pre, slug, content, post in articles:
    links = re.findall(r'\]\(\/.*?\)', content)
    print(slug, ':', len(links), 'links')
