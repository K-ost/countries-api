import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import DetailPage from "./pages/DetailPage"
import Header from "./components/Header"
import { createContext, useState } from "react"
import { ContextType, ThemeType } from "./types"

export const ThemeContext = createContext<ContextType | null>(null)

function App() {
  const [theme, setTheme] = useState<ThemeType>('dark')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <>
        <Header />
        <div className="container">
          <Routes>
            <Route index path="/" element={<MainPage />} />
            <Route path="/:slug" element={<DetailPage />} />
          </Routes>
        </div>
      </>
    </ThemeContext.Provider>
  )
}

export default App
