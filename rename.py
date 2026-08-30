import os
import re

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return False
        
    original = content
    # Order matters: replace longer strings first
    replacements = [
        ("Zyminex IPTV", "Realm IPTV"),
        ("zyminex iptv", "realm iptv"),
        ("Zyminex-IPTV", "Realm-IPTV"),
        ("zyminex-iptv", "realmiptv"),
        ("Zyminexiptv", "Realmiptv"),
        ("zyminexiptv", "realmiptv"),
        ("Zyminex", "Realm"),
        ("zyminex", "realm"),
        ("ZYMINEX", "REALM")
    ]
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")
        return True
    return False

def main():
    rootDir = '.'
    for dirpath, dirnames, filenames in os.walk(rootDir):
        if '.git' in dirpath or 'node_modules' in dirpath or '.next' in dirpath:
            continue
        for filename in filenames:
            if filename.endswith(('.ts', '.tsx', '.js', '.jsx', '.css', '.md', '.json', '.txt', '.mjs', '.html')):
                filepath = os.path.join(dirpath, filename)
                replace_in_file(filepath)

if __name__ == '__main__':
    main()
