import { Header } from "./components/Header/Header"
import { ThemeProvider } from "./components/theme-provider"

function App() {

  return (
    <>
    <ThemeProvider>
      <div
      className='min-h-screen bg-background flex flex-col'
      >
        <Header></Header>
        <div className="grid grid-cols-1 lg:grid-cols-[auto,_1fr] flex-grow-1 overflow-auto">
          <aside className="sticky h-[50rem] top-0 bg-slate-500 flex flex-col max-lg:hidden">
              <div className="w-[15rem] bg-yellow-200"></div>
              <div className="w-[15rem] bg-yellow-200"></div>
              <div className="w-[15rem] bg-yellow-200"></div>
          </aside>
        <div className="overflow-x-hidden px-8 pb-4 pt-2">
          {/* <div className="container h-[90svh] px-1 md:px-4 items-start grid place-items-center sm:grid-cols-2 gap-2 md:grid-cols-[repeat(2,_minmax(367px,_1fr))] md:gap-4 lg:grid-cols-[repeat(3,_minmax(317px,_1fr))] lg:gap-4 min-[1375px]:grid-cols-[repeat(4,_minmax(317px,_1fr))] min-[1375px]:gap-8 relative"> */}
            <div className="container min-h-screen px-1 md:px-4 grid gap-4 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] min-[688px]:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] relative">
              <div className="flex flex-col gap-2 h-[10rem] bg-yellow-200"></div>
              <div className="flex flex-col gap-2 h-[10rem] bg-yellow-200"></div>
              <div className="flex flex-col gap-2 h-[10rem] bg-yellow-200"></div>
              <div className="flex flex-col gap-2 h-[10rem] bg-yellow-200"></div>
              <div className="flex flex-col gap-2 h-[10rem] bg-yellow-200"></div>
              <div className="flex flex-col gap-2 h-[10rem] bg-yellow-200"></div>
              <div className="flex flex-col gap-2 h-[10rem] bg-yellow-200"></div>
              <div className="flex flex-col gap-2 h-[10rem] bg-yellow-200"></div>
              <div className="flex flex-col gap-2 h-[10rem] bg-yellow-200"></div>
              <div className="flex flex-col gap-2 h-[10rem] bg-yellow-200"></div>
              <div className="flex flex-col gap-2 h-[10rem] bg-yellow-200"></div>
              <div className="flex flex-col gap-2 h-[10rem] bg-yellow-200"></div>
              <div className="flex flex-col gap-2 h-[10rem] bg-yellow-200"></div>
              <div className="flex flex-col gap-2 h-[10rem] bg-yellow-200"></div>
              <div className="flex flex-col gap-2 h-[10rem] bg-yellow-200"></div>
              <div className="flex flex-col gap-2 h-[10rem] bg-yellow-200"></div>
              <div className="flex flex-col gap-2 h-[10rem] bg-yellow-200"></div>
              <div className="flex flex-col gap-2 bg-yellow-200"></div>
              <div className="flex flex-col gap-2 bg-yellow-200"></div>
              <div className="flex flex-col gap-2 bg-yellow-200"></div>
              <div className="flex flex-col gap-2 bg-yellow-200"></div>
              <div className="flex flex-col gap-2 bg-yellow-200"></div>
              <div className="flex flex-col gap-2 bg-yellow-200"></div>
              <div className="flex flex-col gap-2 bg-yellow-200"></div>
              <div className="flex flex-col gap-2 bg-yellow-200"></div>
              <div className="flex flex-col gap-2 bg-yellow-200"></div>
              <div className="flex flex-col gap-2 bg-yellow-200"></div>
              <div className="flex flex-col gap-2 bg-yellow-200"></div>
              <div className="flex flex-col gap-2 bg-yellow-200"></div>
              <div className="flex flex-col gap-2 bg-yellow-200"></div>
            </div>
          </div>
        </div>
          
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
