import { memo } from 'react';
import Github from '../icons/Github';
import Youtube from '../icons/Youtube';
import SwitchTheme from './SwitchTheme';
import SwitchLocale from './SwitchLocale';

export default memo(function Header() {
  return (
    <header className='p-4 flex items-center justify-end'>
      <nav className='space-x-4 inline-flex items-center'>
        <SwitchLocale />
        <a
          href='//github.com/vpcvdc'
          target="_blank"
          rel="noopener noreferrer"
          title="vpcvdc - github"
        >
          <Github className='h-6 pointer-events-none' />
        </a>
        <a
          href='//www.youtube.com/channel/UCV1w-mrd6AeCrTppIkUVglQ'
          target="_blank"
          rel="noopener noreferrer"
          title="vpcvdc - youtube"
        >
          <Youtube className='h-6 pointer-events-none' />
        </a>
        <SwitchTheme />
      </nav>
    </header>
  );
});
