'use client'

import clsx from 'clsx'

export default function Sessions({
  selectedSession,
  setSelectedSession,
  sessionData,
}: any) {
  const handleSessionClick = (event: React.MouseEvent<HTMLElement>) => {
    const clickedSession = event.currentTarget.innerHTML
    setSelectedSession(clickedSession)
  }
  return (
    <div className="flex mb-2 flex-col md:flex-row gap-4 justify-center items-center">
      {sessionData.map((session: any) => (
        <button
          key={session.id}
          onClick={handleSessionClick}
          className={clsx(
            'btn',
            selectedSession === session.session ? 'btn-primary' : 'btn-outline'
          )}
        >
          {session.session}
        </button>
      ))}
    </div>
  )
}
