import { getNextThursdayLondon1230, formatGoogleDateTime } from './time';

export function generateGoogleCalendarLink(): string {
  const start = getNextThursdayLondon1230();
  const end = new Date(start.getTime() + 30 * 60000);

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: '🍵 Matcha Time',
    details: "Let's take a matcha break together 🍵",
    location: 'Cloudflare London Office',
    dates: `${formatGoogleDateTime(start)}/${formatGoogleDateTime(end)}`,
    ctz: 'Europe/London',
  });

  return `https://www.google.com/calendar/render?${params.toString()}`;
}
