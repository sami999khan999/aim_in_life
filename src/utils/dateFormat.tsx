export function formatDate(dateString: string): string {
  // Create a new Date object from the input string
  const date = new Date(dateString);

  // Define the formatting options for the date
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short", // "Wed"
    month: "long", // "August"
    day: "numeric", // "13"
  };

  // Use Intl.DateTimeFormat to format the date according to the options and 'en-US' locale
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
