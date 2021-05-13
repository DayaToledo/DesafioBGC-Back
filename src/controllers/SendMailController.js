import nodemailer from 'nodemailer';
import handler from "../libs/handler-lib";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export const main = handler( async (event, context) => {
    const { name, email, text } = JSON.parse(event.body);

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Mensagem do Cupido Online pra você!",
        html: `
            <h2>Olá, ${name}!</h2></br></br>
            <h3>Você acaba de receber uma mensagem anônima do Cupido Online!</h3></br></br>
            <h4>Seu admirador secreto diz:</h4></br>
            <p>${text}</p>
        `
    });

    return { status: true };
});