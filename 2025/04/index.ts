/*
Ring, ring… 📞

Ghostface: "Hola, Sidney… Tengo una lista de 1000 víctimas potenciales con sus números de teléfono. Tu amigo está en algún lugar de esta lista. ¿Puedes encontrarlo antes de que sea demasiado tarde?"

Te da un array ORDENADO de números de teléfono (de menor a mayor) y necesitas encontrar uno específico lo más rápido posible.

El problema: Con 1000 números, buscar uno por uno sería demasiado lento. Necesitas un algoritmo más inteligente…

💻 El Desafío
Implementa la función searchPhone(phones, target) usando BÚSQUEDA BINARIA

Entradas:

phones: Array de números ordenados de menor a mayor (ej: [1001, 1002, 1005, 1008, ...])
target: Número de teléfono que buscas
Salida:

El índice (posición) donde se encuentra el número
-1 si no existe en la lista

El consejo…
No tienes tiempo que perder. Necesitas buscar el número lo más rápido posible para que Ghostface no acabe con su víctima. Por eso, lo mejor sería usar un Algoritmo de Búsqueda Binaria:

Mira el elemento del medio del array
Si es el número que buscas → ¡lo encontraste!
Si el objetivo es menor → busca en la mitad izquierda
Si el objetivo es mayor → busca en la mitad derecha
Repite hasta encontrarlo o quedarte sin elementos
🧠 Visualización del Algoritmo
Busquemos el número 1008 en [1001, 1002, 1005, 1008, 1010, 1015, 1020]:

Paso 1: Revisar el medio
[1001, 1002, 1005, |1008|, 1010, 1015, 1020]
                     ↑
Medio = índice 3 → ¡Encontrado! Retorna 3
Busquemos el número 1015:

Paso 1: Revisar el medio
[1001, 1002, 1005, |1008|, 1010, 1015, 1020]
                     ↑
1015 > 1008 → Buscar en la mitad DERECHA

Paso 2: Nuevo rango [1010, 1015, 1020]
[1010, |1015|, 1020]
        ↑
Medio = índice 5 → ¡Encontrado! Retorna 5
Ten en cuenta que la lista de números puede ser muy larga como para hacer una búsqueda líneal.
 */

function searchPhone(phones: number[], target: number): number {
  let left = 0;
  let right = phones.length - 1;

  while (left <= right) {
    const mid = (left + right) >> 1; // Hacemos la división entre 2 con un desplazamiento de bit en lugar de "index/2"
    const value = phones[mid];

    if (value === target) return mid;
    if (value < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020];

console.log(searchPhone(phones, 1008));
// → 3 (está en el índice 3)

console.log(searchPhone(phones, 1001));
// → 0 (está en el índice 0)

console.log(searchPhone(phones, 1020));
// → 6 (está en el índice 6)

console.log(searchPhone(phones, 9999));
// → -1 (no existe)
