/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(dayOfThe: Week) {
  if (dayOfThe === Week.Saturday || dayOfThe === Week.Sunday) {
    return true;
  } else {
    return false;
  }
}
