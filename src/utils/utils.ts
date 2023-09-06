export const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
    const date = new Date(dateString);
    return date.toLocaleDateString('sv', options);
}; 
  