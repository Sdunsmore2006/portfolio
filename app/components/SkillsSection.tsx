const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Next.js", level: 70 },
  { name: "TypeScript", level: 65 },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Skills</h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-base font-semibold text-green-800">{skill.name}</span>
                <span className="text-sm font-medium text-green-800">{skill.level}%</span>
              </div>
              <div className="w-full bg-green-200 rounded-full h-2.5">
                <div 
                  className="bg-green-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

