import { PrismaClient } from "@prisma/client";
import { about, experiences, hobbies, projects, skillCategories, socials } from "./seedData.mjs";

async function seedAbout(db)
{
    try {
        await db.about.deleteMany();
        await db.about.create({ data: about });
        console.log('About section seeded');
    } catch (error) {
        console.error('About section not seeded!')
        throw error;
    }
}

async function seedSkills(db)
{
    try {
        await db.skillCategory.deleteMany();
        await Promise.all(skillCategories.map(async (skillCategory) => {
            await db.skillCategory.create({
                data: {
                    name: skillCategory.name,
                    skills: {
                        createMany: {
                            data: skillCategory.skills
                        }
                    }
                }
            })
        }));
        console.log('Skills seeded');
    } catch (error) {
        console.error('Skills not seeded!')
        throw error;
    }
}

async function seedExperiences(db)
{
    try {
        await db.experience.deleteMany();
        await db.experience.createMany({ data: experiences });
        console.log('Experiences section seeded');
    } catch (error) {
        console.error('Experiences section not seeded!')
        throw error;
    }
}

async function seedSocials(db)
{
    try {
        await db.social.deleteMany();
        await db.social.createMany({ data: socials });
        console.log('Socials section seeded');
    } catch (error) {
        console.error('Socials section not seeded!')
        throw error;
    }
}

async function seedHobbies(db)
{
    try {
        await db.hobby.deleteMany();
        await db.hobby.createMany({ data: hobbies });
        console.log('Hobbies section seeded');
    } catch (error) {
        console.error('Hobbies section not seeded!')
        throw error;
    }
}

async function seedProjects(db)
{
    try {
        await db.project.deleteMany();
        await db.project.createMany({ data: projects });
        console.log('Projects section seeded');
    } catch (error) {
        console.error('Projects section not seeded!')
        throw error;
    }
}

async function main() {
    try {
        const db = new PrismaClient();
		await db.$connect();
        if(!db)
            throw new Error("Prisma not initialized");
            
        await seedAbout(db);
        await seedSkills(db);
        await seedExperiences(db);
        await seedSocials(db);
        await seedHobbies(db);
        await seedProjects(db);
		await db.$disconnect()
    } catch (error) {
        console.error(error);
    } 
    
}

main();