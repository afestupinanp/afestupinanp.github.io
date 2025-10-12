import type SkillType from "@/enums/SkillType";

export default interface SkillInfo {
    color: string;
    name: string;
    icon: string;
    type: SkillType|string;
}