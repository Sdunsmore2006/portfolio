import { ArrowDownIcon } from '@heroicons/react/24/outline'

export default function IntroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600 text-white">
      <div className="text-center animate-fadeInUp w-1/2">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">My name is Shawn Michael Dunsmore Jr., a developer with over four years of experience and expertise in multiple programming languages. I am dedicated to continuous learning and discovering what makes me excel in the dynamic tech world.
</p>
        <a 
          href="#contact" 
          className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-100 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDownIcon className="h-8 w-8" />
      </div>
    </section>
  )
}

