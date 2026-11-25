
import { NextResponse } from "next/server";

type ContactBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    const data: unknown = await request.json();

    if (typeof data !== "object" || data === null || Array.isArray(data)) {
      return NextResponse.json(
        { error: "Los datos enviados no son válidos." },
        { status: 400 }
      );
    }

    body = data as ContactBody;
  } catch {
    return NextResponse.json(
      { error: "El cuerpo de la solicitud no es válido." },
      { status: 400 }
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json(
      { error: "Escribe un nombre de entre 2 y 80 caracteres." },
      { status: 400 }
    );
  }

  if (email.length > 254 || !emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Escribe un correo electrónico válido." },
      { status: 400 }
    );
  }

  if (message.length < 10 || message.length > 2000) {
    return NextResponse.json(
      { error: "El mensaje debe tener entre 10 y 2000 caracteres." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Mensaje validado correctamente."
  });
}
