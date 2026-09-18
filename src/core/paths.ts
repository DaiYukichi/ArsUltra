/**
 * @file paths.ts
 * @description This site is deployed to GitHub Pages under /ArsUltra/ (see `base`
 * in vite.config.ts), not at the domain root. These helpers keep every generated
 * link and asset URL consistent with that base in both dev and production.
 */

export const BASE_URL = import.meta.env.BASE_URL;

/**
 * Prefixes a root-relative path (e.g. "/logo.png") with the deployment base.
 */
export function withBase(path: string): string {
    if (/^https?:\/\//.test(path)) return path;
    return BASE_URL + path.replace(/^\//, '');
}

/**
 * Returns the current URL pathname relative to the deployment base,
 * e.g. "/es/company/" instead of "/ArsUltra/es/company/".
 */
export function getRelativePath(): string {
    const path = window.location.pathname;
    return path.startsWith(BASE_URL) ? '/' + path.slice(BASE_URL.length) : path;
}
