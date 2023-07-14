export function parseTimestamp(timestamp: string): string {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const parsedTime = `${year}/${month}/${day}`;
  return parsedTime;
}

export function parseTime(time: string): string {
  const date = new Date(time);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  const parsedTime = date.toLocaleDateString("en-US", options);
  return parsedTime;
}

export function parseNumber(number: number): string {
  if (number >= 1000 && number < 1000000) {
    return `${(number / 1000).toFixed(0)}k`;
  }

  if (number >= 1000000) {
    return `${(number / 1000000).toFixed(0)}M`;
  }

  return number.toString();
}
