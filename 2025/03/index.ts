/*
Michael Myers ha dejado un patrón en su calendario…

Cada año ataca en noche de Halloween (31 de octubre) o en cualquier viernes 13.

Tu misión es encontrar todas las noches de terror de un año concreto 🩸

Recibirás un año (por ejemplo 2025) y deberás devolver un array con todas las fechas en formato 'YYYY-MM-DD' donde Michael Myers podría atacar.

Si no dan un año válido, devuelve un array vacío.
Devuelve todas las fechas del año que sean 31 de octubre, y/o viernes 13.
Las fechas deben estar ordenadas cronológicamente.
El formato debe ser exactamente 'YYYY-MM-DD' (con ceros a la izquierda si hace falta).
 */

function myersCalendar(year: number): string[] {
  if (!Number.isInteger(year) || !(year > 0)) return [];

  const result: string[] = [];

  result.push(`${year}-10-31`);

  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);

    if (date.getDay() === 5) {
      const monthStr = String(month + 1).padStart(2, '0');
      result.push(`${year}-${monthStr}-13`);
    }
  }

  return result.sort();
}

console.log(myersCalendar(2025)); // En el ejemplo se da por bueno el día 2025-05-13 pero ese día NO es viernes 13
// → ['2025-06-13', '2025-10-31']

console.log(myersCalendar(2026));
// → ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13']

console.log(myersCalendar(2024));
// → ['2024-09-13', '2024-10-31', '2024-12-13']
