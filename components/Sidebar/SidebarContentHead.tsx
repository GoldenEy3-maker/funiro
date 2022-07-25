import { useSidebarContext } from '../../context/Sidebar.context'

import styles from '../../styles/modules/Sidebar/Sidebar.module.scss'

const {
  sidebarContentHead,
  sidebarContentHead__close,
  sidebarContentHead__notify,
} = styles

export const SidebarContentHead = () => {
  const { closeSidebarHandler } = useSidebarContext()

  return (
    <div className={sidebarContentHead}>
      <div className={sidebarContentHead__close}>
        <button type='button' onClick={closeSidebarHandler}>
          <svg
            width='25'
            height='25'
            viewBox='0 0 32 32'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title />
            <g id='cross'>
              <line
                fill='none'
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2px'
                x1='7'
                x2='25'
                y1='7'
                y2='25'
              />
              <line
                fill='none'
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2px'
                x1='7'
                x2='25'
                y1='25'
                y2='7'
              />
            </g>
          </svg>
        </button>
      </div>
      <div className={sidebarContentHead__notify}>
        <button type='button' data-counter='10'>
          <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
            <title />
            <g data-name='Layer 30' id='Layer_30'>
              <path
                fill='#101820'
                d='M27,27H5a1,1,0,0,1-.89-1.45,18.14,18.14,0,0,0,1.89-8V14a10,10,0,0,1,20,0v3.53a18.14,18.14,0,0,0,1.89,8A1,1,0,0,1,27,27ZM6.55,25h18.9A20.14,20.14,0,0,1,24,17.53V14A8,8,0,0,0,8,14v3.53A20.14,20.14,0,0,1,6.55,25Z'
              />
              <path
                fill='#101820'
                d='M16,31a5,5,0,0,1-5-5,1,1,0,0,1,2,0,3,3,0,0,0,.88,2.12,3.08,3.08,0,0,0,4.24,0,1,1,0,0,1,1.42,1.42A5,5,0,0,1,16,31Z'
              />
              <path
                fill='#101820'
                d='M16,6a1,1,0,0,1-1-1V2a1,1,0,0,1,2,0V5A1,1,0,0,1,16,6Z'
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  )
}
