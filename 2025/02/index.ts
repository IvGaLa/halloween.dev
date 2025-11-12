/*
Es medianoche en Elm Street y necesitas dormir urgentemente. Intentas contar ovejas, pero las letras en tu mente están completamente desordenadas por culpa de Freddy.

Tienes una cadena de texto caótica con letras mezcladas. Tu único escape es contar cuántas veces puedes formar la palabra "sheep" (oveja en inglés) antes de que Freddy te atrape en la pesadilla.

Tu misión: Contar cuántas ovejas completas puedes formar con las letras disponibles.

Crea una función countSheep(letters) que:

Reciba un string con letras desordenadas
Cuente cuántas veces se puede formar la palabra "sheep"
Devuelva el número de ovejas completas que puedes contar
Importante: Para formar "sheep" necesitas: s, h, e, e, p (la 'e' aparece 2 veces)

countSheep('sheepxsheepy')
// → 2 (puedes formar "sheep" dos veces)

countSheep('sshhheeeepppp')
// → 2 (s=2, h=3, e=4, p=4 → solo 2 "sheep" completas)

countSheep('hola')
// → 0 (no hay suficientes letras)

countSheep('peesh')
// → 1 (las letras están desordenadas pero están todas)
 */
function countSheep(letters: string): number {
  type SheepCount = { s: number; h: number; e: number; p: number };
  
  const counts: SheepCount = { s: 0, h: 0, e: 0, p: 0 };
  
  letters = letters.toLowerCase();

  for (let i: number = 0; i < letters.length; i++) {
    const c = letters[i];
    if (c === 's' || c === 'h' || c === 'e' || c === 'p') {
      counts[c]++;
    }
  }

  // Compute how many times we can form "sheep" (2 e's required)
  return Math.floor(Math.min(counts.s, counts.h, counts.e / 2, counts.p));
}

console.log(countSheep('sheepxsheepy'));
// → 2 (puedes formar "sheep" dos veces)

console.log(countSheep('sshhheeeepppp'));
// → 2 (s=2, h=3, e=4, p=4 → solo 2 "sheep" completas)

console.log(countSheep('hola'));
// → 0 (no hay suficientes letras)

console.log(countSheep('peesh'));
// → 1 (las letras están desordenadas pero están todas)

console.log(countSheep('ssshhheeeppp'));
// → 1
