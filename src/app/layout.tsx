import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// Root layout
export default function RootLayout({ children }: Props) {
  return children;
}
