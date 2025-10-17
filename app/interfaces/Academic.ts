import type AcademicCategory from "@/enums/AcademicCategory";

export default interface Academic {
    title: string;
    time: string;
    location: string;
    category: AcademicCategory;
}
