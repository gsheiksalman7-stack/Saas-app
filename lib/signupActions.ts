'use server'
import { connectDB } from "@/lib/db"
import { User } from "@/models/User"
import bcrypt from "bcryptjs"
import { signupSchema } from "@/lib/validations/auth"

type FieldErrors = {
  name?: string
  email?: string
  password?: string
}

type SignupResult =
  | { ok: true }
  | { ok: false; errors: FieldErrors }

export async function signupUser(data: {
  name: string
  email: string
  password: string
  image?: string
}): Promise<SignupResult> {
  try {
    const parsed = signupSchema.safeParse(data)

    // 🔴 Zod field errors
    if (!parsed.success) {
      const errors: FieldErrors = {}

      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FieldErrors
        if (!errors[field]) {
          errors[field] = issue.message
        }
      })

      return { ok: false, errors }
    }

    const { name, email, password, image } = parsed.data

    await connectDB()

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return {
        ok: false,
        errors: { email: "Email already exists" },
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await User.create({
      name,
      email,
      password: hashedPassword,
      image: image || "",
      provider: "credentials",
      role: "user",
    })

    return { ok: true }

  } catch (err) {
    return {
      ok: false,
      errors: { email: "Something went wrong" },
    }
  }
}