export class TimeUtil {
  static parseDate(dateStr: string): string | null {
    const [day, month, year] = dateStr.split('/');
    const date = `${year}-${month}-01`;
    return date.length === 1 ? null : date;
  }

  static getFirstDaysOfMonths(startDate: string, endDate: string): string[] {
    const firstDays: string[] = [];

    let currentDate = new Date(startDate);
    const finalDate = new Date(endDate);
    currentDate.setDate(1);

    while (currentDate <= finalDate) {
      const year = currentDate.getFullYear();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // דואגים שהחודש יכיל שני ספרות
      firstDays.push(`${year}-${month}-01`);
      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return firstDays;
  }
}
