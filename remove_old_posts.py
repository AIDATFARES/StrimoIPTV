import re

with open('src/data/blog.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# We want to find the beginning of the export statement
start_idx = content.find("export const blogPosts: BlogPost[] = [")
if start_idx == -1:
    print("Could not find the start of the array")
    exit(1)

# Find where ID 5 starts
id5_idx = content.find('{', content.find('id: "5"'))
if id5_idx == -1:
    id5_idx = content.find('{', content.find('id: "5"') - 50)
    # wait, the { is before id: "5". Let's search for 'id: "5"' and find the preceding '{'
    
match = re.search(r'\{\s*id:\s*"5"', content[start_idx:])
if match:
    # Everything before the array start + array start itself
    array_start_content = content[:start_idx + len("export const blogPosts: BlogPost[] = [")]
    
    # Everything from { id: "5" onwards
    rest_content = content[start_idx + match.start():]
    
    new_content = array_start_content + "\n  " + rest_content
    
    with open('src/data/blog.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully removed old blog posts")
else:
    print("Could not find ID 5")
