import Image from "next/image"

const people = [
    {
      name: 'Mohanad Al Hilfi',
      role: 'Co-Founder / CEO',
      imageUrl:""
        // 'https://images.unsplash.com/photo-1586374579358-9d19d632b6df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGljb258ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'Ali Al J',
      role: 'Co-Founder / CEO',
      imageUrl:""
        // 'https://images.unsplash.com/photo-1586374579358-9d19d632b6df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGljb258ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'Mohanad Al Hilfi',
      role: 'Co-Founder / CEO',
      imageUrl:""
        // 'https://images.unsplash.com/photo-1586374579358-9d19d632b6df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGljb258ZW58MHx8MHx8fDA%3D',
    },
    // More people...
  ]
  
  export default function Team() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the visionary leaders at 74 Degree, who combine extensive experience with a commitment to innovation in engineering. Their expertise drives our firm forward, ensuring excellence and reliability in every project we undertake
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  