import './App.css'
import cold_case from "./assets/cold_case.png"
import demonic_tutor1 from "./assets/demonic_tutor_1.png"
import demonic_tutor2 from "./assets/demonic_tutor_2.png"
import achievement_app_1 from "./assets/achievement_app_1.png"
import { HomeIcon } from "@heroicons/react/24/outline";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { useRef } from 'react'


function App() {
  const sectionProfile = useRef(null);
  const sectionProjets = useRef(null);
  const sectionCompetences = useRef(null);
  const sectionParcour = useRef(null);
  const sectionContacts = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({behaviour: "auto"})
  }

  return (
    <div className='lg:overflow-hidden h-screen w-full'>

      {/* ---------------------------------------------------------Menu-PC--------------------------------------------------------- */}

      <div className='fixed lg:left-0 lg:h-screen lg:content-center text-blue-200 z-50 lg:w-52 bottom-0 flex justify-around lg:block w-full lg:shadow-none shadow-2xl shadow-blue-200 bg-gray-900 py-5 lg:bg-transparent lg:m-10 rounded'>
        <button className='flex mx-5 lg:my-12 w-fit h-fit hover:bg-blue-200 hover:text-gray-900 p-1 rounded duration-150 lg:hover:mx-7' onClick={() => scrollToSection(sectionProfile)}>
          <HomeIcon className="h-8 w-8 lg:h-6 lg:w-6 lg:mr-3" />
          <h1 className='hidden lg:block'>Profile</h1>
        </button>
        <button className='flex mx-5 lg:my-12 w-fit h-fit hover:bg-blue-200 hover:text-gray-900 p-1 rounded duration-150 lg:hover:mx-7' onClick={() => scrollToSection(sectionProjets)}>
          <WrenchScrewdriverIcon className="h-8 w-8 lg:h-6 lg:w-6 lg:mr-3" />
          <h1 className='hidden lg:block'>Projets</h1>
        </button>
        <button className='flex mx-5 lg:my-12 w-fit h-fit hover:bg-blue-200 hover:text-gray-900 p-1 rounded duration-150 lg:hover:mx-7' onClick={() => scrollToSection(sectionCompetences)}>
          <ChartBarIcon className="h-8 w-8 lg:h-6 lg:w-6 lg:mr-3" />
          <h1 className='hidden lg:block'>Compétences</h1>
        </button>
        <button className='flex mx-5 lg:my-12 w-fit h-fit hover:bg-blue-200 hover:text-gray-900 p-1 rounded duration-150 lg:hover:mx-7' onClick={() => scrollToSection(sectionParcour)}>
          <AcademicCapIcon className="h-8 w-8 lg:h-6 lg:w-6 lg:mr-3" />
          <h1 className='hidden lg:block'>Parcours</h1>
        </button>
        <button className='flex mx-5 lg:my-12 w-fit h-fit hover:bg-blue-200 hover:text-gray-900 p-1 rounded duration-150 lg:hover:mx-7' onClick={() => scrollToSection(sectionContacts)}>
          <AtSymbolIcon className="h-8 w-8 lg:h-6 lg:w-6 lg:mr-3" />
          <h1 className='hidden lg:block'>Contacts</h1>
        </button>
      </div>

      {/* ---------------------------------------------------------Fin-Menu-PC--------------------------------------------------------- */}

      <div className='bg-gray-900 text-blue-200 w-full min-h-screen font-mono lg:overflow-hidden '>

        {/* ---------------------------------------------------------Accueil--------------------------------------------------------- */}

        <div ref={sectionProfile} className='flex flex-col w-full h-screen py-50 justify-center'>
          <h1 className='text-4xl font-bold lg:text-8xl text-center pb-5'>Bienvenue,</h1>
          <p className='text-wrap mx-10 lg:text-2xl lg:mx-60'>Je suis Rémi Chabrerie, développeur de site web et créateur de jeux vidéo.</p>
          <p className='text-wrap text-justify mx-10 lg:text-2xl lg:mx-60'>Diplomé d'un BUT Informatique Graphique durant lequel j'ai pu apprendre et approfondir les bases du développement,
            j'ai poursivit des projets indépendant, répondant à des besoins ou des idées créatives personnelles.</p>
          <div className='flex w-full h-50 justify-center items-center'>
            <a className='hover:bg-blue-200 border border-blue-200 hover:text-white hover:scale-110 rounded h-fit p-5 m-2 duration-150' href='https://github.com/Reumix' target='_blank'>Github</a>
          </div>
        </div>

        {/* ---------------------------------------------------------Fin-Accueil--------------------------------------------------------- */}

        {/* ---------------------------------------------------------Projets--------------------------------------------------------- */}

        <div ref={sectionProjets} className='w-full lg:h-screen h-fit'>
          <h1 className='text-3xl text-blue-200 font-bold text-center py-5'>Mes projets</h1>
          <div className='flex flex-col flex-wrap lg:flex-row lg:px-50 lg:justify-center'>
            <div className=' m-2 p-2 lg:w-1/3 hover:bg-blue-200 hover:text-gray-900 rounded duration-150'>
              <img src={cold_case} className='rounded mb-2'/>
              <h1 className='text-2xl font-bold pb-2'>Cold Case<span className='italic text-lg'> (en cours d'écriture du scénario)</span></h1>
              <p><span class="font-semibold">Cold Case</span> est un jeu narratif d'enquête à la 3ème personne inspiré des angles de caméras des premiers Resident Evil.</p>
            </div>
            <div className=' m-2 p-2 lg:w-1/3 hover:bg-blue-200 hover:text-gray-900 rounded duration-150'>
              <img src={demonic_tutor1} className='rounded mb-2'/>
              <h1 className='text-2xl font-bold pb-2'>Demonic Tutor<span className='italic text-lg'> (en cours de développement)</span></h1>
              <p><span class="font-semibold">Demonic Tutor</span> est un site internet de recherche et de collection de cartes Magic: The Gathering.</p>
            </div>
            <div className=' m-2 p-2 lg:w-1/3 hover:bg-blue-200 hover:text-gray-900 rounded duration-150'>
              <img src={achievement_app_1} className='rounded mb-2'/>
              <h1 className='text-2xl font-bold pb-2'>Achievement App<span className='italic text-lg'> (en cours de développement)</span></h1>
              <p><span class="font-semibold">Achievement App</span> est un réseau social restreint.</p>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------Fin-Projets--------------------------------------------------------- */}

        {/* ---------------------------------------------------------Compétences--------------------------------------------------------- */}

        <div ref={sectionCompetences} className='w-full lg:h-screen h-fit'>
          <h1 className='text-3xl text-blue-200 font-bold text-center py-5'>Mes compétences</h1>
          <div className='flex flex-col flex-wrap'>
            <h1 className='text-xl font-bold pb-2 text-center'>Développement Web</h1>
            <div className='flex flex-wrap w-full justify-center'>
              <div className='flex flex-col h-fit bg-gray-700 p-2 m-2 rounded text-center hover:bg-blue-200 hover:text-gray-900 duration-150'>
                <h1 className='text-xl pb-3'>Langages de programmations</h1>
                <div className='flex flex-row'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png' 
                  alt='HTML' 
                  className='rounded h-30'/>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" 
                  alt="CSS" 
                  className='rounded h-30'/>
                  <img src="https://i1.wp.com/www.keesmel.com/wp-content/uploads/2020/09/js-logo.png?fit=500%2C500" 
                  alt="Javascript" 
                  className='rounded h-30'/>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" 
                  alt="Typescript" 
                  className='rounded h-30 p-2'/>
                </div>
              </div>
              <div className='flex flex-col h-fit bg-gray-700 p-2 m-2 rounded text-center hover:bg-blue-200 hover:text-gray-900 duration-150'>
                <h1 className='text-xl pb-3'>Frameworks</h1>
                <div className='flex flex-row'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png' 
                  alt='TailWind CSS' 
                  className='rounded h-30 p-2'/>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" 
                  alt="React Native" 
                  className='rounded h-30 p-2' />
                  <img src="https://img.icons8.com/color/512/nextjs.png" 
                  alt="NextJS" 
                  className='rounded h-30 p-2' />
                  <img src="https://avatars.githubusercontent.com/u/108266839?v=4" 
                  alt="T3 App" 
                  className='rounded h-30 p-2' />
                </div>
              </div>
              <div className='flex flex-col h-fit bg-gray-700 p-2 m-2 rounded text-center hover:bg-blue-200 hover:text-gray-900 duration-150'>
                <h1 className='text-xl pb-3'>Bases de données</h1>
                <div className='flex flex-row'>
                  <img src="https://cdn.iconscout.com/icon/free/png-256/free-mysql-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-3030165.png" 
                  alt="MySQL" 
                  className='rounded h-30 p-2' />
                  <img src="https://cdn.freelogovectors.net/wp-content/uploads/2022/01/prisma_logo-freelogovectors.net_.png" 
                  alt="Prisma" 
                  className='rounded h-30 p-2' />
                  <img src="https://images.icon-icons.com/2415/PNG/512/redis_original_wordmark_logo_icon_146369.png" 
                  alt="Redis" 
                  className='rounded h-30 p-2' />
                  <img src="https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" 
                  alt="MongoDB" 
                  className='rounded h-30 p-2' />
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <h1 className='text-xl font-bold pb-2 text-center'>Création de jeux vidéo</h1>
          </div>
        </div>

        {/* ---------------------------------------------------------Fin-Compétences--------------------------------------------------------- */}

      </div>
    </div>
  )
}

export default App
