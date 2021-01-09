import { memo, useEffect } from 'react';
import fbt from 'fbt';
import { useLocaleContext } from '../contexts/LocaleContext';
import Img from './Img';
import Link from './Link';

export default memo(function Section() {
  useLocaleContext();
  useEffect(() => {
    const jsonld = document.createElement('script');
    jsonld.setAttribute('type', 'application/ld+json');
    jsonld.textContent = JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Person",
      "name": "Perakash Chakravarthy Velusamy",
      "jobTitle": "Software Engineer",
      "email": "vpcvdc@hotmail.com",
      "telephone": "+91 94434 02687",
      "url": `${process.env.REACT_APP_URL}/`,
      "image": "https://github.com/vpcvdc.png"
    });
    document.head.appendChild(jsonld);
    return () => document.head.removeChild(jsonld);
  }, []);
  return (
    <section className='p-4 flex-grow flex items-center justify-center'>
      <figure className="w-full mx-auto max-w-xl sm:flex bg-gray-50 dark:bg-gray-800 rounded-xl p-8 sm:p-0 overflow-hidden">
        <div className="flex-none w-32 h-32 sm:w-48 sm:h-auto rounded-full sm:rounded-none mx-auto relative bg-gray-400 dark:bg-gray-600 overflow-hidden">
          <Img
            className="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
            src="//github.com/vpcvdc.png"
            width="460"
            height="460"
            alt="VPC"
            decoding="async"
            loading="lazy"
          />
        </div>
        <div className="flex-auto pt-6 sm:p-8 text-center sm:text-left space-y-6">
          <blockquote>
            <p className="text-lg font-semibold">
              “<fbt desc="into">I am doing Sport activity and Software programming.</fbt>”
            </p>
          </blockquote>
          <figcaption className="font-medium space-y-2">
            <h1 className="text-blue-600 dark:text-blue-300">
              <fbt desc="name">Perakash Chakravarthy Velusamy</fbt>
            </h1>
            <div className="text-gray-600 dark:text-gray-300 space-y-2">
              {/* <p>
                <Link
                  href="//allyfile.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="AllyFile - Transfer files with unlimited size"
                >
                  AllyFile.com
                    <ExternalLink className="ml-1 h-4 pointer-events-none" />
                </Link>
                <span className='inline-flex items-center justify-center flex-wrap space-x-2'>
                  <Link
                    href="//allyweds.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="AllyWeds - Find your heart"
                  >
                    AllyWeds.com
                    <ExternalLink className="ml-1 h-4 pointer-events-none" />
                  </Link>
                </span>
              </p> */}
              <p>
                <Link href="mailto:vpcvdc@hotmail.com">
                  vpcvdc@hotmail.com
                </Link>
              </p>
              <p>
                <Link href="tel:+919443402687">
                  +91 94434 02687
                </Link>
              </p>
            </div>
          </figcaption>
        </div>
      </figure>
    </section>
  );
});
