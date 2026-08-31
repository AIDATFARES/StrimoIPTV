import re
content = open('src/data/blog.ts', encoding='utf-8').read()
matches = re.findall(r'id:\s*"(.*?)".*?slug:\s*"(.*?)".*?date:\s*"(.*?)"', content, re.DOTALL)
for m in matches:
    print(f"ID: {m[0]}, Slug: {m[1]}, Date: {m[2]}")
