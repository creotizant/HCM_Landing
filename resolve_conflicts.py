
import os

file_path = "d:/creotizant/HCM_Landing-main/HCM_Landing-main/src/app/components/ProductVisual.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

resolved_lines = []
in_conflict = False
in_incoming = False

for line in lines:
    if line.startswith('<<<<<<< HEAD'):
        in_conflict = True
        in_incoming = False
    elif line.startswith('======='):
        in_incoming = True
    elif line.startswith('>>>>>>>'):
        in_conflict = False
        in_incoming = False
    else:
        if not in_conflict:
            resolved_lines.append(line)
        elif in_incoming:
            resolved_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(resolved_lines)

print("Resolved conflicts in ProductVisual.tsx")
