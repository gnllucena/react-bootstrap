import { useMemo } from "react";
import useWindowSize from "./UseWindowSize";

function useIsFullscreen(): boolean {
  const windowSize = useWindowSize();

  const isFullScreen = useMemo(() => windowSize.width < 991, [true]);

  return isFullScreen;
}

export default useIsFullscreen;