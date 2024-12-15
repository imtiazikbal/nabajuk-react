export const formatDateToBengali = (date: Date) => {
    const bengaliFormatter = new Intl.DateTimeFormat('bn-BD', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return bengaliFormatter.format(date);
};