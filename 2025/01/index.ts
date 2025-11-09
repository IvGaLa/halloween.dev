/*
Regan ha sido poseída y ahora habla en un lenguaje extraño 😱. El padre Karras ha descubierto que cuando Regan está poseída, invierte completamente las palabras que dice, pero mantiene el orden de las frases.

Tu misión es crear un programa que traduzca los mensajes poseídos de Regan al lenguaje humano normal.

Por ejemplo:

const message = 'i yojne gnihctaw uoy'
translatePossessed(message) // "i enjoy watching you"
Los espacios entre palabras deben mantenerse:

const message = 'siht si gnorw'
translatePossessed(message) // "this is wrong"
Si el mensaje está vacío o solo contiene espacios, devuelve una cadena vacía:

const message = '      '
translatePossessed(message) // ""
Las palabras pueden contener mayúsculas y minúsculas, y deben mantenerse:

const message = 'dooG secitcarP'
translatePossessed(message) // "Good Practices"
 */
function translatePossessed(message: string): string {
  if (!message.trim()) return '';
  return message
    .split(' ')
    .map((word) => [...word].reverse().join(''))
    .join(' ');
}

console.log(translatePossessed('i yojne gnihctaw uoy'));
console.log(translatePossessed('siht si gnorw'));
console.log(translatePossessed('      '));
console.log(translatePossessed('  dlrow eht  '));
console.log(translatePossessed('dooG secitcarP'));
