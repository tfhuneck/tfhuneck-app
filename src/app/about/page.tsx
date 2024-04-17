import Image from "next/image";
import Link from "next/link";

const About = () => {

    return (
        <>
            <div className=" lg:grid lg:grid-cols-12">
                <div className='lg:col-span-5 flex items-center min-h-fit flex-col justify-between px-5 pt-10 pb-10 sm:ml-2 sm:mr-2 lg:ml-10  rounded-3xl mt-6
                bg-gradient-to-tl from-slate-950/20 to-slate-50/20 dark:from-slate-50/10 dark:to-slate-900/10 dark:bg-opacity-10 
                border-opacity-50 border-t-slate-300 border-t border-l-slate-300 border-l shadow-3d dark:drop-shadow-dark transition-all'>
                    <div>
                        <Image
                        className="rounded-full"
                        src="/images/profile.jpg"
                        alt="Timothy Huneck"
                        width={250}
                        height={250}
                        />
                    </div>
                    <div className=" text-3xl sm:text-4xl text-viking-800 dark:text-viking-600 mt-10 mb-6 ">
                        Timothy F J Huneck 
                    </div>
                    <div className="text-lg text-whiskey-800 dark:text-whiskey-500 mb-6" >
                        Freelance Full Stack Web Developer
                    </div>
                    <div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block text-whiskey-900 dark:text-whiskey-500 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </span>
                        <span className="align-middle text-lg">
                            Sacramento, CA
                        </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className="cursor-pointer text-xs sm:text-base">
                        <   Link  href={'/'}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block text-whiskey-900 dark:text-whiskey-500 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>

                                </span>
                                <span className="align-middle">
                                    tfhuneck.com
                                </span>
                            </Link>
                        </div>
                        <div className="cursor-pointer text-xs sm:text-base">
                            <a href="https://github.com/tfhuneck">
                                <span>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" className="w-6 h-6 inline-block text-whiskey-900 dark:text-whiskey-500 mr-2">
                                    <path d="m0 0h24v24h-24z" fill="none" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/>
                                    <path d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77"/>
                                    </svg>
                                </span>
                                github.com/tfhuneck
                            </a>
                        </div>
                        <div className="cursor-pointer text-xs sm:text-base">
                            <a href="mailto:tfhuneck@ucdavis.edu">
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block text-whiskey-900 dark:text-whiskey-500 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                </svg>
                                </span>
                                tfhuneck@ucdavis.edu
                            </a>
                        </div>
                        <div className="cursor-pointer text-xs sm:text-base">
                            <a href="Tel:9095499338">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="w-6 h-6 inline-block text-whiskey-900 dark:text-whiskey-500 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                </span>
                                (909) 549 9338
                            </a>
                        </div>
                        <div className="col-span-2 cursor-pointer text-xs sm:text-base">
                            <a href="https://linkedin.com/in/timothy-huneck">
                                <span>
                                <svg enable-background="new 0 0 100 100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 inline-block text-whiskey-900 dark:text-whiskey-500 mr-2">
                                    <path d="m80.667 14h-61.352c-2.934 0-5.315 2.325-5.315 5.188v61.617c0 2.867 2.381 5.195 5.315 5.195h61.352c2.936 0 5.333-2.328 5.333-5.195v-61.617c0-2.863-2.397-5.188-5.333-5.188zm-45.313 61.354h-10.684v-34.359h10.684zm-5.342-39.057c-3.423 0-6.19-2.774-6.19-6.194 0-3.415 2.767-6.189 6.19-6.189 3.415 0 6.189 2.774 6.189 6.189 0 3.42-2.774 6.194-6.189 6.194zm45.338 39.057h-10.667v-16.708c0-3.986-.078-9.111-5.551-9.111-5.558 0-6.405 4.341-6.405 8.822v16.998h-10.675v-34.36h10.245v4.692h.146c1.426-2.7 4.91-5.549 10.106-5.549 10.806 0 12.802 7.114 12.802 16.369v18.847z"/>
                                </svg>
                                </span>
                                linkedin.com/in/timothy-huneck  
                            </a>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-7 flex min-h-fit flex-col justify-between px-5 pb-10 pt-10 sm:ml-2 sm:mr-2 lg:ml-4 lg:mr-20 rounded-3xl mt-6
                bg-gradient-to-tl from-slate-950/20 to-slate-50/20 dark:from-slate-50/10 dark:to-slate-900/10 dark:bg-opacity-10 
                border-opacity-50 border-t-slate-300 border-t border-l-slate-300 border-l shadow-3d dark:drop-shadow-dark transition-all'>
                    <div className="text-3xl text-viking-800 dark:text-viking-400 mb-4">
                        Technical Skills
                    </div>
                    <div className="grid grid-cols-auto-fit-150 gap-y-5">
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/html-5.svg'
                                    alt="html"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Html 5 
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/css-3.svg'
                                    alt="css"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                CSS 
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/javascript-js.svg'
                                    alt="javascript"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                JavaScript 
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/typescript.svg'
                                    alt="typescript"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                TypeScript 
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/react.svg'
                                    alt="react"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                React 
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/next-js.svg'
                                    alt="next-js"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Next.js
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/tailwind-css.svg'
                                    alt="tailwind-css"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Tailwind
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/bootstrap.svg'
                                    alt="bootstrap"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Bootsrap
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/sass.svg'
                                    alt="sass"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Sass
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/node-js.svg'
                                    alt="node-js"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Node.js
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/npm.svg'
                                    alt="npm"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                npm 
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/express.svg'
                                    alt="express"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Express
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/api.svg'
                                    alt="api"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Restful Apis
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/electron.svg'
                                    alt="electron"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Electron
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/mongodb.svg'
                                    alt="mongodb"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                MongoDB
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/redis.svg'
                                    alt="redis"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Redis
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/git-alt.svg'
                                    alt="git-alt"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Git
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/swagger.svg'
                                    alt="swagger"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Swagger
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/postman.svg'
                                    alt="postman"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Postman
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/docker.svg'
                                    alt="docker"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Docker
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/aws.svg'
                                    alt="aws"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Aws
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/digital-ocean.svg'
                                    alt="digital-ocean"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Digital Ocean
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/heroku.svg'
                                    alt="heroku"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Heroku
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/figma.svg'
                                    alt="figma"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Figma
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/adobe-xd.svg'
                                    alt="adobe-xd"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Adobe XD
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/illustrator.svg'
                                    alt="illustrator"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Illustrator
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/photoshop.svg'
                                    alt="photoshop"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Photoshop
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/sql.svg'
                                    alt="sql"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                SQL & NoSQL
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/stata.svg'
                                    alt="stata"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Stata
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/github.svg'
                                    alt="github"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Github
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/jira.svg'
                                    alt="jira"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Jira
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/trello.svg'
                                    alt="trello"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Trello
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/notion.svg'
                                    alt="notion"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Notion
                            </span>
                       </div>
                       <div>
                            <span>
                                <Image
                                    className="inline-block "
                                    src='/images/slack.svg'
                                    alt="slack"
                                    width={25}
                                    height={25} 
                                />
                            </span>
                            <span className="inline-block align-middle ml-2 mr-3">
                                Slack
                            </span>
                       </div>

                    </div>
                    <div className="text-3xl text-viking-800 dark:text-viking-400 mt-6 mb-4">
                        Soft Skills
                    </div>
                    <div>
                        Bilingual in English & German  
                    </div>
                    <div>
                        Transparent Communication skills
                    </div>
                    <div>
                        Effecticve Problem solving skills
                    </div>
                    <div>
                        Team- building & Leadership experience
                    </div>
                    <div>
                        E-commerce, SEO & online marketing
                    </div>
                </div>
                <div className='lg:col-span-5 flex min-h-fit flex-col justify-between px-5 pt-10 pb-10 sm:ml-2 sm:mr-2 lg:ml-10 mb-4 rounded-3xl mt-6
                bg-gradient-to-tl from-slate-950/20 to-slate-50/20 dark:from-slate-50/10 dark:to-slate-900/10 dark:bg-opacity-10 
                border-opacity-50 border-t-slate-300 border-t border-l-slate-300 border-l shadow-3d dark:drop-shadow-dark transition-all'> 
                    <div className="text-3xl text-viking-800 dark:text-viking-400 mb-5">
                        Education 
                    </div>
                    <div className="grid grid-cols-3 auto-cols-max gap-y-4 gap-x-2">
                        <div className="col-span-1">
                            <span className=" text-whiskey-900 dark:text-whiskey-500">  
                                2023
                            </span>
                            <div className="ml-2">
                                MIT xPRO
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className="text-viking-800 dark:text-viking-400">
                                Full Stack Web Development Certificate
                            </span>
                            <div className="ml-2">
                                MERN Stack
                            </div>
                        </div>
                        <div className="col-span-1">
                            <span className=" text-whiskey-900 dark:text-whiskey-500">
                                2021
                            </span>
                            <div className="ml-2">
                                University of California Davis
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className="text-viking-800 dark:text-viking-400">
                                Bachelor of Arts in Political Science
                            </span>
                            <div className="ml-2">
                                Focus in
                                International Relations and Economics
                            </div>
                        </div>
                        <div className="col-span-1">
                            <span className=" text-whiskey-900 dark:text-whiskey-500">  
                                2017
                            </span>
                            <div className="ml-2">  
                                Norco College Norco California
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className="text-viking-800 dark:text-viking-400">
                                Associates Degree in Social & Behavioral Science
                                with Honors
                            </span>
                            <div className="ml-2">
                                Phi Theta Kappa Honors Society Chapter President
                                VP of Associated Students
                            </div>
                        </div>
                        <div className="col-span-1">
                            <span className=" text-whiskey-900 dark:text-whiskey-500">  
                                2013
                            </span>
                            <div className="ml-2">
                                Hamburg Hotel Management School Germany
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className="text-viking-800 dark:text-viking-400">
                                Certified Hotel Professional
                            </span>
                            <div className="ml-2">
                                Certified Bar Mixiologist,
                                Trained in various departments from Food & Beverage to Front of House
                            </div>
                        </div>
                        <div className="col-span-1">
                            <span className=" text-whiskey-900 dark:text-whiskey-500">  
                                2010
                            </span>
                            <div className="ml-2"> 
                                Margartha Rothe Gymnasium Hamburg Germany
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className="text-viking-800 dark:text-viking-400">
                                Abitur
                            </span>
                            <div className="ml-2">
                                German seconday school diploma and matriculation examination, Focus in English & Economics
                            </div>
                        </div>
                    </div>
                    <div className="text-3xl text-viking-800 dark:text-viking-400 mt-6 mb-4">
                        Awards & Certificates
                    </div>
                    <div>
                        <div className="text-viking-800 dark:text-viking-400">
                            Phi Theta Kappa
                        </div>
                        <div className="ml-2">
                            All California Academic Team Award
                        </div>
                        <div className="text-viking-800 dark:text-viking-400">
                            University of Minnesota
                        </div>
                        <div className="ml-2">
                            Software Development Lifecycle Certificate
                        </div>
                        <div className="text-viking-800 dark:text-viking-400">
                            University of Alberta
                        </div>
                        <div className="ml-2">
                            Software Product Management Certificate
                        </div>
                        <div className="text-viking-800 dark:text-viking-400">
                            Google
                        </div>
                        <div className="ml-2">
                            Project Management Certificate 
                        </div>
                        <div className="ml-2">
                            UX Design Professional Certificate 
                        </div>
                        <div className="text-viking-800 dark:text-viking-400">
                            UC Davis
                        </div>
                        <div className="ml-2">
                            SQL for Data Science Certificate
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-7 flex min-h-fit flex-col justify-between px-5 pb-10 pt-10 sm:ml-2 sm:mr-2 lg:ml-4 lg:mr-20 mb-4 rounded-3xl mt-6
                bg-gradient-to-tl from-slate-950/20 to-slate-50/20 dark:from-slate-50/10 dark:to-slate-900/10 dark:bg-opacity-10 
                border-opacity-50 border-t-slate-300 border-t border-l-slate-300 border-l shadow-3d dark:drop-shadow-dark transition-all'> 
                    <div className="text-3xl text-viking-800 dark:text-viking-400 mb-4">
                        Portfolio
                    </div>
                    <div className="">
                        Consignment Service Application with User and Admin Dashboard
                    </div>
                    <div className="">
                        Cross Platform Web-Scraping Price Data Analysis Application
                    </div>
                    <div className=" mb-6">
                        Web Application for Restaurant - Built with MERN stack
                    </div>
                    <div className="text-3xl text-viking-800 dark:text-viking-400 mb-4">
                        Experience
                    </div>
                    <div className="grid grid-cols-3 auto-cols-max gap-y-4 gap-x-2">
                        <div className="col-span-1">
                            <span className=" text-whiskey-900 dark:text-whiskey-500">  
                                2022 - Present
                            </span>
                            <div className="ml-2">
                                Freelance
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className="text-viking-800 dark:text-viking-400">
                                Full Stack Web Developer
                            </span>
                            <div className="ml-2">
                                Designing, developing and deploying web and multi- platform applications
                            </div>
                        </div>
                        <div className="col-span-1">
                            <span className=" text-whiskey-900 dark:text-whiskey-500">
                                Oct. 2022 – Dec. 2022
                            </span>
                            <div className="ml-2">
                                Fountain
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className="text-viking-800 dark:text-viking-400">
                                Interview Specialist
                            </span>
                            <div className="ml-2">
                                Managed Applicant Tracking System workflow and increased conversion rates
                            </div>
                        </div>
                        <div className="col-span-1">
                            <span className=" text-whiskey-900 dark:text-whiskey-500">  
                                Sep. 2019 – Aug. 2021
                            </span>
                            <div className="ml-2">  
                                D&P Sporst Cards, Sacramento CA
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className="text-viking-800 dark:text-viking-400">
                                Product & E-commerce Manager
                            </span>
                            <div className="ml-2">
                                Developed, Deployed, and managed E-Commerce platform that generated over $2 million annual revenue
                            </div>
                        </div>
                        <div className="col-span-1">
                            <span className=" text-whiskey-900 dark:text-whiskey-500">  
                                Sep. 2019 – Aug. 2021
                            </span>
                            <div className="ml-2">
                                Open Rice Restaurant Group Inc., Davis CA
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className="text-viking-800 dark:text-viking-400">
                                Events & Operations Manager
                            </span>
                            <div className="ml-2">
                                Managed marketing, brand growth, event & catering bookings and operations
                            </div>
                        </div>
                        <div className="col-span-1">
                            <span className=" text-whiskey-900 dark:text-whiskey-500">  
                                Sep. 2017 - Sep. 2019
                            </span>
                            <div className="ml-2">
                                Our House Bar & Lounge, Davis CA
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className="text-viking-800 dark:text-viking-400">
                                Bar & Restaurant Manager
                            </span>
                            <div className="ml-2">
                            Managed restaurant operations with a focus on delivering high service standards
                            </div>
                        </div>
                        <div className="col-span-1">
                            <span className=" text-whiskey-900 dark:text-whiskey-500">  
                                Feb. 2015 - Aug. 2017
                            </span>
                            <div className="ml-2"> 
                                Buca di Beppo, Claremont CA
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className="text-viking-800 dark:text-viking-400">
                                Bartender
                            </span>
                            <div className="ml-2">
                                Delivered high-quality and personable service in the bar and restaurant setting in a timely manner
                            </div>
                        </div>
                        <div className="col-span-1">
                            <span className=" text-whiskey-900 dark:text-whiskey-500">  
                                Nov. 2013 - Dec. 2014
                            </span>
                            <div className="ml-2"> 
                                TGI Fridays,Rancho Cucamonga CA
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className="text-viking-800 dark:text-viking-400">
                                Server
                            </span>
                            <div className="ml-2">
                                Delivered high-quality and personable service in the bar and restaurant setting in a timely manner
                            </div>
                        </div>
                        <div className="col-span-1">
                            <span className=" text-whiskey-900 dark:text-whiskey-500">  
                                Aug. 2010 - Jun. 2013
                            </span>
                            <div className="ml-2"> 
                                Sofitel Hamburg Luxury Hotel, Germany
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className="text-viking-800 dark:text-viking-400">
                                Hotel Professional Apprentice
                            </span>
                            <div className="ml-2">
                                Successfully completed a three-year apprentice- ship as Hotel Professional
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;