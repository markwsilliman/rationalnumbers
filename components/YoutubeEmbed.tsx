'use client'
import { useState } from 'react'
import Link from 'next/link'
import { slug } from 'github-slugger'
import { Button } from '@headlessui/react'
interface Props {
  youtubeVideoId: string
  youtubeStartTime: number
  youtubeEndTime: number
}

const YoutubeEmbed = ({ youtubeVideoId, youtubeStartTime, youtubeEndTime }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = (e) => {
    e.preventDefault() // Prevent default link navigation
    setIsVisible(true) // Toggle visibility
  }

  const youtubeEmbedLink =
    'https://www.youtube.com/embed/' +
    youtubeVideoId +
    '?start=' +
    youtubeStartTime +
    '&end=' +
    youtubeEndTime

  function convertSecondsToMinutesAndSeconds(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    if (minutes === 0) return `${remainingSeconds} seconds`
    if (minutes === 1) return `${minutes} minute and ${remainingSeconds} seconds`
    return `${minutes} minutes and ${remainingSeconds} seconds`
  }

  return (
    <>
      <div className="relative h-0 w-full pb-[56.25%]">
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          src={youtubeEmbedLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      {/* <iframe
        width="560"
        height="315"
        src={youtubeEmbedLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> */}
      {youtubeEndTime && youtubeEndTime && (
        <>
          <div className="flex items-center">
            The video is {convertSecondsToMinutesAndSeconds(youtubeEndTime - youtubeStartTime)}{' '}
            long.&nbsp;
            <Button onClick={handleClick} className={isVisible ? 'hidden' : 'block'}>
              {informationIconForYoutubeEmbed()}
            </Button>
          </div>
          <div className={isVisible ? 'block' : 'hidden'} id="youtubeCroppingDetailsHidden">
            {' '}
            The video was trimmed from {convertSecondsToMinutesAndSeconds(youtubeStartTime)} to{' '}
            {convertSecondsToMinutesAndSeconds(youtubeEndTime)}.
          </div>
        </>
      )}
    </>
  )
}

const informationIconForYoutubeEmbed = () => {
  return (
    <svg
      className="h-4 w-4 text-blue-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
      />
    </svg>
  )
}

export default YoutubeEmbed
