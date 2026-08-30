import json

content = ''
with open(r'C:\Users\ASUS\.gemini\antigravity\brain\7a8b27ad-a1d0-4835-ace3-f024438baf77\.system_generated\logs\overview.txt', 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('created_at', '') >= '2026-08-27T17:28:00Z':
                break
            
            tool_calls = data.get('tool_calls', [])
            for call in tool_calls:
                name = call.get('name')
                args = call.get('args', {})
                if 'blog.ts' in args.get('TargetFile', ''):
                    if name == 'write_to_file':
                        content = args.get('CodeContent', '')
                        # unescape if necessary
                        if content.startswith('\"export') and content.endswith(';\n\"') or content.endswith(';\n\"'):
                            try:
                                content = json.loads(content)
                            except:
                                pass
                    elif name == 'replace_file_content':
                        target = args.get('TargetContent', '')
                        repl = args.get('ReplacementContent', '')
                        if target in content:
                            content = content.replace(target, repl)
                    elif name == 'multi_replace_file_content':
                        for chunk in args.get('ReplacementChunks', []):
                            target = chunk.get('TargetContent', '')
                            repl = chunk.get('ReplacementContent', '')
                            if target in content:
                                content = content.replace(target, repl)
        except Exception as e:
            pass

with open('src/data/blog.ts', 'w', encoding='utf-8') as out:
    out.write(content)
print('File fully reconstructed, length:', len(content))
