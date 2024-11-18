import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  youtubeVideoId: string
  youtubeStartTime: number
  youtubeEndTime: number
}

const YoutubeEmbed = ({ youtubeVideoId, youtubeStartTime, youtubeEndTime }: Props) => {
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
    return `${minutes}min ${remainingSeconds}sec`
  }

  return (
    <>
      <iframe
        width="560"
        height="315"
        src={youtubeEmbedLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      {youtubeEndTime && youtubeEndTime && (
        <div>
          Video length {convertSecondsToMinutesAndSeconds(youtubeEndTime - youtubeStartTime)}{' '}
          (Cropped from {convertSecondsToMinutesAndSeconds(youtubeStartTime)} to{' '}
          {convertSecondsToMinutesAndSeconds(youtubeEndTime)})
        </div>
      )}
    </>
  )
}

export default YoutubeEmbed
