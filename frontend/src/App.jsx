import { Outlet } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { OptionFloater } from "./components/OptionFloater"
import { ThemeProvider } from "./components/theme-provider"

function App() {

  return (
    <>
    <ThemeProvider>
      <div
      className='h-screen bg-background flex flex-col relative'
      >
        <Header></Header>
        <div className="flex h-screen flex-grow-1 overflow-hidden">
          <aside className="sticky top-0 w-[96px] bg-slate-500 flex flex-col max-lg:hidden">
            <h1 className="">Halla bulla</h1>
          </aside>
        <div className="overflow-scroll px-4 pb-4 pt-4 flex-1">
            <Outlet />
        </div>
        </div>
      </div>
      <OptionFloater/>
    </ThemeProvider>
    </>
  )
}

export default App
