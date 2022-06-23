import { RefObject, useEffect, useRef } from "react";

export function useClickOutside(
  ref: RefObject<HTMLElement>,
  callback: () => void
) {
  const isTouch = useRef(false);

  useEffect(() => {
    document.addEventListener("touchend", handler, true);
    document.addEventListener("click", handler, true);
    document.addEventListener("keydown", handlerEscape, true);

    return () => {
      document.removeEventListener("touchend", handler, true);
      document.removeEventListener("click", handler, true);
      document.removeEventListener("keydown", handlerEscape, true);
    };
  });

  function handlerEscape(key: KeyboardEvent) {
    if (key.key === "Escape") {
      callback();
    }
  }

  function handler(e: MouseEvent | TouchEvent) {
    if (e.type === "touchend") {
      isTouch.current = true;
    }
    if (e.type === "click" && isTouch.current) {
      return;
    }
    const el = ref.current;
    if (el && e.target && !el.contains(e.target as Node)) {
      callback();
    }
  }
}
