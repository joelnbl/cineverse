import { useRef, useEffect, useCallback } from "react";

interface Options {
  hasMore: boolean;
  isLoading: boolean;
  onLoadMore: () => void;
}

export function useInfiniteScroll({ hasMore, isLoading, onLoadMore }: Options) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting && hasMore && !isLoading) {
        onLoadMore();
      }
    },
    [hasMore, isLoading, onLoadMore],
  );

  useEffect(() => {
    const element = observerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "300px",
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [handleObserver]);

  return observerRef;
}
