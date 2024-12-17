import Image from 'next/image'

const projects = [
  { 
    id: 1, 
    title: "Trello App", 
    description: "An intuitive tool to organize your tasks efficiently.",
    image: "https://placehold.co/600x400/10B981/FFFFFF/png?text=Trello+App&font=Roboto" // Image inside public folder
  },
  { 
    id: 2, 
    title: "Solar System Watcher", 
    description: "A platform to observe and explore the galaxy.",
    image: "https://placehold.co/600x400/10d981/FFFFFF/png?text=Solar+System+App&font=Roboto" // Image inside public folder
  },
  { 
    id: 3, 
    title: "Weather App", 
    description: "A reliable app for real-time weather updates.",
    image: "https://placehold.co/600x400/10B981/FFFFFF/png?text=Weather+App&font=Roboto" // Correct path to image in public folder
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <Image 
                src={project.image} 
                alt={project.title} 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-800">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}