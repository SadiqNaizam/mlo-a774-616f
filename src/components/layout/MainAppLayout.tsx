import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout.
   * This is a mandatory prop.
   */
  children: React.ReactNode;

  /**
   * Optional additional CSS classes to apply to the layout container.
   */
  className?: string;
}

/**
 * A full-page layout component that centers its content both vertically and horizontally.
 * It's designed to be a top-level container for pages that need a simple, focused presentation,
 * such as a login, signup, or error page.
 * The background color is inherited from the `body` styles defined in `index.css`.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex h-screen w-full flex-col items-center justify-center',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
