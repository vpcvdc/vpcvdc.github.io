import { memo, Suspense, useState } from 'react';
import { Transition } from '@headlessui/react';
import Portal from './Portal';
import JSResource from '../JSResource'
import Logo from '../icons/Logo';
// import { checkWebpFeature } from '../utils';

const SuspenseImageGlimmer = memo(function SuspenseImageGlimmer() {
  return (
    <span className="flex items-center justify-center">
      <Logo className="inline-block h-16" />
    </span>
  );
});

export default memo(function SuspenseImage({ size, ...props }) {
  const [isOpen, setIsOpen] = useState(() => false);
  const { src } = props;
  if (src) {
    const resource = JSResource(src, () => {
      // const isWebp = await checkWebpFeature();
      // const imgSrc = `${src}/${size}.${isWebp ? 'webp' : 'jpeg'}`;
      return new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
          resolve(src);
        };
        img.onerror = () => {
          resolve(src);
        };
        img.src = src;
      });
    });
    resource.load();
    resource.read();
  }
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      {/* <picture className='flex h-full'>
        <source srcSet={`${props.src}/${size}.webp`} type="image/webp" /> */}
      <img
        {...props}
        src={props.src}
        alt={props.alt}
      />
      {/* </picture> */}
      <Transition show={isOpen}>
        <Portal>
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className='flex items-center justify-center min-h-screen text-center'>
              <Transition.Child
                enter="transition ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                  <div className="absolute inset-0 bg-white dark:bg-gray-900 opacity-75" />
                </div>
              </Transition.Child>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <Transition.Child
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className='inline-block align-middle overflow-hidden transform transition-all' role="dialog" aria-modal="true" aria-label="photo">
                  <Suspense fallback={<SuspenseImageGlimmer />}>
                    <SuspenseImage
                      className="max-w-screen max-h-screen object-contain mx-auto cursor-zoom-out"
                      src={props.src}
                      alt={props.alt}
                      // size="512"
                      width="460"
                      height="460"
                      decoding="async"
                      loading="lazy"
                    />
                  </Suspense>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Portal>
      </Transition>
    </div>
  );
});
