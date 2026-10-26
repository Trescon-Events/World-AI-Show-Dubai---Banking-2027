import sys
import re

with open(r'C:\Users\Lohith BC\.gemini\antigravity\brain\a822163e-9479-4804-a55d-268b2714ab04\.system_generated\steps\3\content.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract HTML content
match = re.search(r'<!DOCTYPE html>.*</html>', content, re.DOTALL)
if match:
    html = match.group(0)
    
    # Replace the default sessions
    s1 = 'Observability for the AI Era: Managing Performance, Reliability and Cost at Scale'
    s2 = 'AI for Banking and Financial Services: Fraud, Risk, Compliance and Intelligent Operations'
    
    html = html.replace('Beyond Golden Signals: Monitoring in the Age of GenAI', s1)
    html = html.replace('Generative AI Beyond Copilots: Towards Intelligent Enterprise Automation', s2)
    
    # Replace confirm scan buttons labels
    html = html.replace('✓ Beyond Golden Signals', '✓ Observability for the AI Era')
    html = html.replace('✓ Generative AI Beyond Copilots', '✓ AI for Banking and Financial Services')
    
    # Replace default current session
    html = html.replace("'Day 1: REGISTRATION & NETWORKING'", f"'{s1}'")
    
    # Replace select options
    old_options = '''<option value="Morning Keynote">Morning Keynote</option>
          <option value="Workshop A">Workshop A</option>
          <option value="Workshop B">Workshop B</option>
          <option value="Panel Discussion">Panel Discussion</option>
          <option value="Closing Ceremony">Closing Ceremony</option>'''
          
    new_options = f'''<option value="{s1}">{s1}</option>
          <option value="{s2}">{s2}</option>'''
          
    html = html.replace(old_options, new_options)
    
    with open('index.html', 'w', encoding='utf-8') as out:
        out.write(html)
    print('index.html created successfully.')
else:
    print('Failed to find HTML.')
