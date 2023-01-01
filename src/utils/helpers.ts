import type { SkillLevel } from '@prisma/client';
import moment from 'moment';

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

export const formatDateDifference = (start: Date, end: Date) => {
    const diffs = {
        w: moment(end).diff(start, 'weeks'),
        m: parseFloat(moment(end).diff(start, 'months', true).toFixed(1)),
        y: parseFloat(moment(end).diff(start, 'years', true).toFixed(1)),
    }

    if (!diffs.w)
        return 'Just started 🎉';
    if (diffs.m < 1)
        return `${diffs.w} week${diffs.w === 1 ? '' : 's'}`;
    if (diffs.y < 1) {
        const remainderWeeks = (diffs.m % 1) * 4;
        return `${diffs.m.toFixed()} month${diffs.m === 1 ? '' : 's'} and ${remainderWeeks.toFixed()} week${remainderWeeks === 1 ? '' : 's'}`
    }

    const remainderMonths = (diffs.y % 1) * 12;
    return `${diffs.y.toFixed()} year${diffs.y === 1 ? '' : 's'} and ${remainderMonths.toFixed()} month${remainderMonths === 1 ? '' : 's'}`

}