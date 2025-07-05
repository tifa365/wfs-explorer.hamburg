"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type TranslationKey, enTranslations, deTranslations } from "@/lib/translations"

type Language = "en" | "de"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("de") // Always start with German for Hamburg
  const [mounted, setMounted] = useState(false)
  const [isChanging, setIsChanging] = useState(false)

  // Detect browser language only after hydration
  useEffect(() => {
    setMounted(true)
    // Only change language if browser is NOT German
    if (typeof window !== "undefined") {
      const browserLang = navigator.language.toLowerCase()
      if (!browserLang.startsWith("de")) {
        setLanguage("en")
      }
    }
  }, [])

  const handleLanguageChange = (newLanguage: Language) => {
    if (newLanguage === language) return
    setLanguage(newLanguage)
  }

  const t = (key: TranslationKey): string => {
    const translations = language === "en" ? enTranslations : deTranslations
    return translations[key] || key // Fallback to key if translation is missing
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
