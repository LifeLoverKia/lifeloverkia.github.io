"""Build a dependency-free static site and an offline review copy."""
from pathlib import Path
import json,base64
ROOT=Path(__file__).resolve().parents[1]
dist=ROOT/'dist'
data={p.stem:json.loads(p.read_text()) for p in (dist/'data').glob('*.json')}
text=(ROOT/'template.html').read_text().replace('__DATA__',json.dumps(data,ensure_ascii=False).replace('<','\\u003c'))
(dist/'index.html').write_text(text)
# Single-file copy for review without a server; built from exactly the same sources.
standalone=text.replace('<link rel="stylesheet" href="assets/styles.css">','<style>'+(dist/'assets/styles.css').read_text()+'</style>').replace('<script src="assets/app.js"></script>','<script>'+(dist/'assets/app.js').read_text()+'</script>')
image=base64.b64encode((dist/'assets/chiara-saracini.jpg').read_bytes()).decode()
standalone=standalone.replace('src="assets/chiara-saracini.jpg"','src="data:image/jpeg;base64,'+image+'"')
for name in ['Comfortaa','Pangolin']:
 font=base64.b64encode((dist/'assets/fonts'/(name+'.woff2')).read_bytes()).decode()
 standalone=standalone.replace('url("fonts/'+name+'.woff2")','url("data:font/woff2;base64,'+font+'")')
(ROOT/'Chiara-Saracini-anteprima.html').write_text(standalone)
print('Built static site and standalone preview.')
