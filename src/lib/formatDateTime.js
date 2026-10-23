/**
 * Convert a model date string such as "2012-08-30 10:44:23" or
 * "2016-01-04 2:00:01" into a user-friendly string.
 */
function formatDateTime(dateString) {
  const match = /^(\d{4})-(\d{1,2})-(\d{1,2})[ T](\d{1,2}):(\d{2}):(\d{2})/.exec(dateString);
  const date = match
    ? new Date(+match[1], +match[2] - 1, +match[3], +match[4], +match[5], +match[6])
    : new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return String(dateString);
  }
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default formatDateTime;
