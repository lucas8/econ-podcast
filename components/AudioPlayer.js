import React, { useEffect, useRef, useState } from 'react'
import { format } from 'date-fns'
import Image from 'next/image'

const toDateString = (seconds) => {
  const date = new Date(null)
  date.setSeconds(seconds)
  return format(date, 'mm:ss')
}

export const AudioPlayer = ({ audio, cover, title, description, index }) => {
  const [isPlaying, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [timestamp, setTimestamp] = useState(0)

  const audioPlayerRef = useRef()
  const timelineRef = useRef()

  const clickedTime = (e) => {
    const clickPositionInPage = e.pageX
    const timelineStart = timelineRef.current.getBoundingClientRect().left
    const timelineWidth = timelineRef.current.offsetWidth
    const clickPositionInBar = clickPositionInPage - timelineStart
    const timePerPixel = audioPlayerRef.current.duration / timelineWidth
    return timePerPixel * clickPositionInBar
  }

  const handleTimeUpdate = React.useCallback((e) => {
    if (timelineRef.current) {
      const ratio = e.target.currentTime / e.target.duration
      const position =
        timelineRef.current.offsetWidth * ratio - timelineRef.current.offsetLeft
      setProgress(position)
      setTimestamp(Math.floor(e.target.currentTime))
    }
  }, [])

  const handleMouseMove = React.useCallback((e) => {
    const clickedPixelTime = clickedTime(e)
    console.log(clickedPixelTime, audioPlayerRef.current.duration)
    if (clickedPixelTime < audioPlayerRef.current.duration - 5) {
      audioPlayerRef.current.currentTime = clickedPixelTime
    }
  })

  const handleMouseUp = React.useCallback(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
  })

  const handleMouseDown = React.useCallback(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }, [])

  useEffect(() => {
    audioPlayerRef.current.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      audioPlayerRef.current &&
        audioPlayerRef.current.removeEventListener(
          'timeupdate',
          handleTimeUpdate,
        )
    }
  }, [audioPlayerRef.current])

  return (
    <>
      <audio src={audio} ref={audioPlayerRef} />
      <div className="bg-gray-100 w-full rounded p-4 flex items-center mt-2">
        <Image
          width={100}
          height={100}
          className="w-24 h-24 object-cover rounded"
          src={cover}
        />
        <div className="flex flex-col ml-4 w-full">
          <div className="flex items-center">
            <div className="flex flex-col">
              <span className="font-bold uppercase text-gray-500">
                Episode {index}
              </span>
              <span className="tracking-tight	text-xl font-semibold text-gray-900">
                {title}
              </span>
            </div>
            <a href={audio} target="_blank" className="ml-auto h-6 w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-indigo-500 hover:text-indigo-400 transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
          <div className="w-full flex justify-center">
            <button
              className="h-8 w-8 focus:outline-none"
              onClick={() => {
                if (isPlaying) {
                  audioPlayerRef.current.pause()
                  setPlaying(false)
                } else {
                  audioPlayerRef.current.play()
                  setPlaying(true)
                }
              }}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-indigo-500 hover:text-indigo-400 transition-colors"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-indigo-500 hover:text-indigo-400 transition-colors"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            <div className="relative w-full flex items-center ml-2">
              <div
                ref={timelineRef}
                className="overflow-hidden h-2 w-full text-xs flex rounded bg-indigo-200"
              >
                <div
                  style={{ width: `${progress}px` }}
                  className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                >
                  <button
                    onMouseDown={handleMouseDown}
                    style={{ marginLeft: `calc(${progress}px - 0.5rem)` }}
                    className="absolute bg-white rounded-full w-4 h-4 shadow-sm transition duration-250 ease-in-out transform focus:outline-none hover:scale-110"
                  ></button>
                </div>
              </div>
              <span className="ml-2 text-gray-500 text-sm font-medium">
                {toDateString(timestamp)}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-600 font-normal">{description}</p>
        </div>
      </div>
    </>
  )
}
