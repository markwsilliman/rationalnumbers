'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const LinkToMSandHS = () => {
  const [targetMSId, setTargetMSId] = useState('')
  const [targetHSId, setTargetHSId] = useState('')

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
      </div>
    )
  )
}

export default LinkToMSandHS
