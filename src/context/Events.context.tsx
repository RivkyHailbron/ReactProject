import { createContext } from "react";
import { AgeGroup, EventContextType, MyEvent } from "../types/Event";

export const EventsContext = createContext<Partial<EventContextType>>({});
export const EventsProvider = (props: any)=>{
    const arr: MyEvent []= [
        {
            id: "1",
            name: "פסטיבל מוזיקה חיה",
            producerName: "Live Events Ltd",
            description: "פסטיבל עם הופעות של אמנים מובילים מכל העולם",
            ageGroup: AgeGroup.young,
        },
        {
            id: "2",
            name: "סדנת יצירה לילדים",
            producerName: "KidsArt Studio",
            description: "סדנה כיפית ליצירת יצירות אמנות בצבעי מים",
            ageGroup: AgeGroup.children,
        },
        {
            id: "3",
            name: "כנס סטארט-אפים",
            producerName: "TechHub",
            description: "מפגש ליזמים, משקיעים וחובבי טכנולוגיה",
            ageGroup: AgeGroup.men,
        },
        {
            id: "4",
            name: "תחרות משחקי וידאו",
            producerName: "eSports League",
            description: "למדו להכין פסטות וריזוטו כמו שפים מקצועיים",
            ageGroup: AgeGroup.young,
        },
        {
            id: "5",
            name: "סדנת בישול איטלקי",
            producerName: "Gourmet Academy",
            description: "למדו להכין פסטות וריזוטו כמו שפים מקצועיים",
            ageGroup: AgeGroup.women,
        },
    ];
    const contextValue: EventContextType = {
        events: arr!,
    }


    return <EventsContext.Provider value={contextValue}>
        {props.children}
    </EventsContext.Provider>
}