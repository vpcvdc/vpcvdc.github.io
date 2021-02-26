import { memo } from "react";
import Logo from "../icons/Logo";

export default memo(function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Logo className="h-16 pointer-events-none" />
    </div>
  );
});
