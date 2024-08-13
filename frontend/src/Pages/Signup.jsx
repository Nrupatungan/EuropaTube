import { ModeToggle } from "@/components/mode-toggle"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useSelector, useDispatch } from "react-redux"
import { AlertComp } from "@/components/AlertComp"
import { ColorRing } from "react-loader-spinner"
import { register as Register } from "@/store/actions/authAction"
import { useEffect } from "react"
import { NullifyError, FalsifySuccess } from "@/store/slices/authSlice"
import { EuropaTubeLogo } from "@/components/EuropaTubeLogo"
import { ThemeProvider } from "@/components/theme-provider"


export const Signup = () => {
  const {loading, error, success} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }, reset} = useForm()

  useEffect(() => {
    if(success){
      dispatch(FalsifySuccess())
      navigate("/login")
    }
  })

  const onSumbit = (data) => {

    const formData = new FormData();
    formData.set("fullName", data.fullName);
    formData.set("username", data.username);
    formData.set("password", data.password);
    formData.set("email", data.email);

    if(data.avatar){
      formData.set("avatar", data.avatar.item(0));
    }
    if(data.coverImage){
      formData.set("coverImage", data.coverImage.item(0));
    }
    dispatch(Register(formData))

  }

  const handleFocus = () => {
    dispatch(NullifyError())
  }

  const handleReset = () => {
    dispatch(NullifyError())
    reset()
  }

  return (
    <ThemeProvider>
    <div className='bg-background min-h-[100svh] grid place-items-center'>
      <Card className="w-[350px] md:w-[400px]">
        <CardHeader >
            <CardTitle className="flex justify-between items-center">Signup<ModeToggle/></CardTitle>
            <CardDescription className='flex items-center gap-1'>Get Logged into <Link to={'/'}>
                <EuropaTubeLogo fontSize="text-xs" fontColor="text-purple-600 dark:text-teal-300" className="font-semibold antialiased" /></Link>
            </CardDescription>
        </CardHeader>
          <form onSubmit={handleSubmit(onSumbit)}>
            <div className="grid w-full items-center gap-4">
              <CardContent>
              {error && 
                  <AlertComp
                   className="mb-5"
                   title="Error" 
                   description={error} 
                   icon="destructive" 
                   alertVariant="destructive"/>
                }
                {success && 
                  <AlertComp 
                  className="mb-5"
                  title="Logged In" 
                  description="Logged In successfully" 
                  icon="success" 
                  alertVariant="success" />
                }
                <div className="flex flex-col space-y-2 mb-5">
                  <Label htmlFor="fullName">{errors.fullName ? (<span className="text-red-500">{errors.fullName.message}</span>) : "Full Name"}</Label>
                  <Input className="ring-offset-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0" 
                  type="text" 
                  id="fullName"
                  placeholder="Enter your full name"
                  {...register("fullName", {
                    required: {value: true, message: "Pleaser enter your full name"}
                  })}
                  onFocus={handleFocus}
                  />
                </div>
                <div className="flex flex-col space-y-2 mb-5">
                  <Label htmlFor="username">{errors.username ? (<span className="text-red-500">{errors.username.message}</span>) : "Username"}</Label>
                  <Input className="ring-offset-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0" 
                  type="text" 
                  id="username" 
                  placeholder="Enter your username"
                  {...register("username", {
                    required: {value: true, message: "Pleaser enter your username"}
                  })}
                  onFocus={handleFocus}
                  />
                </div>
                <div className="flex flex-col space-y-2 mb-4">
                  <Label htmlFor="email">{errors.email ? (<span className="text-red-500">{errors.email.message}</span>) : "Email"}</Label>
                  <Input className="ring-offset-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0" 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Please enter a valid email",
                    pattern: {value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, message: "Please enter a valid email"}
                  })}
                  onFocus={handleFocus}
                  />
                </div>
                <div className="flex flex-col space-y-2 mb-4">
                  <Label htmlFor="password">{errors.password ? (<span className="text-red-500">{errors.password.message}</span>) : "Password"}</Label>
                  <Input className="ring-offset-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0" 
                  type="password" 
                  id="password" 
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Please enter your password",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/,
                      message: "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
                    }
                  })}
                  onFocus={handleFocus}
                  />
                </div>
                <div className="flex flex-col space-y-2 mb-5">
                  <Label htmlFor="avatar">{errors.avatar ? (<span className="text-red-500">{errors.avatar.message}</span>) : "Avatar"}</Label>
                  <Input className="ring-offset-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 dark:text-yellow-300" 
                  type="file"
                  id="avatar" 
                  {...register("avatar", {
                    required: {value: true, message: "Please upload a profile picture"}
                  })}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="coverImage">{errors.coverImage ? (<span className="text-red-500">{errors.coverImage.message}</span>) : "Cover Image"}</Label>
                  <Input className="ring-offset-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 dark:text-emerald-300" 
                  type="file"
                  id="coverImage" 
                  {...register("coverImage")}
                  />
                </div>
              </CardContent>  
            </div>
            <CardFooter className="flex justify-between">
              <Button variant={'default'} type="submit">
              {loading 
                  ? (
                      <>
                        <ColorRing height="22" width="22" />
                        <span className="ml-2">Signup</span>
                      </>
                    ) 
                  : "Signup"
                }
              </Button>
              <Button variant={'outline'} type="reset" onClick={handleReset}>Reset</Button>
            </CardFooter>
          </form>
      </Card>
    </div>
    </ThemeProvider>
  )
}