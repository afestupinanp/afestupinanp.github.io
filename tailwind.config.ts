import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
            },
        },
    },
};
