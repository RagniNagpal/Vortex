import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import Victory from "@/assets/victory.svg";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Background from "@/assets/login2.png";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async () => {
    console.log("Login with:", { email, password });
  };

  const handleSignup = async () => {
    console.log("Signup with:", { email, password, confirmPassword });
  };

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
        
        {/* Left section */}
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
            <img src={Victory} alt="Victory Emoji" className="h-[100px]" />
          </div>
          <p className="font-medium text-center">
            Fill in the details to get started with the best chat app!
          </p>
        </div>

        {/* Right section */}
        <div className="flex items-center justify-center w-full">
          <Tabs defaultValue="login" className="w-3/4">
            <TabsList className="bg-transparent rounded-none w-full">
              <TabsTrigger
                value="login"
                className="data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 border-b-2 rounded-none w-full p-3 transition-all duration-300"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 border-b-2 rounded-none w-full p-3 transition-all duration-300"
              >
                Signup
              </TabsTrigger>
            </TabsList>

            {/* Login */}
            <TabsContent value="login">
              <div className="flex flex-col gap-5 mt-10">
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  className="rounded-full p-6 bg-purple-500 text-white"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </div>
            </TabsContent>

            {/* Signup */}
            <TabsContent value="signup">
              <div className="flex flex-col gap-5 mt-10">
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  className="rounded-full p-6"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                  className="rounded-full p-6 bg-purple-500 text-white"
                  onClick={handleSignup}
                >
                  Signup
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div classname="flex justify-center items-center">
        <img src={Background}
         alt="background login" className="h-[700px]" / >
      </div>
    </div>
  );
};

export default Auth;
