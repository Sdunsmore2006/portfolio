import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get in Touch</h2>
        <div className="max-w-4xl mx-auto flex flex-wrap">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent" required></textarea>
              </div>
              <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">Send Message</button>
            </form>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-green-600 mr-2" />
                <span>sdunsmore244@gmail.com</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-green-600 mr-2" />
                <span>+1 (302) 602-9060</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-green-600 mr-2" />
                <span>Delaware, New Castle, 19720</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

