import { Facebook, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="relative bottom-6 md:bottom-0 bg-transparent pt-2 md:pt-16 pb-10 border-t border-gray-400">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 text-sm text-gray-600">
          {/* About */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">About</h4>
            <ul className="space-y-2">
              <li className="hover:text-blue-600 cursor-pointer">Company</li>
              <li className="hover:text-blue-600 cursor-pointer">Blog</li>
              <li className="hover:text-blue-600 cursor-pointer">Careers</li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Resources</h4>
            <ul className="space-y-2">
              <li className="hover:text-blue-600 cursor-pointer">Documentation</li>
              <li className="hover:text-blue-600 cursor-pointer">Tutorials</li>
              <li className="hover:text-blue-600 cursor-pointer">API Reference</li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Support</h4>
            <ul className="space-y-2">
              <li className="hover:text-blue-600 cursor-pointer">Help Center</li>
              <li className="hover:text-blue-600 cursor-pointer">FAQ</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
            </ul>
          </div>
          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Follow Us</h4>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-blue-600" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-blue-600" />
              <Linkedin className="h-5 w-5 cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-6 text-xs text-gray-500">
          <p>© 2024 SaaSApp. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-blue-600">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-blue-600">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer