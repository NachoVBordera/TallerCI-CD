export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const MONTHNAMES = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = MONTHNAMES[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
};
