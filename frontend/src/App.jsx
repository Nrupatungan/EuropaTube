/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { OptionFloater } from "./components/OptionFloater"
import { ThemeProvider } from "./components/theme-provider"
import { Sidebar } from "./components/Sidebar"
import { Toaster } from "./components/ui/toaster"


function App() {

  return (
    <ThemeProvider>
      <div
      className='h-screen bg-background flex flex-col relative'
      >
        <Header></Header>
        <div className="flex h-screen flex-grow-1 overflow-hidden">
        <Sidebar />
        <div className="overflow-scroll px-4 pb-4 pt-4 flex-1">
            <Outlet />
        </div>
        </div>
      </div>
      <OptionFloater/>
      <Toaster />
    </ThemeProvider>
  )
}

export default App
