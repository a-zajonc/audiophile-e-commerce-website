import React, { createContext, ReactNode, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const MediaContext = createContext<{
  isTablet: boolean;
  isMobile: boolean;
  isDesktop: boolean;
} | null>(null);

type MediaProviderProps = {
  children: ReactNode;
};

export const MediaProvider: React.FC<MediaProviderProps> = ({ children }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1050px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 701px) and (max-width: 1050px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <MediaContext.Provider value={{ isTablet, isMobile, isDesktop }}>
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  const context = useContext(MediaContext);
  if (context === null) {
    throw new Error("useMedia must be used within a MediaProvider");
  }
  return context;
};
