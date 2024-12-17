export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/shawn-dunsmore-jr-806580330/" className="hover:text-green-300 transition-colors">LinkedIn</a>
          <a href="https://github.com/Sdunsmore2006" className="hover:text-green-300 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

