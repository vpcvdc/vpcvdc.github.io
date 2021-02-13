import { memo, useState } from 'react';
import { Transition } from '@headlessui/react';
import Portal from './Portal';

export default memo(function Img(props) {
  const [isOpen, setIsOpen] = useState(() => false);
  return (
    <>
      <img
        {...props}
        alt={props.alt}
        onClick={() => setIsOpen(true)}
      />
      <Transition show={isOpen}>
        <Portal>
          <div className="fixed z-10 inset-0 overflow-y-auto" onClick={() => setIsOpen(false)}>
            <div className="flex items-center justify-center min-h-screen text-center">
              <Transition.Child
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className="absolute inset-0 bg-white dark:bg-gray-900 opacity-75" />
              </Transition.Child>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <Transition.Child
                className="inline-block align-middle overflow-hidden shadow-xl transform transition-all"
                role="dialog"
                aria-modal="true"
                aria-label="image zoom"
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <img
                  className="max-w-screen max-h-screen object-contain mx-auto cursor-zoom-out"
                  src={props.src}
                  alt={props.alt}
                  width="460"
                  height="460"
                  decoding="async"
                  loading="lazy"
                />
              </Transition.Child>
            </div>
          </div>
        </Portal>
      </Transition>
    </>
  );
});
