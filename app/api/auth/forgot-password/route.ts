import { NextResponse } from "next/server"
import crypto from "crypto"
import bcrypt from "bcryptjs"
import { connectDB } from "@/lib/db"
import { User } from "@/models/User"
import { transporter } from "@/lib/mail"

export const runtime = "nodejs"

export async function POST(req: Request) {
    await connectDB()
    const { email } = await req.json()

    const user = await User.findOne({ email })
    if (!user) {
        return NextResponse.json({
            message: "If an account exists, a reset link has been sent.",
        })
    }

    const token = crypto.randomBytes(32).toString("hex")
    const hashedToken = await bcrypt.hash(token, 10)

    user.resetPasswordToken = hashedToken
    user.resetPasswordExpiry = Date.now() + 1000 * 60 * 15 // 15 mins
    await user.save()

    const resetLink = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}&email=${email}`

    // TODO: send email (see step 3)
    console.log("RESET LINK:", resetLink)

    await transporter.sendMail({
        to: email,
        subject: "Reset your password",
        html: `
      <p>You requested a password reset.</p>
      <p>
        <a href="${resetLink}">
          Click here to reset your password
        </a>
      </p>
      <p>This link expires in 15 minutes.</p>
    `,
    })

    await transporter.verify()
    console.log("EMAIL SERVER READY")


    return NextResponse.json({
        message: "If an account exists, a reset link has been sent.",
    })
}
