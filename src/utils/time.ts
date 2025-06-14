export function getNextThursdayLondon1230(): Date {
  const now = new Date();
  const today = now.getDay();
  const daysUntilThursday = (4 - today + 7) % 7 || 7;

  const result = new Date(now);
  result.setDate(now.getDate() + daysUntilThursday);
  result.setUTCHours(11, 30, 0, 0); // London 12:30 PM = UTC 11:30
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
