
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import nodemailer from 'nodemailer';
import { prisma } from "../../db/client";
import { procedure, router } from "../trpc";
import { env } from "../../../../env/server.mjs";

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

            const transporter = nodemailer.createTransport({
                host: env.SMTP_HOST,
                port: parseInt(env.SMTP_PORT),
                auth: {
                    user: env.SMTP_USERNAME,
                    pass: env.SMTP_PASSWORD,
                }
            });

            const {rejected, accepted, pending, response} = await transporter.sendMail({
                text: message,
                from: email,
                subject: `${subject} - from: ${email}`,
                to: recipientEmail
            });

            console.log(accepted);
            console.log(pending);
            console.log(response);

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
            console.log(error)
            throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Message not sent' });
            
        }
    })
})