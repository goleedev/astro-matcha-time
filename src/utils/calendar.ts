import { getNextThursdayLondon1230, formatGoogleDateTime } from './time';

type CalendarOptions = {
  location?: string;
  dates?: { start: Date; end: Date };
  ctz?: string;
};

export function generateGoogleCalendarLink(
  options: CalendarOptions = {}
): string {
  const {
    location = 'Cloudflare London Office',
    dates = (() => {
      const start = getNextThursdayLondon1230();
      const end = new Date(start.getTime() + 30 * 60000);
      return { start, end };
    })(),
    ctz = 'Europe/London',
  } = options;

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: '🍵 Matcha Time',
    details: "Let's take a matcha break together 🍵",
    location,
    dates: `${formatGoogleDateTime(dates.start)}/${formatGoogleDateTime(
      dates.end
    )}`,
    ctz,
  });

  return `https://www.google.com/calendar/render?${params.toString()}`;
}
