import { useEffect, useState } from 'react'

export default function TypingText({ words, speed = 80, pause = 1700 }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]

    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timeout)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
      return undefined
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timeout)
  }, [deleting, pause, speed, subIndex, wordIndex, words])

  return (
    <span>
      {words[wordIndex].slice(0, subIndex)}
      <span className="typing-caret" aria-hidden="true">|</span>
    </span>
  )
}
