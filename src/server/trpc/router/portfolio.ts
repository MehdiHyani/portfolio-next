import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { TRPCError } from "@trpc/server";
import { prisma } from "../../db/client";
import { procedure, router } from "../trpc";

export default router({
    getPortfolio: procedure
        .query(async () => {
            if(!prisma)
                throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Prisma not initialized' })
            
            try {
                const [about, experiences, projects, skillCategories, socials, hobbies] = await prisma.$transaction([
                    prisma.about.findFirstOrThrow(),
                    prisma.experience.findMany(),
                    prisma.project.findMany(),
                    prisma.skillCategory.findMany({ include: { skills: true }, orderBy: { name: 'desc' } }),
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
                    if(error.code === 'P2021')
                        throw new TRPCError({ code: 'NOT_FOUND', message: 'Portfolio Not Found' })
                }
                throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Oops! Something went wrong...' })
            }
        })
})