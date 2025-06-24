export function getNextThursdayLondon1230(): Date {
  const now = new Date();
  const today = now.getDay();

  const londonNow = new Date(now.getTime() + 0 * 60 * 60 * 1000); // UTC+0

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

  const result = new Date(now);
  result.setDate(now.getDate() + daysUntilThursday);
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
