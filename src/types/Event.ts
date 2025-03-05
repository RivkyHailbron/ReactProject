export enum AgeGroup {
    men = 1,
    women,
    young,
    children
};

export type MyEvent = {
    id: string,
    name: string,
    producerName: string,
    description?: string
    ageGroup: AgeGroup,
}

export type EventContextType = {
    events: MyEvent[],
    // updateTask: (id: string, newTask: Task) => void,
    // refresh: () => Promise<unknown>
}