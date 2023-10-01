import List from './List'
import Logos from './Logos'

export default function Downloads() {
  return (
    <div className='mt-[10rem] flex flex-col gap-[6rem] lg:flex-row lg:mt-11 p-[5rem] lg:justify-between border-t border-b'>
      <Logos/>
      <List/>
    </div>
  )
}
