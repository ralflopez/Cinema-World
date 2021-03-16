interface ITimeSlot {
    time: string,
    cinema: string | number
}

interface IMovie {
    _id?: string,
    _v?: number,
    title: string,
    year: number,
    poster_url: string,
    time: Array<ITimeSlot>
    seats: boolean[] 
}

interface IShowing {
    now_showing: Array<IMovie>,
}