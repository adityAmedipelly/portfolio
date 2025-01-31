import Html from "../assets/Html.png";
import kubernetes from "../assets/kubernetes.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import docker from "../assets/docker.png";
import Tailwind from "../assets/Tailwind Css.png";
import gitC from "../assets/gitC.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mongodb from "../assets/mongodb.svg";
import Express from "../assets/Express.png";
import typescript from "../assets/typescript.png";
import NextJs from "../assets/NextJs.png";
import postgre from "../assets/postgre.png";
import and from "../assets/and.png";

const About = () => {
  return (
      <div className='relative' id='about' >
          <div className='bg-gray-100 py-12 flex items-center justify-center '>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center'>
                  
                  <div className='mt-10 flex items-center justify-center'>
                      <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 items-center justify-center'>
                       
                          <div className='border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center justify-center shadow-lg shadow-red-300'>
                              <h3 className='text-2xl font-semibold text-red-600'>Skills & Expertise</h3>
                              <div className='flex items-center justify-center flex-wrap gap-3'>
                                  <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                      <img src={Html} alt="" className='w-10' />
                                      <span className='font-semibold'>HTML</span>
                                  </div>
                                  <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                      <img src={docker} alt="" className='w-8' />
                                      <span className='font-semibold'>CSS</span>
                                  </div>
                                  <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                      <img src={Javascript} alt="" className='w-10' />
                                      <span className='font-semibold'>Javascript</span>
                                  </div>
                                  <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                      <img src={ReactLogo} alt="" className='w-8 rounded-full' />
                                      <span className='font-semibold'>React</span>
                                  </div>
                                  <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                      <img src={postgre} alt="" className='w-8' />
                                      <span className='font-semibold'>Redux</span>
                                  </div>
                                  <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                      <img src={Tailwind} alt="" className='w-8 rounded-full' />
                                      <span className='font-semibold'>Tailwind Css</span>
                                  </div>
                                  <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                      <img src={kubernetes} alt="" className='w-10' />
                                      <span className='font-semibold'>Bootstrap</span>
                                  </div>
                                  <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                      <img src={NodeLogo} alt="" className='w-10' />
                                      <span className='font-semibold'>Node Js</span>
                                  </div>
                                  <div className='border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                      <img src={Mongodb} alt="" className='w-10' />
                                      <span className='font-semibold'>Mongodb</span>
                                  </div>
                                  <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                      <img src={Express} alt="" className='w-10' />
                                      <span className='font-semibold'>Express Js</span>
                                  </div>
                                  <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                      <img src={NextJs} alt="" className='w-9' />
                                      <span className='font-semibold'>Next Js</span>
                                  </div>
                                  <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                      <img src={typescript} alt="" className='w-9' />
                                      <span className='font-semibold'>Next Js</span>
                                  </div>
                                  <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                      <img src={gitC} alt="" className='w-9' />
                                      <span className='font-semibold'>Next Js</span>
                                  </div>
                                  <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                      <img src={and} alt="" className='w-9' />
                                      <span className='font-semibold'>Next Js</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                 
              </div>
          </div>
      </div>
  )
}

export default About