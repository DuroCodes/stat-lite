import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const playerAvatar = (username: string, size?: number) => `https://mc-heads.net/avatar/${username}/${size ?? 64}`;
