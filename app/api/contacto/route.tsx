import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const { nombre, email, asunto, mensaje } = await req.json();

  try {
    await resend.emails.send({
      from: process.env.SENDER_EMAIL!, // ej. "contacto@feriasdelcentrosrl.com"
      to: process.env.EMAIL_RECEIVER!, // ej. "info@feriasdelcentrosrl.com"
      replyTo: email,
      subject: asunto,
      html: `
        <h3>Mensaje de ${nombre}</h3>
        <p><strong>Email cliente:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong><br/>${mensaje}</p>
      `,
    });

    return NextResponse.json(
      { message: "Correo enviado correctamente" },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Error enviando con Resend:", err);
    return NextResponse.json(
      { message: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
