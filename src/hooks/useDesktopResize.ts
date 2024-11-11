import { useEffect, useState } from "react";

interface Size {
  width: number;
  height: number;
}

const useDesktopResize = (): Size => {
  const [desktopSize, setDesktopSize] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDesktopSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return desktopSize;
};

export default useDesktopResize;
