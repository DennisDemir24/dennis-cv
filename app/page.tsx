import { Mail, Github, Phone, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Dennis Demir</h1>
          <p className="mt-2 text-xl text-black">Software Developer</p>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-black mr-2" />
                <a href="tel:+46739862252" className="text-blue-600 font-bold hover:underline">+46739862252</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-900 mr-2" />
                <a href="mailto:demir.petrus@gmail.com" className="text-blue-600 hover:underline">
                  demir.petrus@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Github className="h-5 w-5 text-gray-900 mr-2" />
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/DennisDemir24" className="text-blue-600 hover:underline">
                  github.com/DennisDemir24
                </a>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-gray-900 mr-2" />
                <a target="_blank" rel="noopener noreferrer" href="https://ironflow-solutions.vercel.app/" className="text-blue-600 hover:underline">
                  Portfolio Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Work Experience */}
          <div className="lg:col-span-2">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Work Experience</h2>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-black">Software Developer - Boxflow Logistics</h3>
                  <p className="text-black">November 2024 - April 2025</p>
                  <p className="mt-2 text-black">
                    Worked as a software developer building and maintaining Boxtime, an app built to manage consultants
                    and logistics information. I worked with NextJs, React-native.
                    I also helped the company to migrate manual workflows in their warehouse to a digital solution with a dashboard to keep track of the progress in their warehouse.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-black">React-native Developer - TrustCoach</h3>
                  <p className="text-black">October 2023 - January 2024 (Contract)</p>
                  <p className="mt-2 text-black">
                    Worked as a React-native developer for a startup. Using React-native, Firebase.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-black">SysAdmin, Linux Admin - Cloudnet</h3>
                  <p className="text-black">February 2024 - Juni 2024 (Contract)</p>
                  <p className="mt-2 text-black">
                    Working as a system administrator and tech support for customers around Sweden. Helping customers
                    solve issues with their virtual environments. Using tech as Linux, Bash, Git.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-black">React Native Developer - Naudio</h3>
                  <p className="text-black">October 2022 - September 2023</p>
                  <p className="mt-2 text-black">
                    Worked as a react native developer. Developing an application for a startup that provides podcasts
                    and documentaries. Tech we used were, React native, NodeJs, ReactQuery.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-black">Software Developer - Kumapn</h3>
                  <p className="text-black">April 2022 - October 2022</p>
                  <p className="mt-2 text-black">
                    Worked as a fullstack developer (mainly frontend), working on different projects including tech like
                    React, Redux, NextJs, RemixJs and NodeJs. Using styling frameworks as tailwindcss and
                    StyledComponents.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-black">Software Developer - Sogeti</h3>
                  <p className="text-black">November 2021 - April 2022</p>
                  <p className="mt-2 text-black">
                    Worked as a fullstack developer (mainly frontend), as a consultant on a large project. Technologies
                    I used were VueJs, NodeJs, Google Cloud platform, SCSS and JavaScript.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-black">Fullstack Developer - Snajd</h3>
                  <p className="text-black">January 2021 - November 2021</p>
                  <p className="mt-2 text-black">
                    Worked as a fullstack developer with technologies like React, React-native, Redux, NodeJs and
                    Express. Even though I&apos;m a fullstack developer, I focus mainly on the frontend and UI side of
                    things.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-black">Frontend Developer - Atlas Fastighetssystem (Internship)</h3>
                  <p className="text-black">October 2020 - December 2020</p>
                  <p className="mt-2 text-black">
                    Worked as a frontend developer using React and Redux to build features for a startup and their
                    application.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-black">Frontend Developer - Webblandskapet</h3>
                  <p className="text-black">November 2019 - April 2020</p>
                  <p className="mt-2 text-black">
                    Building Wordpress sites, and e-commerce solutions. Using technologies such as, HTML, CSS, SCSS,
                    JavaScript, PHP, jQuery.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-black">Software Engineer - Briljant Ekonomisystem</h3>
                  <p className="text-black">April 2019 - November 2019</p>
                  <p className="mt-2 text-black">
                    Working as a frontend developer. Using technologies like, JavaScript, TypeScript, Angular, SCSS. I
                    was part of the team that was building the windows desktop app into an Web App, and I was also
                    responsible for the Mobile App built in Angular as an PWA (Progressive Web App).
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right column - Education and Skills */}
          <div>
            <section className="mb-10 bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
              <div>
                <h3 className="text-xl font-semibold text-black">Linnéuniversitet</h3>
                <p className="text-gray-700 text-black">
                  Bachelors Degree in Computer Science - Software Development and Operations (DevOps)
                </p>
                <p className="text-black">2019 - 2022</p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                  <li>Web Development (HTML, CSS, SCSS)</li>
                  <li>JavaScript Basics</li>
                  <li>Client Based Programming (JavaScript, OOP Js, DOM)</li>
                  <li>Java (Basic Syntax, Object Orientated Programming)</li>
                  <li>Algorithms and Data structures in Java</li>
                  <li>Software Technology (Software Engineering Processes)</li>
                  <li>
                    System Administration 1 (TCP/IP Based communication, Network Terminology, Linux/Bash Scripting)
                  </li>
                  <li>Individual Project (React-Native Project (React-Native, Firebase)</li>
                  <li>System Administration 2 (Cloud Computing, DevOps, Docker, Kubernetes)</li>
                  <li>Object Oriented Analysis and Design with UML</li>
                  <li>Software testing (Testing, TDD)</li>
                  <li>Databases (SQL, MySQL)</li>
                  <li>Server-based Web Programming (NodeJs, MongoDB, Express)</li>
                  <li>Software Engineering - Design</li>
                  <li>Configuration Management for DevOps</li>
                  <li>Interaction Design</li>
                  <li>Continuous Delivery</li>
                  <li>Agile development and engineering practices</li>
                  <li>Applied IoT</li>
                </ul>
              </div>
            </section>

            <section className="mb-10 bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 text-black">Frontend</h3>
                <p className="text-gray-700 text-black">
                  HTML5, CSS3, Sass/Scss, JavaScript, TypeScript, React, NextJs, Redux, TailwindCSS,
                  StyledComponents, React-Native
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 text-black">Backend</h3>
                <p className="text-gray-700 text-black">NodeJs, ExpressJs, GraphQL</p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 text-black">Databases</h3>
                <p className="text-gray-700 text-black">SQL/MySQL, MongoDB, PostgreSQL, MongoDB</p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 text-black">Other Skills</h3>
                <p className="text-gray-700 text-black">
                  Figma, Git, Firebase, Supabase, Docker, Kubernetes, Linux, ClerkAuth, Prisma
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 text-black">Languages</h3>
                <p className="text-gray-700 text-black">Swedish, English</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-black">© {new Date().getFullYear()} Dennis Demir</p>
        </div>
      </footer>
    </div>
  )
}

