import { memo } from "react";

export default memo(function ErrorUI({ error, retry = () => {} }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
      <p>{error?.message ?? "Failed to load"}</p>
      <button onClick={retry} className="hover:underline focus:underline">
        Retry
      </button>
    </div>
  );
});
