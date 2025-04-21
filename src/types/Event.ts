// export enum AgeGroup {
//     men = 1,
//     women,
//     young,
//     children
// };

export type MyEvent = {
    id: string,
    name: string,
    description?: string,
    producerEmail:string
}

export type EventContextType = {
    
    events: MyEvent[],
    refresh: () => Promise<unknown>
<<<<<<< HEAD
}
=======
}
>>>>>>> 406c578b17aba53b5dcd34211c6ab0ec617218a6
