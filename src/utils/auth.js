import Cookies from 'js-cookie';

/**
 * Authentication utility functions
 */

// Cookie name for authentication
export const AUTH_COOKIE_NAME = 'auth';

/**
 * Check if user is authenticated
 * @returns {boolean} - True if authenticated, false otherwise
 */
export const isAuthenticated = () => {
    return Cookies.get(AUTH_COOKIE_NAME) === 'true';
};

/**
 * Set authentication state
 * @param {boolean} authenticated - Authentication state
 */
export const setAuthState = (authenticated) => {
    if (authenticated) {
        Cookies.set(AUTH_COOKIE_NAME, 'true', { path: '/' });
    } else {
        Cookies.remove(AUTH_COOKIE_NAME, { path: '/' });
    }

    // Dispatch auth state change event
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('authStateChange', {
            detail: { isAuthenticated: authenticated }
        }));
    }
};

/**
 * Clear authentication state
 */
export const clearAuth = () => {
    setAuthState(false);
};

/**
 * Listen for auth state changes
 * @param {Function} callback - Callback function to execute on auth change
 * @returns {Function} - Cleanup function to remove listener
 */
export const onAuthStateChange = (callback) => {
    if (typeof window === 'undefined') return () => { };

    const handleAuthChange = (event) => {
        callback(event.detail.isAuthenticated);
    };

    window.addEventListener('authStateChange', handleAuthChange);

    // Return cleanup function
    return () => {
        window.removeEventListener('authStateChange', handleAuthChange);
    };
};