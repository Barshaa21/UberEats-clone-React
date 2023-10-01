interface ModalProps {
  closeModal: () => void;
  item: string;
}

export default function Modal({ closeModal, item }: ModalProps){
  return (
    <div className='fixed inset-0 bg-black backdrop-blur-sm bg-opacity-40 flex justify-center align-middle p-[20rem] shadow-md '>
      <div className='bg-gradient-to-tl from-stone-100  to-yellow-300 text-black h-[10rem] w-[30rem] border border-black rounded-lg flex flex-col align-middle justify-center'>
        <h2 className='text-4xl text-center'>You clicked to {item}</h2>
        <button
          onClick={closeModal}
          className='ring-1 ring-gray-900/5  bg-red-200 text-lg font-bold border rounded border-black h-10 w-[5rem] m-auto hover:bg-red-400'
        >
          Close
        </button>
      </div>
    </div>
  );
}
