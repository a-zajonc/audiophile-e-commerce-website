import * as React from "react";

function useElementOnScreen(ref: React.RefObject<Element>, rootMargin = "0px") {
  const [isIntersecting, setIsIntersecting] = React.useState(true);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
}

export const AnimateIn: React.FC<
  React.PropsWithChildren<{
    from: React.CSSProperties;
    to: React.CSSProperties;
  }>
> = ({ from, to, children }: any) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles: React.CSSProperties = {
    transition: "600ms ease-in-out",
  };
  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
              ...defaultStyles,
              ...to,
            }
          : {
              ...defaultStyles,
              ...from,
            }
      }
    >
      {children}
    </div>
  );
};

export const FadeIn: React.FC<React.PropsWithChildren> = ({
  children,
}: any) => (
  <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {children}
  </AnimateIn>
);
