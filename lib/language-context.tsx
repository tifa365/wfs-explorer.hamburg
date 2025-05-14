"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { type TranslationKey, enTranslations, deTranslations } from "@/lib/translations"

type Language = "en" | "de"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      // Get browser language (e.g., 'en-US', 'de-DE', etc.)
      const browserLang = navigator.language.toLowerCase()

      // Check if the browser language starts with 'de' for German
      if (browserLang.startsWith("de")) {
        return "de"
      }
    }

    // Default to English
    return "en"
  })

  const t = (key: TranslationKey): string => {
    const translations = language === "en" ? enTranslations : deTranslations
    return translations[key] || key // Fallback to key if translation is missing
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
