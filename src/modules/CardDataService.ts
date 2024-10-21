export interface CardDataService {
    title?: string;
    text?: string;
    imgSrc?: string;
    m_text?: string;
    fields: {
        visaConsultation?: string[];
        relocationAssistance?: string[];
        documentTranslation?: string[];
        legalSupport?: string[];
        icon_aps?:string[];
    };
    id:number;
    className?: string;
}