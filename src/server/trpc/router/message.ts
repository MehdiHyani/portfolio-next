
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma } from "../../db/client";
import { procedure, router } from "../trpc";
import { transporter } from "../../../utils/mailer";

export default router({
    sendMessage: procedure
    .input(
        z.object({
            email: z.string().email(),
            subject: z.string(),
            message: z.string(),

        })
    )
    .mutation(async ({ input: { email, message, subject } }) => {
        try {
            const { email: recipientEmail } = await prisma.about.findFirstOrThrow();

            const { rejected } = await transporter.sendMail({
                text: message,
                from: email,
                subject: `${subject} - from: ${email}`,
                to: recipientEmail
            });

            if(rejected.length)
                throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Email not sent' })


            await prisma.message.create({
                data: {
                    email,
                    subject,
                    content: message 
                }
            })

            return {
                success: true
            }
        } catch (error) {
            throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Message not sent' });
            
        }
    })
})