import { render, screen } from "@testing-library/react"
import WfsAnalyzer from "@/components/wfs-analyzer"
import { LanguageProvider } from "@/lib/language-context"

describe("WfsAnalyzer", () => {
  it("renders the input field and submit button", () => {
    render(
      <LanguageProvider>
        <WfsAnalyzer />
      </LanguageProvider>,
    )

    const inputElement = screen.getByPlaceholderText(/Enter WFS URL/i)
    expect(inputElement).toBeInTheDocument()

    const buttonElement = screen.getByRole("button", { name: /Analyze/i })
    expect(buttonElement).toBeInTheDocument()
  })

  it("displays example datasets", () => {
    render(
      <LanguageProvider>
        <WfsAnalyzer />
      </LanguageProvider>,
    )

    const exampleSection = screen.getByText(/Example Datasets/i)
    expect(exampleSection).toBeInTheDocument()
  })
})
