import './App.css'
import ai from './image/replica.png';
import chibi from './image/chibi.png';
import frontend from './image/frontend.png';
import backend from './image/backend.png';
import ux from './image/ux.png';
import blur from './image/blur.png';

function App() {
  return (
      <div>
        
        <div className="flex flex-col w-full min-h-screen bg-[#1b1717] text-amber-50 gap-60 justify-center"
          style= {{
          backgroundImage: ` url(${ai})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`, 
          }} >    

          <div className='navbar'>
            <div className='headings'>
              <a href='#'>Home</a>
              <a href='#'>About Me</a>
              <a href='#'>Skills</a>
              <a href='#'>Projects</a>
              <a href='#'>Contacts</a>
            </div>
          </div>

          <section className='home'>
            <div className='home-text'>
              <h1 className='name'>Hi I'm <strong>Llyne Say</strong></h1>

              <p className='description'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur deleniti commodi esse molestias a tempora eligendi quod nesciunt corporis quibusdam dolorem possimus amet dolore repellendus, unde nostrum accusamus autem. Minima!
              </p>

              <div className='b1'>
                <button>Download CV</button>
              </div>
            </div>

            <div className='home-image'>
              <img
                src={chibi}
                alt="Profile"
                className='profile-pic'
              />
            </div>
            
          </section>
        </div>
        

        <section className=" flex flex-col w-full min-h-screen bg-black justify-center"
          style= {{
          backgroundImage: ` url(${blur})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`, 
          }}
        >
          <div className='container'>
            
            <div className='aboutme'>
              <h2>About Me</h2>
            </div>

            <div className='about'>
              <img src={frontend} className='frontend'/>
              <div>
                <h3>Frontend Developer</h3>
                  <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi explicabo perspiciatis fugit? Mollitia quia accusantium doloribus aperiam possimus fugit, dolore esse, rem pariatur nostrum iure sapiente facere voluptates ullam autem?</p>
              </div>

              <img src={backend} className='backend' />
              <div>
                <h4>Backend Developer</h4>
                <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi explicabo perspiciatis fugit? Mollitia quia accusantium doloribus aperiam possimus fugit, dolore esse, rem pariatur nostrum iure sapiente facere voluptates ullam autem?</p>
              </div>

              <img src={ux} className='ux'/>
              <div>
                <h5>UI/UX Designer</h5>
                <p className='p3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi explicabo perspiciatis fugit? Mollitia quia accusantium doloribus aperiam possimus fugit, dolore esse, rem pariatur nostrum iure sapiente facere voluptates ullam autem?</p>
              </div>
            </div>

          </div>
        </section>

      </div>

  )
}

export default App