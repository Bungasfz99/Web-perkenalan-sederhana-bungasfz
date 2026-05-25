import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // LOGIN DUMMY: Ganti dengan logika database asli kamu nanti
    if (email === "cs@gmail.com" && password === "abc123") {
      return NextResponse.json({
        message: "Login sukses!",
        token: "ini-token-rahasia-bunga", // Token dummy
      });
    }

    // Jika salah email/password
    return NextResponse.json(
      { message: "Email atau password salah!" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Terjadi kesalahan pada server backend." },
      { status: 500 }
    );
  }
}