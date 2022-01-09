export class User {
    constructor(
        public email: string = '',
        public password: string = '',
        public name: string = '',
        public address: string = '',
        public phone: string = '',
        public fav_list: number[] = [],
        public cart_list: {id:number, count:number}[] = [],
        public orders: {id:number, date_time:string, cart_list:{id:number, count:number}[]}[] = []
    ) { }
}