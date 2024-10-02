import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Github, Linkedin, Instagram, Menu } from 'lucide-react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-xl font-bold">YourCompany</a>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#features" className="hover:text-gray-300">Features</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
          <div className="hidden md:flex space-x-2">
            <LoginModal />
            <RegisterModal />
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <Menu />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <a href="#home" className="block hover:text-gray-300">Home</a>
            <a href="#features" className="block hover:text-gray-300">Features</a>
            <a href="#about" className="block hover:text-gray-300">About</a>
            <a href="#contact" className="block hover:text-gray-300">Contact</a>
            <LoginModal />
            <RegisterModal />
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to YourCompany</h1>
          <p className="text-xl mb-8">We provide innovative solutions for your business needs</p>
          <Button size="lg">Get Started</Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard title="Feature 1" description="Description of feature 1" />
            <FeatureCard title="Feature 2" description="Description of feature 2" />
            <FeatureCard title="Feature 3" description="Description of feature 3" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-center max-w-2xl mx-auto">
            YourCompany is a leading provider of innovative solutions. We are dedicated to helping businesses grow and succeed through our cutting-edge technology and expert services.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
            <div className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message" />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 YourCompany. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/yourcompany" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>Enter your credentials to login.</DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          <div>
            <Label htmlFor="login-email">Email</Label>
            <Input id="login-email" type="email" placeholder="your@email.com" />
          </div>
          <div>
            <Label htmlFor="login-password">Password</Label>
            <Input id="login-password" type="password" />
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function RegisterModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Register</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
          <DialogDescription>Create a new account.</DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          <div>
            <Label htmlFor="register-name">Name</Label>
            <Input id="register-name" placeholder="Your name" />
          </div>
          <div>
            <Label htmlFor="register-email">Email</Label>
            <Input id="register-email" type="email" placeholder="your@email.com" />
          </div>
          <div>
            <Label htmlFor="register-password">Password</Label>
            <Input id="register-password" type="password" />
          </div>
          <div>
            <Label htmlFor="register-confirm-password">Confirm Password</Label>
            <Input id="register-confirm-password" type="password" />
          </div>
          <Button type="submit" className="w-full">Register</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}