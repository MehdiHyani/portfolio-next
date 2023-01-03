import nodemailer from 'nodemailer';
import { env } from '../../env/server.mjs';

export const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: parseInt(env.SMTP_PORT),
    auth: {
        user: env.SMTP_USERNAME,
        pass: env.SMTP_PASSWORD,
    }
});