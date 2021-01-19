import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export const Layout = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(Object.keys(tabs)[0])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-indigo-600">
        <div className="w-full flex flex-col items-center pt-6 pb-12">
          <h1 className="text-3xl font-bold text-white">Lucas Stettner</h1>
          <p className="uppercase text-white font-bold opacity-50">
            All about startups, VC, and crypto
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 -mt-6">
        <motion.div
          layout
          className="bg-white rounded-xl shadow-sm px-4 pb-4 relative"
        >
          <div className="border-b border-gray-200 mb-4">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {Object.keys(tabs).map((label, i) => (
                <a
                  key={i}
                  onClick={() => setCurrentTab(label)}
                  className={
                    currentTab === label
                      ? 'transition-all	group inline-flex items-center cursor-pointer border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                      : `transition-all group inline-flex items-center cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`
                  }
                >
                  <svg
                    className={
                      currentTab === label
                        ? `text-indigo-500 -ml-0.5 mr-2 h-5 w-5`
                        : 'text-gray-400 group-hover:text-gray-500 -ml-0.5 mr-2 h-5 w-5'
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d={
                        label === 'Episodes'
                          ? 'M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z'
                          : 'M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z'
                      }
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </div>
          {Object.values(tabs).map((component, i) => {
            const isCurrentTab =
              Object.keys(tabs).find((x) => tabs[x] === component) ===
              currentTab

            return (
              <AnimatePresence exitBeforeEnter key={i}>
                {isCurrentTab && (
                  <motion.div
                    layout
                    initial={{
                      position: 'absolute',
                      opacity: 0,
                      translateY: '5px',
                    }}
                    animate={{
                      position: 'relative',
                      opacity: 1,
                      translateY: '0px',
                    }}
                    exit={{
                      position: 'absolute',
                      opacity: 0,
                      translateY: '-5px',
                    }}
                  >
                    {component()}
                  </motion.div>
                )}
              </AnimatePresence>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
