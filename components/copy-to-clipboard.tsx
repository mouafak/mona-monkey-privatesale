'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, CopyCheck, CopyX } from 'lucide-react';

const CopyToClipboardButton = ({ textToCopy = '', className = '' }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const copyHandler = async () => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (error) {
        console.log(error);
        setIsFailed(true);
        setTimeout(() => setIsFailed(false), 2000);
      }
    }
  };
  return (
    <Button
      variant={'outline'}
      size={'icon'}
      className={`hover:bg-transparent hover:text-foreground ${className}`}
      onClick={() => copyHandler()}
    >
      {isCopied ? (
        <CopyCheck className="w-4 text-green-500 " />
      ) : isFailed ? (
        <CopyX className="w-4 text-red-500" />
      ) : (
        <Copy className="w-4" />
      )}
    </Button>
  );
};
export default CopyToClipboardButton;
