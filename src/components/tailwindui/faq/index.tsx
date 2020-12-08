import { Transition } from '@headlessui/react';
import { useState } from 'react';

export const Faq = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-10 prose max-w-none">
      <div className="text-lg leading-7">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
          <span className="font-medium text-gray-900">
            What&apos;s the best thing about Switzerland?
          </span>
          <span className="ml-6 h-7 flex items-center">
            <svg
              className="-rotate-180 h-6 w-6 transform"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <div className="mt-2 pr-12">
          <p className="text-base leading-6 text-gray-500">
            I don&apos;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quas cupiditate laboriosam fugiat.
          </p>
        </div>
      </Transition>
    </div>
  );
};

export default Faq;
