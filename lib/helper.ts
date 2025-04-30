import { differenceInDays, format } from "date-fns";

export const convertDate = (date: any) => {
    try {
        const createdAt = new Date(date);
        const now = new Date();

        const formattedDate = format(createdAt, 'd, MMM yyyy');

        const daysAgo = differenceInDays(now, createdAt);
        const daysAgoText = daysAgo >= 0 ? `(${daysAgo} day${daysAgo === 1 ? '' : 's'} ago)` : '(in the future)';

        const displayDate = `${formattedDate} ${daysAgoText}`;

        return displayDate;

    } catch (error: any) {
        console.error("Error converting Date: ", error);
    }
}