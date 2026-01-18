"use client";

import { useEffect } from 'react';

const EXTENSION_ATTRIBUTES = [
    'bis_skin_checked',
    'data-new-gr-c-s-check-loaded',
    'data-gr-ext-installed',
    'data-lastpass-icon-added',
    'data-1p-ignore',
    'data-dashlane-rid',
    'data-bitwarden-watching',
    'data-avast-processed',
    'data-kaspersky-processed',
    'data-norton-processed',
    'data-mcafee-processed',
    'data-bitdefender-processed',
    'data-extension-added'
];

/**
 * Custom hook to clean up browser extension attributes that cause hydration mismatches
 * Prevents extensions like Avast, Grammarly, LastPass, etc. from interfering with React hydration
 */
export function useExtensionCleanup() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const cleanupExtensionAttributes = () => {
            try {
                // Clean up all extension attributes from all elements
                EXTENSION_ATTRIBUTES.forEach(attr => {
                    const elements = document.querySelectorAll(`[${attr}]`);
                    elements.forEach(el => {
                        try {
                            el.removeAttribute(attr);
                        } catch (e) {
                            // Ignore errors when removing attributes
                        }
                    });
                });

                // Clean up extension-added elements
                const extensionElements = document.querySelectorAll('[data-extension-added="true"]');
                extensionElements.forEach(el => {
                    try {
                        el.remove();
                    } catch (e) {
                        // Ignore errors when removing elements
                    }
                });

                // Clean up extension-added styles
                const extensionStyles = document.querySelectorAll('style[data-extension="true"]');
                extensionStyles.forEach(style => {
                    try {
                        style.remove();
                    } catch (e) {
                        // Ignore errors when removing styles
                    }
                });

            } catch (error) {
                // Silently ignore cleanup errors
            }
        };

        // Initial cleanup after mount
        const initialCleanup = setTimeout(cleanupExtensionAttributes, 100);

        // Periodic cleanup every 2 seconds
        const interval = setInterval(cleanupExtensionAttributes, 2000);

        // Cleanup on DOM mutations
        let observer;
        try {
            observer = new MutationObserver(() => {
                cleanupExtensionAttributes();
            });

            observer.observe(document.body, {
                attributes: true,
                attributeFilter: EXTENSION_ATTRIBUTES,
                subtree: true,
                childList: true
            });
        } catch (e) {
            // Ignore observer errors
        }

        return () => {
            clearTimeout(initialCleanup);
            clearInterval(interval);
            if (observer) {
                try {
                    observer.disconnect();
                } catch (e) {
                    // Ignore disconnect errors
                }
            }
        };
    }, []);
}

/**
 * Utility function to detect which browser extensions are currently active
 * Useful for debugging hydration issues
 */
export function detectExtensions() {
    if (typeof window === 'undefined') return [];

    const detectedExtensions = [];

    try {
        // Check for common extension attributes
        if (document.querySelector('[bis_skin_checked]')) {
            detectedExtensions.push('Built-in Autofill');
        }
        if (document.querySelector('[data-new-gr-c-s-check-loaded]')) {
            detectedExtensions.push('Grammarly');
        }
        if (document.querySelector('[data-lastpass-icon-added]')) {
            detectedExtensions.push('LastPass');
        }
        if (document.querySelector('[data-1p-ignore]')) {
            detectedExtensions.push('1Password');
        }
        if (document.querySelector('[data-dashlane-rid]')) {
            detectedExtensions.push('Dashlane');
        }
        if (document.querySelector('[data-bitwarden-watching]')) {
            detectedExtensions.push('Bitwarden');
        }
    } catch (e) {
        // Ignore detection errors
    }

    return detectedExtensions;
}