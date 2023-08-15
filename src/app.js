let pronoun = ['yo', 'tu', 'el', 'nosotros', 'vosotros', 'ellos'];
let noun = ['mago', 'mapache', 'arbol', 'invocador', 'sniper', 'camper', 'silla', 'taza'];
let adj = ['super', 'alto', 'hondo', 'cansado', 'bello', 'redondo', 'magico', 'astral'];
let ext = ['.cl', '.com', '.com.ar', '.com.nz'];

function domainNameGenerator (pronoun, noun, adj, ext){

    let numPronoun = Math.floor(Math.random() * pronoun.length);
    let numNoun = Math.floor(Math.random() * noun.length);
    let numAdj = Math.floor(Math.random() * adj.length);
    let numExt = Math.floor(Math.random() * ext.length);

    return pronoun[numPronoun] + noun[numNoun] + adj[numAdj] + ext[numExt];
}

function onLoad(){
    let domainGen = document.getElementById('domainGenerator');
    domainGen.innerHTML = domainNameGenerator(pronoun, noun, adj, ext);
}

window.onload = onLoad;