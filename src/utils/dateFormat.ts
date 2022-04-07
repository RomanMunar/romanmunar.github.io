import { parseISO, format } from "date-fns";

export const formatDate = (date: string, dateFormat?: string) => {
  return format(parseISO(date), dateFormat ?? "MMMM dd, yyyy");
};
