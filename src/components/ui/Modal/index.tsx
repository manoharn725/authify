import { createPortal } from "react-dom";
import { FunctionComponent, useRef, MouseEvent } from "react";

interface IModal {
  onClose: () => void;
}
const Modal: FunctionComponent<IModal> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <div ref={modalRef} onClick={handleBackdropClick} className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/60" >
     <div className="relative bg-amber-400 dark:bg-gray-900 text-black dark:text-white w-11/12 min-h-80 max-h-4/5 sm:max-w-2xl p-3 rounded-xl shadow-lg my-move-top overflow-x-hidden scrollbar-none">
       <div className="text-black dark:text-white absolute right-4 bg-amber-200 dark:bg-gray-600 px-2.5 py-1 rounded-xl cursor-pointer " onClick={onClose}>X</div>
       <div className="flex flex-row pt-8.5 sm:p-8.5 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laudantium repellendus ipsum repudiandae illum nobis tempora, similique ipsam amet nihil culpa quos voluptatum commodi blanditiis corporis distinctio, sit iure libero nemo aliquid quibusdam sed. Iusto laudantium amet quas consequatur dolore alias ipsa sequi reprehenderit? Quibusdam enim nulla minus velit eos quos mollitia voluptatum, voluptas numquam tempore quisquam voluptate suscipit esse odit voluptatibus veniam ea tempora libero magnam, accusantium qui et in nisi! Impedit aspernatur quasi possimus cumque tenetur nihil. Exercitationem expedita deleniti quas culpa enim omnis aperiam id doloribus at, itaque esse dicta sapiente temporibus, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque quas excepturi quae doloribus nesciunt. Molestiae nobis eaque doloribus. Dignissimos, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque commodi enim consectetur error voluptatem deserunt eius incidunt quod repellendus quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perferendis nihil amet sed,
       </div>
     </div>
    </div>,
    modalRoot
  );
};
export default Modal;
