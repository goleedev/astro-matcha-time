export function getNextThursdayLondon1230(): Date {
  const now = new Date();
  const londonTimeString = now.toLocaleString('en-CA', {
    timeZone: 'Europe/London',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const [datePart, timePart] = londonTimeString.split(', ');
  const londonNow = new Date(`${datePart}T${timePart}`);

  const today = londonNow.getDay();

  let daysUntilThursday: number;

  if (today === 4) {
    const currentHour = londonNow.getHours();
    const currentMinute = londonNow.getMinutes();

    if (currentHour < 12 || (currentHour === 12 && currentMinute < 30)) {
      daysUntilThursday = 0;
    } else {
      daysUntilThursday = 7;
    }
  } else {
    daysUntilThursday = (4 - today + 7) % 7;
    if (daysUntilThursday === 0) {
      daysUntilThursday = 7;
    }
  }

  const targetLondonDate = new Date(londonNow);
  targetLondonDate.setDate(londonNow.getDate() + daysUntilThursday);
  targetLondonDate.setHours(12, 30, 0, 0);

  const year = targetLondonDate.getFullYear();
  const month = targetLondonDate.getMonth();
  const date = targetLondonDate.getDate();

  const tempDate = new Date(year, month, date, 12, 30, 0);
  const londonTimestamp = tempDate.getTime();

  const londonOffsetMinutes = tempDate.getTimezoneOffset();
  const londonOffsetMs = londonOffsetMinutes * 60 * 1000;

  const utcTimestamp = londonTimestamp + londonOffsetMs;

  const result = new Date();
  result.setFullYear(year, month, date);

  result.setUTCHours(11, 30, 0, 0);

  return result;
}

export function formatGoogleDateTime(date: Date): string {
  return (
    date
      .toISOString()
      .replace(/[-:]|\.\d{3}/g, '')
      .slice(0, 15) + 'Z'
  );
}
