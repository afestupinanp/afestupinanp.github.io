enum SkillType {
    ProgrammingLanguage = 'programming-language',
    UI = 'ui',
    Tools = 'tools',
    DevOps = 'devops',
    Frameworks = 'frameworks',
    OperatingSystems = 'operating-systems',
    Databases = 'databases',
    Testing = 'testing',
    AiFrameworks = 'ai-frameworks',
}

export const SKILL_TYPE_TO_LANGUAGE_KEY: Record<SkillType, string>= {
    [SkillType.ProgrammingLanguage]: 'about.abilities-category-programming-language',
    [SkillType.UI]: 'about.abilities-category-ui',
    [SkillType.Tools]: 'about.abilities-category-tools',
    [SkillType.DevOps]: 'about.abilities-category-devops',
    [SkillType.Frameworks]: 'about.abilities-category-frameworks',
    [SkillType.OperatingSystems]: 'about.abilities-category-operating-systems',
    [SkillType.Databases]: 'about.abilities-category-databases',
    [SkillType.Testing]: 'about.abilities-category-testing',
    [SkillType.AiFrameworks]: 'about.abilities-category-ai-frameworks',
}

export default SkillType;
