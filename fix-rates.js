import fs from 'fs';

const filePath = 'client/src/pages/Home.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// The correct prices based on MG:
// 6 MG / Nano = 183.52
// 10 MG = 231.34
// 14 MG = 260.13
// 17 MG = 279

const veloRegex = /\{\s*brand:\s*"([^"]+)",\s*category:\s*"Velo",\s*unitRate:\s*"[^"]+",\s*rate:\s*[0-9.]+,\s*wsFiler:\s*"([^"]+)",\s*wsNonFiler:\s*"([^"]+)",\s*\}/g;

content = content.replace(veloRegex, (match, brand, wsFiler, wsNonFiler) => {
  let unitRate = 0;
  
  if (brand.includes("17 MG") || brand.includes("17MG")) {
    unitRate = 279;
  } else if (brand.includes("14 MG")) {
    unitRate = 260.13;
  } else if (brand.includes("10 MG") || brand.includes("10")) {
    unitRate = 231.34;
  } else if (brand.includes("6 MG") || brand.includes("Nano")) {
    unitRate = 183.52;
  } else {
    // fallback
    unitRate = 231.34;
  }
  
  const newRate = unitRate * 5;
  const formattedRate = Number.isInteger(newRate) ? newRate : parseFloat(newRate.toFixed(2));
  
  return `{
    brand: "${brand}",
    category: "Velo",
    unitRate: "${unitRate}",
    rate: ${formattedRate},
    wsFiler: "${wsFiler}",
    wsNonFiler: "${wsNonFiler}",
  }`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done fixing velo rates by MG!');
