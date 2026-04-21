import fs from 'fs';

const filePath = 'client/src/pages/Home.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// We want to match blocks for Velo products and update their rate based on unitRate
// Example block:
//   {
//     brand: "Berry Frost 6 MG",
//     category: "Velo",
//     unitRate: "183.52",
//     rate: 0,
//     wsFiler: "n/a",
//     wsNonFiler: "n/a",
//   },

const veloRegex = /\{\s*brand:\s*"(.*?)",\s*category:\s*"Velo",\s*unitRate:\s*"([0-9.]+)",\s*rate:\s*[0-9.]+,\s*wsFiler/g;

content = content.replace(veloRegex, (match, brand, unitRateStr) => {
  const unitRate = parseFloat(unitRateStr);
  const newRate = unitRate * 5;
  // Format to 2 decimal places if needed, but let's just use the exact number
  const formattedRate = Number.isInteger(newRate) ? newRate : parseFloat(newRate.toFixed(2));
  
  return `{
    brand: "${brand}",
    category: "Velo",
    unitRate: "${unitRateStr}",
    rate: ${formattedRate},
    wsFiler`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done replacing velo rates!');
