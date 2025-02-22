"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // For eye icon
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingBtn from "@/components/LoadingBtn";

export function AuthCompoSec() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  // Handle input reset when switching tabs
  const handleTabChange = (value: string) => {
    if (value !== "login") {
      setUsername("");
    }
    setEmail("");
    setPassword("");
    setError("");
    setShowPassword(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill the form correctly and try again.");
      return;
    }
    setError("");
    startTransition(async () => {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.ok) {
        console.log("logged in successfully.");
        router.push("/dashboard?success=true");
      }

      if (res?.error) {
        setError(res.error);
      } else {
        // Redirect to dashboard on successful login
        window.location.href = "/dashboard?success=true";
      }
    });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !username) {
      setError("Please fill the form correctly and try again.");
      return;
    }
    setError("");
    const payload = {
      username,
      email,
      password,
    };

    startTransition(async () => {
      try {
        const response = await axios.post("/api/auth/register", payload);
        if (response.data) {
          console.log("logged in successfully.", response.data);
          setEmail("");
          setPassword("");
          setError("");
          setShowPassword(false);
          toast.success("User registered successfully", {
            position: "top-center",
          });
          setTimeout(() => {
            window.location.href = "/dashboard?success=true";
          }, 2000);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        const err = error.response.data.error;
        setError(err);
      }
    });
  };

  return (
    <div className="">
      <Tabs
        defaultValue="login"
        onValueChange={handleTabChange}
        className="w-[400px]"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">LOGIN</TabsTrigger>
          <TabsTrigger value="register">REGISTER</TabsTrigger>
        </TabsList>

        {/* Login Tab */}
        <TabsContent value="login">
          <Card className="py-5">
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    disabled={isPending}
                    id="email"
                    placeholder="johndoe@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus={true}
                  />
                </div>
                <div className="space-y-1 relative">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    disabled={isPending}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="false"
                    placeholder="johndoe@123_"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2"
                    onClick={() => setShowPassword(!showPassword)} // Toggle visibility
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </CardContent>
              <CardFooter>
                <LoadingBtn
                  loading={isPending}
                  type="submit"
                  className="w-full"
                >
                  Login
                </LoadingBtn>
              </CardFooter>
            </form>
            {error && (
              <div className="text-red-500 text-xs text-center tracking-widest">
                {error}
              </div>
            )}
            {/* Or link */}
            <div className="flex gap-2 items-center">
              <div className="w-1/2 border-2"></div>
              <span className="px-2">Or</span>
              <div className="w-1/2 border-2"></div>
            </div>
            {/* Google and GitHub Login Buttons */}
            <div className="space-y-2 mt-4">
              <Button
                className="w-full tracking-wider border-x-0"
                variant="outline"
                onClick={() =>
                  signIn("google", {
                    redirect: true,
                    callbackUrl: "/dashboard?success=true",
                  })
                }
              >
                Login with Google <FcGoogle />
              </Button>
              <Button
                className="w-full tracking-wider border-x-0"
                variant="outline"
                onClick={() =>
                  signIn("github", {
                    redirect: true,
                    callbackUrl: "/dashboard?success=true",
                  })
                }
              >
                Login with GitHub <FaGithub />
              </Button>
            </div>
          </Card>
        </TabsContent>

        {/* Register Tab */}
        <TabsContent value="register">
          <Card className="py-5">
            <form onSubmit={handleSignup}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    disabled={isPending}
                    id="username"
                    placeholder="John Doe"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    disabled={isPending}
                    id="email"
                    placeholder="johndoe@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-1 relative">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    disabled={isPending}
                    autoComplete="false"
                    id="password"
                    type={showPassword ? "text" : "password"} // Toggle password visibility
                    placeholder="johndoe@123_"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2"
                    onClick={() => setShowPassword(!showPassword)} // Toggle visibility
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </CardContent>
              <CardFooter>
                <LoadingBtn
                  loading={isPending}
                  type="submit"
                  className="w-full"
                >
                  Signup
                </LoadingBtn>
              </CardFooter>
            </form>
            {error && (
              <div className="text-red-500 text-xs text-center tracking-widest">
                {error}
              </div>
            )}
            {/* Or link */}
            <div className="flex gap-2 items-center">
              <div className="w-1/2 border-2"></div>
              <span className="px-2">Or</span>
              <div className="w-1/2 border-2"></div>
            </div>
            {/* Google and GitHub Login Buttons */}
            <div className="space-y-2 mt-4">
              <Button
                className="w-full tracking-wider border-x-0"
                variant="outline"
                onClick={() =>
                  signIn("google", {
                    redirect: true,
                    callbackUrl: "/dashboard?success=true",
                  })
                }
              >
                Continue with Google <FcGoogle />
              </Button>
              <Button
                className="w-full tracking-wider border-x-0"
                variant="outline"
                onClick={() =>
                  signIn("github", {
                    redirect: true,
                    callbackUrl: "/dashboard?success=true",
                  })
                }
              >
                Continue with GitHub <FaGithub />
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
