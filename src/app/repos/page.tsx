import Image from "next/image";

export default function Repos() {
  return (
    <>
      <div className="grid grid-cols-auto-fit-275 gap-5 ml-2 mr-2 lg:ml-4 lg:mr-20 mt-8">
        <div
          className="flex min-h-fit flex-col justify-between px-5 pb-10 pt-10 rounded-3xl bg-gradient-to-tl from-slate-950/20 to-slate-50/20 dark:from-slate-50/10 dark:to-slate-900/10 dark:bg-opacity-10 
                  border-opacity-50 border-t-slate-300 border-t border-l-slate-300 border-l shadow-3d dark:drop-shadow-dark transition-all items-center hover:-translate-y-2 hover:scale-101"
        >
          <Image
            className="relative"
            src="/images/tfh_logo.png"
            alt="tfh"
            width={150}
            height={150}
            priority
          />
          <span className="mt-6 mb-4">T F Huneck Portfolio Page</span>
          <a href="https://github.com/tfhuneck/tfhuneck-app" className="text-viking-500">
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" className="w-6 h-6 inline-block text-viking-500 mr-2">
                <path d="m0 0h24v24h-24z" fill="none" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/>
                <path d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77"/>
              </svg>
            </span>
            View in Github
          </a>
        </div>
        <div
          className="flex min-h-fit flex-col justify-between px-5 pb-10 pt-10 rounded-3xl bg-gradient-to-tl from-slate-950/20 to-slate-50/20 dark:from-slate-50/10 dark:to-slate-900/10 dark:bg-opacity-10 
                  border-opacity-50 border-t-slate-300 border-t border-l-slate-300 border-l shadow-3d dark:drop-shadow-dark transition-all items-center hover:-translate-y-2 hover:scale-101"
        >
          <Image
            className="relative"
            src="/images/dplogo.png"
            alt="d&plogo"
            width={150}
            height={150}
            priority
          />
          <span className="mt-6 mb-4">D&P Consignments App</span>
          <a href="https://github.com/tfhuneck/dp-consignments" className="text-viking-500">
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" className="w-6 h-6 inline-block text-viking-500 mr-2">
                <path d="m0 0h24v24h-24z" fill="none" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/>
                <path d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77"/>
              </svg>
            </span>
            View in Github
          </a>
        </div>
        <div
          className="flex min-h-fit flex-col justify-between px-5 pb-10 pt-10 rounded-3xl bg-gradient-to-tl from-slate-950/20 to-slate-50/20 dark:from-slate-50/10 dark:to-slate-900/10 dark:bg-opacity-10 
                  border-opacity-50 border-t-slate-300 border-t border-l-slate-300 border-l shadow-3d dark:drop-shadow-dark transition-all items-center hover:-translate-y-2 hover:scale-101"
        >
          <Image
            className="relative"
            src="/images/dplogo.png"
            alt="d&plogo"
            width={150}
            height={150}
            priority
          />
          <span className="mt-6 mb-4">D&P Consignments Admin</span>
          <a href="https://github.com/tfhuneck/consignment-admin" className="text-viking-500">
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" className="w-6 h-6 inline-block text-viking-500 mr-2">
                <path d="m0 0h24v24h-24z" fill="none" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/>
                <path d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77"/>
              </svg>
            </span>
            View in Github
          </a>
        </div>
        <div
          className="flex min-h-fit flex-col justify-between px-5 pb-10 pt-10 rounded-3xl bg-gradient-to-tl from-slate-950/20 to-slate-50/20 dark:from-slate-50/10 dark:to-slate-900/10 dark:bg-opacity-10 
                  border-opacity-50 border-t-slate-300 border-t border-l-slate-300 border-l shadow-3d dark:drop-shadow-dark transition-all items-center hover:-translate-y-2 hover:scale-101"
        >
          <Image
            className="relative"
            src="/images/dplogo.png"
            alt="d&plogo"
            width={150}
            height={150}
            priority
          />
          <span className="mt-6 mb-4">D&P Webscraper</span>
          <a href="https://github.com/tfhuneck/DP-scrape-app" className="text-viking-500">
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" className="w-6 h-6 inline-block text-viking-500 mr-2">
                <path d="m0 0h24v24h-24z" fill="none" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/>
                <path d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77"/>
              </svg>
            </span>
            View in Github
          </a>
        </div>
        <div
          className="flex min-h-fit flex-col justify-between px-5 pb-10 pt-10 rounded-3xl bg-gradient-to-tl from-slate-950/20 to-slate-50/20 dark:from-slate-50/10 dark:to-slate-900/10 dark:bg-opacity-10 
                  border-opacity-50 border-t-slate-300 border-t border-l-slate-300 border-l shadow-3d dark:drop-shadow-dark transition-all items-center hover:-translate-y-2 hover:scale-101"
        >
          <Image
            className="relative"
            src="/images/ORK_Logo.png"
            alt="ork"
            width={150}
            height={150}
            priority
          />
          <span className="mt-6 mb-4">Restaurant Landing Page</span>
          <a href="https://github.com/tfhuneck/ork-react" className="text-viking-500">
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" className="w-6 h-6 inline-block text-viking-500 mr-2">
                <path d="m0 0h24v24h-24z" fill="none" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/>
                <path d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77"/>
              </svg>
            </span>
            View in Github
          </a>
        </div>
        <div
          className="flex min-h-fit flex-col justify-between px-5 pb-10 pt-10 rounded-3xl bg-gradient-to-tl from-slate-950/20 to-slate-50/20 dark:from-slate-50/10 dark:to-slate-900/10 dark:bg-opacity-10 
                  border-opacity-50 border-t-slate-300 border-t border-l-slate-300 border-l shadow-3d dark:drop-shadow-dark transition-all items-center hover:-translate-y-2 hover:scale-101"
        >
          <Image
            className="relative"
            src="/images/sg-logo.png"
            alt="Super Groomers"
            width={150}
            height={150}
            priority
          />
          <span className="mt-6 mb-4">Super Groomers SPA</span>
          <a href="https://github.com/tfhuneck/super-groomers-app" className="text-viking-500">
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" className="w-6 h-6 inline-block text-viking-500 mr-2">
                <path d="m0 0h24v24h-24z" fill="none" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/>
                <path d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77"/>
              </svg>
            </span>
            View in Github
          </a>
        </div>
        <div
          className="flex min-h-fit flex-col justify-between px-5 pb-10 pt-10 rounded-3xl bg-gradient-to-tl from-slate-950/20 to-slate-50/20 dark:from-slate-50/10 dark:to-slate-900/10 dark:bg-opacity-10 
                  border-opacity-50 border-t-slate-300 border-t border-l-slate-300 border-l shadow-3d dark:drop-shadow-dark transition-all items-center hover:-translate-y-2 hover:scale-101"
        >
          <Image
            className="relative"
            src="/images/mitxpro.png"
            alt="mitxpro"
            width={150}
            height={150}
            priority
          />
          <span className="mt-6 mb-4">MIT xPro Mern Project</span>
          <a href="https://github.com/tfhuneck/mitxpro-bad-bank" className="text-viking-500">
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" className="w-6 h-6 inline-block text-viking-500 mr-2">
                <path d="m0 0h24v24h-24z" fill="none" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/>
                <path d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77"/>
              </svg>
            </span>
            View in Github
          </a>
        </div>
        <div
          className="flex min-h-fit flex-col justify-between px-5 pb-10 pt-10 rounded-3xl bg-gradient-to-tl from-slate-950/20 to-slate-50/20 dark:from-slate-50/10 dark:to-slate-900/10 dark:bg-opacity-10 
                  border-opacity-50 border-t-slate-300 border-t border-l-slate-300 border-l shadow-3d dark:drop-shadow-dark transition-all items-center hover:-translate-y-2 hover:scale-101"
        >
         <Image
            className="relative"
            src="/images/mitxpro.png"
            alt="mitxpro"
            width={150}
            height={150}
            priority
          />
          <span className="mt-6 mb-4">MIT xPro shoppingcart exercise</span>
          <a href="https://github.com/tfhuneck/mitxpro-shoppingcart" className="text-viking-500">
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" className="w-6 h-6 inline-block text-viking-500 mr-2">
                <path d="m0 0h24v24h-24z" fill="none" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/>
                <path d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77"/>
              </svg>
            </span>
            View in Github
          </a>
        </div>
       
      </div>
    </>
  );
}
