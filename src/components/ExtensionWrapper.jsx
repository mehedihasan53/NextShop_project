"use client";

import { useExtensionCleanup } from '../hooks/useExtensionCleanup';

export default function ExtensionWrapper({ children, className = "" }) {
    useExtensionCleanup();

    return (
        <div
            className={className}
            suppressHydrationWarning={true}
            data-extension-protected="true"
        >
            {children}
        </div>
    );
}