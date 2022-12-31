import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { TRPCError } from "@trpc/server";
import { procedure, router } from "../trpc";

export default router({
    getPortfolio: procedure
        .query(async ({ ctx: { prisma } }) => {
            if(!prisma)
                throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Prisma not initialized' })
            
            try {
                const [about, experiences, projects, skillCategories, socials, hobbies] = await prisma.$transaction([
                    prisma.about.findFirstOrThrow(),
                    prisma.experience.findMany(),
                    prisma.project.findMany(),
                    prisma.skillCategory.findMany({ include: { skills: true } }),
                    prisma.social.findMany(),
                    prisma.hobby.findMany(),
                    prisma.about.updateMany({
                        data: {
                            numberOfViews: {
                                increment: 1
                            }
                        }
                    })
                ]);
                return {
                    about,
                    experiences,
                    skillCategories,
                    socials,
                    hobbies,
                    projects,
                };
            } catch (error) {
                if (error instanceof PrismaClientKnownRequestError) {
                    console.log(JSON.stringify(error));
                }
            }
        })
})