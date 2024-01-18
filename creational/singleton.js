"use strict";
{
    class DateTimeFormatter {
        // Prevent creating new instances.
        constructor() {
            console.log('Intl.DateTimeFormat instance created.');
            this._intl = new Intl.DateTimeFormat('en-US');
        }
        static getInstance() {
            if (this._instance === null) {
                this._instance = new DateTimeFormatter();
            }
            return this._instance;
        }
        format(date) {
            return this._intl.format(date);
        }
    }
    DateTimeFormatter._instance = null;
    const formatter = DateTimeFormatter.getInstance();
    const formattedDates = [];
    formattedDates.push(formatter.format(new Date('1990-01-01')));
    formattedDates.push(formatter.format(new Date('2018-01-04')));
    formattedDates.push(formatter.format(new Date('2003-02-12')));
    console.log(formattedDates);
}
