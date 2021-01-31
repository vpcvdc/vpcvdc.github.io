import { memo } from 'react';
import { LOCALES, useLocaleContext } from '../contexts/LocaleContext';
import Translate from '../icons/Translate';

export default memo(function SwitchLocale() {
  const { context: { locale }, switchLocale } = useLocaleContext();
  const handleChange = ({ target: { value } }) => {
    switchLocale(value);
  };
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2">
        <Translate className="h-5" />
      </div>
      <select
        value={LOCALES[locale].bcp47}
        onChange={handleChange}
        className="py-2 px-10 block w-full border-0 focus:ring-0 bg-transparent"
        aria-label="switch locale"
      >
        {Object.entries(LOCALES).map(([key, value]) => (
          <option key={key} value={value.bcp47}>
            {value.displayName}
          </option>
        ))}
      </select>
    </div>
  );
});
