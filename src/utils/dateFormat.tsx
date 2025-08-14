export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  // Check if the date is valid before formatting
  if (isNaN(date.getTime())) {
    // Return a default value or handle the error
    console.error("Invalid date string provided:", dateString);
    return "Invalid Date";
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}
