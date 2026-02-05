export type PasswordStrength = {
    score: number
    label: "Weak" | "Medium" | "Strong"
}

export function getPasswordStrength(password: string): PasswordStrength {
    let score = 0

    if (password.length >= 8) score++

    // uppercase
    if (/[A-Z]/.test(password)) score++

    // number
    if (/[0-9]/.test(password)) score++

    // special character
    if (/[^A-Za-z0-9]/.test(password)) score++

    if (score <= 1) {
        return { score, label: "Weak" as const }
    }

    if (score <= 3) {
        return { score, label: "Medium" as const }
    }

    return { score, label: "Strong" as const }
}
