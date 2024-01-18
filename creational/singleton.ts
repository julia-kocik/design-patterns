{
    class DateTimeFormatter {
    private static _instance: DateTimeFormatter | null = null;
    private _intl: Intl.DateTimeFormat;

    // Prevent creating new instances.
    private constructor() {
       console.log( 'Intl.DateTimeFormat instance created.' );
       this._intl = new Intl.DateTimeFormat( 'en-US' );
    }

    public static getInstance(): DateTimeFormatter {
       if( this._instance === null ) {
           this._instance = new DateTimeFormatter();
       }

       return this._instance;
    }

    public format( date: Date ): string {
       return this._intl.format( date );
    }
}

const formatter: DateTimeFormatter = DateTimeFormatter.getInstance();

const formattedDates: string[] = [];

formattedDates.push( formatter.format( new Date( '1990-01-01' ) ) );
formattedDates.push( formatter.format( new Date( '2018-01-04' ) ) );
formattedDates.push( formatter.format( new Date( '2003-02-12' ) ) );

console.log( formattedDates );
}