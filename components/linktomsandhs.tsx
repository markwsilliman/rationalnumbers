'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const LinkToMSandHS = () => {
  const [targetMSId, setTargetMSId] = useState('')
  const [targetHSId, setTargetHSId] = useState('')
  const [isVisibleHowCan, setIsVisibleHowCan] = useState(false)

  const handleClick = () => {
    setIsVisibleHowCan((prev) => true)
  }

  useEffect(() => {
    // Find the first <h2> starting with "MIDDLE SCHOOL" and "HIGH SCHOOL"
    const headers = document.querySelectorAll('h2')
    let msId = ''
    let hsId = ''
    for (const header of headers) {
      if (!msId && header.textContent && header.textContent.trim().startsWith('MIDDLE SCHOOL')) {
        msId = header.id
      }
      if (!hsId && header.textContent && header.textContent.trim().startsWith('HIGH SCHOOL')) {
        hsId = header.id
      }
    }
    setTargetMSId(msId)
    setTargetHSId(hsId)
  }, [])

  return (
    targetMSId &&
    targetHSId && (
      <div className="my-4 rounded-lg border p-4">
        Teachers, let us help you show your students how math is applied in the video. To tailor the
        explanation to your students, please let us know whether you teach{' '}
        <Link href={`#${targetMSId}`}>middle school</Link> or{' '}
        <Link href={`#${targetHSId}`}>high school</Link>, and we’ll guide you to the appropriate
        section.
        {!isVisibleHowCan && (
          <button
            className="mt-3 rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
            onClick={handleClick}
          >
            How can I use these videos in my classroom?
          </button>
        )}
        {isVisibleHowCan && (
          <div className="my-4 rounded-lg border p-4">
            <p>
              The goal is to engage your students by showcasing real-world applications of math in
              just 5 minutes each week. Most videos are under 2 minutes, leaving time for a brief
              discussion or activity. Use the article provided below to spark ideas on how to
              connect the video to your current curriculum and inspire your students to see the
              value of math in everyday life.
            </p>
            <p>
              You don’t need to cover everything in a single session! Instead, focus on one topic
              that aligns with what you’re teaching. This approach allows you to dive deeper into a
              specific concept and make it relatable to your students.
            </p>
            <p>
              All the text on our website is free to reproduce, so feel free to adapt it to fit your
              teaching style. Additionally, the videos are available on YouTube, making them easy to
              access and share with your class!
            </p>
          </div>
        )}
      </div>
    )
  )
}

export default LinkToMSandHS
