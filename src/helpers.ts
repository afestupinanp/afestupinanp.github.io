export default class Helpers {
    /**
     * This method generates a random string.
     * @returns 
     */
    public static randomString(): string {
        return Math.random().toString(36).slice(2);
    }

    /**
     * This method checks whether the user prefers dark theme or not.
     * @param toggle 
     */
    public static detectDarkThemePreferred(): boolean {
        const prefersDarkTheme: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const darkThemeEnabled: boolean = window.localStorage.getItem('dark-theme') == '1';
        return prefersDarkTheme || darkThemeEnabled;
    }

    /**
     * This method sets the dark theme globally using Bootstrap's method.
     * @param toggle 
     */
    public static setDarkTheme(toggle: boolean): void {
        document?.querySelector('html')?.setAttribute('data-bs-theme', toggle ? 'dark' : 'light');
        window.localStorage.setItem('dark-theme', toggle ? '1' : '0');
    }

    /**
     * This method sets the active URL in the navbar.
     */
    public static setActiveUrl(): void {
        const navbar: HTMLElement|null = document?.querySelector('nav');
        if (navbar) {
            navbar.querySelectorAll('a').forEach((element) => element.classList.remove('active'));
            const location: string = window.location.hash;
            navbar.querySelector(`a[href="${location}"]`)?.classList.add('active');
        }
    }
}