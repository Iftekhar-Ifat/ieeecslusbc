'use client'

import clsx from 'clsx'

export default function MemberCategory({
  memberCategory,
  setMemberCategory,
}: any) {
  const handleCategoryClick = (event: React.MouseEvent<HTMLElement>) => {
    const clickedCategory = event.currentTarget.innerHTML
    setMemberCategory(clickedCategory.toLowerCase())
  }
  return (
    <div className="mx-6 lg:mx-52">
      <div role="tablist" className="tabs tabs-boxed p-2">
        <button
          onClick={handleCategoryClick}
          role="tab"
          className={clsx(
            'tab',
            memberCategory === 'advisors' ? 'tab-active' : ''
          )}
        >
          Advisors
        </button>
        <button
          onClick={handleCategoryClick}
          role="tab"
          className={clsx(
            'tab',
            memberCategory === 'ex-com' ? 'tab-active' : ''
          )}
        >
          Ex-com
        </button>
        <button
          onClick={handleCategoryClick}
          role="tab"
          className={clsx(
            'tab',
            memberCategory === 'executives' ? 'tab-active' : ''
          )}
        >
          Executives
        </button>
        <button
          onClick={handleCategoryClick}
          role="tab"
          className={clsx(
            'tab',
            memberCategory === 'volunteers' ? 'tab-active' : ''
          )}
        >
          Volunteers
        </button>
      </div>
    </div>
  )
}
