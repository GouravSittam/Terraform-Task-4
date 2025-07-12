"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Component() {
  const handleEnterTask = () => {
    // Add your navigation logic here
    console.log("Entering Terraform Task-4");
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <Card className="relative z-10 w-full max-w-md shadow-2xl backdrop-blur-sm bg-white/90 border-white/20">
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-2xl font-bold text-slate-800 drop-shadow-sm">
            Terraform Task-4
          </CardTitle>
          <div className="space-y-2 text-slate-700">
            <p className="text-lg">
              <span className="font-semibold">Name:</span> Gourav
            </p>
            <p className="text-lg">
              <span className="font-semibold">Reg No.:</span> 12203224
            </p>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <Button
            onClick={handleEnterTask}
            className="w-full py-3 text-lg font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            size="lg"
          >
            Click here to Enter the Terraform Task-4
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
