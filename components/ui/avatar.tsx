"use client"
import Image from "next/image"

type AvatarProps = { name?: string | null, email?: string | null, image?: string | null, size?: number }

export default function Avatar({ name, email, image, size = 40, }: AvatarProps) {
    const getInitials = () => {
        if (name && name.trim()) {
            return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()
        }

        if (email) {
            return email[0].toUpperCase()
        }

        return "U"
    }

    // ✅ Image exists → show image
    if (image && image.trim() !== "") {
        return (
            <Image src={image} alt="User avatar" width={size} height={size} className="rounded-full object-cover" />
        )
    }

    // ✅ Initials fallback
    return (
        <div className="flex items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-purple-600 text-white font-semibold" style={{ width: size, height: size }}>
            {getInitials()}
        </div>
    )
}
