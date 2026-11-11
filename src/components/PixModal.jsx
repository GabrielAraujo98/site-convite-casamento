import { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { Button } from "./Button";
import { wedding } from "../data/wedding";
import { imageUrl } from "../utils/imageUrl";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

export function PixModal({ gift, onClose }) {
    const { t } = useTranslation();
    const dialogRef = useRef(null);
    const { copied, copy } = useCopyToClipboard();
    const { pixKey } = wedding.gifts;

    useEffect(() => {
        const dialog = dialogRef.current;
        if(gift && !dialog.open) dialog.showModal();
        if(!gift && dialog.open) dialog.close();
    }, [gift]);

    function handleBackdropClick(event) {
        const dialog = dialogRef.current;
        if (event.target === dialog) dialog.close();
    }

    return (
        <dialog
            ref={dialogRef}
            onClose={onClose}
            onClick={handleBackdropClick}
            className="m-auto w-[min(400px,calc(100%-32px))] rounded-card bg-linen p-0 backdrop:bg-ink/60"
        >
            {gift && (
                <div className="flex flex-col items-center gap-5 p-form text-center">
                    {/* Title: gift name and price */}
                    <header className="flex w-full items-start justify-between gap-4 text-left">
                        <div>
                            <h2 className="text-gift-title">{t(`gifts.items.${gift.id}.title`)}</h2>
                            <p className="font-utility text-lead font-bold text-olive">
                                {t('gifts.price', { price: gift.price })}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => dialogRef.current.close()}
                            aria-label={t('gifts.modal.close')}
                            className="cursor-pointer text-2xl"
                        >
                            ×
                        </button>
                    </header>

                    {/* QR code */}
                    <img
                        src={imageUrl(`pix/${gift.qrCode}`)}
                        alt={t('gifts.modal.qrAlt')}
                        className="w-52 bg-paper p-3"
                    />
                    <p className="text-gift-note">{t('gifts.modal.scanHint')}</p>

                    {/* PIX key + copy button */}
                    <div className="flex w-full flex-col gap-2 text-left">
                        <span className="font-utility text-label font-bold">{t('gifts.modal.keyLabel')}</span>
                        <code className="rounded-field border-[0.75px] border-olive bg-linen-deep px-3 py-2 break-all">
                            {pixKey}
                        </code>
                        <Button variant="olive" size="wide" onClick={() => copy(pixKey)}>
                            {copied ? t('gifts.modal.copiedKey') : t('gifts.modal.copyKey')}
                        </Button>
                    </div>
                </div>
            )}
        </dialog>
    );
}