import { useState } from 'react';

export const useCopyToClipboard = (resetAfterMs = 2500) => {
  const [copied, setCopied] = useState(false);

  async function copy(text) {
    try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), resetAfterMs);
    }catch (error) {
        console.error('Could not copy to clipboard', error);
    }
  }
  return {copied, copy};
}