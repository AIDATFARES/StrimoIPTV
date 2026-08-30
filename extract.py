import json
import traceback

try:
    with open('articles_content.txt', 'r', encoding='utf-8') as f:
        text = f.read()

    start = text.find('"export interface')
    if start != -1:
        # It's a JSON encoded string, so we just wrap it in a list to decode
        json_str = '[' + text[start:].strip() + ']'
        decoded = json.loads(json_str)[0]
        
        with open('src/data/blog.ts', 'w', encoding='utf-8') as out:
            out.write(decoded)
        print('Restored from articles_content.txt successfully!')
    else:
        print('Could not find start marker')
except Exception as e:
    print('Error:', traceback.format_exc())
