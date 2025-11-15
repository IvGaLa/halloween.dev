/*
Jigsaw: "Hola, quiero jugar un juego…"

Tienes una cerradura de combinación con 4 ruedas. Cada rueda muestra un dígito del 0 al 9. La cerradura actualmente muestra un código, pero necesitas cambiarla a otro código.

"Puedes girar cada rueda hacia arriba (+1) o hacia abajo (-1). Las ruedas son circulares: después del 9 viene el 0, y antes del 0 está el 9.

Tienes que conseguir cambiar la combinación con el mínimo número de movimientos. Si haces un paso en falso… estás muerto.

Implementa la función changeLock(current, target) con la entrada:

current: Código actual (string de 4 dígitos, ej: '0022')
target: Código objetivo (string de 4 dígitos, ej: '0044')
La salida que se espera es el número mínimo de movimientos necesarios para llegar a la combinación objetivo.

Reglas:

Cada rueda puede girar +1 o -1
Las ruedas son circulares: 9→0 y 0→9
Cada giro cuenta como 1 movimiento
Las 4 ruedas son independientes
 */

function changeLock(current: string, target: string): number {
  let moves: number = 0;
  const len: number = current.length;

  for (let i: number = 0; i < len; i++) {
    const _current = Number(current[i]);
    const _target = Number(target[i]);

    const forward = (_target - _current + 10) % 10;
    const backward = (_current - _target + 10) % 10;

    moves += Math.min(forward, backward);
  }

  return moves;
}

console.log(changeLock('0022', '0044'));
// → 4
// Rueda 2: 2→4 (2 movimientos hacia adelante)
// Rueda 3: 2→4 (2 movimientos hacia adelante)
// Total: 2+2 = 4

console.log(changeLock('0000', '9999'));
// → 4
// Cada rueda: 0→9 (1 movimiento hacia atrás es más rápido que 9 hacia adelante)
// Total: 1+1+1+1 = 4

console.log(changeLock('1234', '5678'));
// → 16
// Rueda 0: 1→5 (4 movimientos)
// Rueda 1: 2→6 (4 movimientos)
// Rueda 2: 3→7 (4 movimientos)
// Rueda 3: 4→8 (4 movimientos)
// Total: 4+4+4+4 = 16

console.log(changeLock('0000', '0000'));
// → 0
// Ya estamos en el código objetivo

console.log(changeLock('1357', '2468'));
// → 4
// Rueda 0: 1→2 (1 movimiento)
// Rueda 1: 3→4 (1 movimiento)
// Rueda 2: 5→6 (1 movimiento)
// Rueda 3: 7→8 (1 movimiento)
// Total: 1+1+1+1 = 4
