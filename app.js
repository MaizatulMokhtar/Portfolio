import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm [Your Name] 👋</h1>
        <p className="text-lg text-gray-300">
          A passionate software engineer skilled in React.js, PHP, JavaScript, SQL, and more. I love building web applications and exploring software quality.
        </p>
        
        <div className="flex gap-4 mt-6 justify-center">
          <Button asChild>
            <a href="https://github.com/yourgithub" target="_blank" className="flex items-center gap-2">
              <FaGithub /> GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="flex items-center gap-2">
              <FaLinkedin /> LinkedIn
            </a>
          </Button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="bg-gray-800">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Project 1</h2>
            <p className="text-gray-400">A brief description of the project.</p>
            <Button asChild className="mt-2">
              <a href="https://yourprojectlink.com" target="_blank">View Project</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-800">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Project 2</h2>
            <p className="text-gray-400">Another project showcase.</p>
            <Button asChild className="mt-2">
              <a href="https://yourprojectlink.com" target="_blank">View Project</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
