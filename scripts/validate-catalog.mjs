import {readFile} from 'node:fs/promises';
const catalog=JSON.parse(await readFile(new URL('../catalog.json',import.meta.url),'utf8'));
if(catalog.schemaVersion!==1||!Array.isArray(catalog.plugins)||catalog.plugins.length>2000)throw Error('Formato de catálogo inválido');
const ids=new Set();
for(const p of catalog.plugins){
 if(!/^[a-z0-9-]+(?:\.[a-z0-9-]+)+$/.test(p.id)||ids.has(p.id))throw Error('ID inválido ou duplicado: '+p.id);
 ids.add(p.id);
 for(const key of ['name','description','author'])if(typeof p[key]!=='string'||!p[key].trim())throw Error('Campo ausente: '+key);
 for(const key of ['version','minIdeVersion'])if(!/^\d+\.\d+\.\d+$/.test(p[key]))throw Error('Versão inválida: '+p.id);
 const u=new URL(p.repository);if(u.protocol!=='https:'||u.username||u.password||u.search||u.hash)throw Error('URL inválida: '+p.id);
 if(!/^[a-f0-9]{40}$/.test(p.revision))throw Error('Use o commit completo: '+p.id);
}
console.log(catalog.plugins.length+' plugins; catálogo válido.');
