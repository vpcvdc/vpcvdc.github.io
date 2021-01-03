import { memo } from 'react';
import { LOCALES, useLocaleContext } from '../contexts/LocaleContext';
import Translate from '../icons/Translate';
import Selector from '../icons/Selector';

export default memo(function SwitchLocale() {
  const { locale, switchLocale } = useLocaleContext();
  const handleChange = ({ target: { value } }) => {
    switchLocale(value);
  };
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2">
        <Translate className="h-5" />
      </div>
      <select
        value={locale}
        onChange={handleChange}
        className="block w-full py-2 px-10 bg-white border border-black border-opacity-25 dark:bg-gray-900 dark:border-white dark:border-opacity-25 rounded appearance-none focus:outline-none transition duration-150 ease-in-out"
        aria-label="switch locale"
      >
        {Object.entries(LOCALES).map(([key, value]) => (
          <option key={key} value={key}>
            {value.displayName}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <Selector className="h-5" />
      </div>
    </div>
  );
});
