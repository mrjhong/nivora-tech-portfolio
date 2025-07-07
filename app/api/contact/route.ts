// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son requeridos' },
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Enviar email con Resend
    const { data, error } = await resend.emails.send({
      from: 'Nivora Tech <nivoratech@resend.dev>', // Cambia por tu dominio verificado
      to: ['jfdg206@gmail.com'], // Tu email
      replyTo: email, // El email del usuario para que puedas responder
      subject: `Nuevo contacto de ${name} - Nivora Tech`,
      react: ContactEmailTemplate({ 
        name, 
        email, 
        company: company || 'No especificada', 
        message 
      }),
    });

    if (error) {
      console.error('Error enviando email:', error);
      return NextResponse.json(
        { error: 'Error al enviar el mensaje. Inténtalo más tarde.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Mensaje enviado exitosamente',
      id: data?.id,
    });

  } catch (error) {
    console.error('Error en API de contacto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}