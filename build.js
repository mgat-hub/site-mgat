const fs = require('fs');
const path = require('path');

const root = __dirname;
const publicDir = path.join(root, 'public');

// Limpar e recriar public/
if (fs.existsSync(publicDir)) {
  fs.rmSync(publicDir, { recursive: true });
}
fs.mkdirSync(publicDir);

// Copiar arquivos e pastas
const itemsToCopy = ['index.html', 'css', 'js', 'MGAT_Kit_Visual'];

itemsToCopy.forEach(item => {
  const src = path.join(root, item);
  const dest = path.join(publicDir, item);
  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, { recursive: true });
    console.log(`Copiado: ${item}`);
  } else {
    console.log(`Ignorado (não existe): ${item}`);
  }
});

console.log('Build concluído.');