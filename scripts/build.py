"""Build the home page, three archives, and an offline review copy."""
from pathlib import Path
import json,base64
ROOT=Path(__file__).resolve().parents[1]
dist=ROOT/'dist'
data={p.stem:json.loads(p.read_text()) for p in (dist/'data').glob('*.json')}
def embed(template,payload):
 return template.replace('__DATA__',json.dumps(payload,ensure_ascii=False).replace('<','\\u003c'))
text=embed((ROOT/'template.html').read_text(),data)
(dist/'index.html').write_text(text)
for page,keys in [('publications',['publications']),('conferences',['conferences','publications']),('outreach',['activities'])]:
 template=(ROOT/'list-template.html').read_text().replace('__PAGE__',page)
 (dist/(page+'.html')).write_text(embed(template,{k:data[k] for k in keys}))
standalone=text.replace('<link rel="stylesheet" href="assets/styles.css?v=20261101-materials">','<style>'+(dist/'assets/styles.css').read_text()+'</style>')
for name in ['labels','app']:
 standalone=standalone.replace(f'<script src="assets/{name}.js?v=20261101-materials"></script>','<script>'+(dist/'assets'/(name+'.js')).read_text()+'</script>')
image=base64.b64encode((dist/'assets/chiara-saracini.jpg').read_bytes()).decode()
standalone=standalone.replace('src="assets/chiara-saracini.jpg"','src="data:image/jpeg;base64,'+image+'"')
for name in ['Comfortaa','Pangolin']:
 font=base64.b64encode((dist/'assets/fonts'/(name+'.woff2')).read_bytes()).decode()
 standalone=standalone.replace("url('fonts/"+name+".woff2')","url('data:font/woff2;base64,"+font+"')")
(ROOT/'Chiara-Saracini-anteprima.html').write_text(standalone)
print('Built home and three archive pages.')
