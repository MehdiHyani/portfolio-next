import type { SkillLevel } from '@prisma/client';

export const formatFullName = (firstName: string, lastName: string) => {
    return `${firstName[0]?.toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName.toUpperCase()}`
}

export const getValueForSkillLevel = (skillLevel: SkillLevel) => {
    switch (skillLevel) {
        case 'expert':
            return 90;
        
        case 'intermediate':
            return 60;
        
        case 'beginner':
        default:
            return 30;
    }
}