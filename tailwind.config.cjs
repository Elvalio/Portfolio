module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Palette « Dossier × Terminal ». #6D3BD9 n'est jamais utilisé en couleur de
      // texte sur fond sombre (contraste trop faible) : utiliser accent-text.
      colors: {
        primary: '#6D3BD9',
        'primary-dark': '#1D1C6F',
        ink: '#0E0D24',
        'ink-deep': '#0B0A1E',
        surface: '#15143A',
        line: '#3A3391',
        lilac: '#CDBBF8',
        'accent-text': '#A98BF0',
        muted: '#9C98C4',
        'muted-light': '#CFCFCF',
        'bg-light': '#F9F6FF',
        'muted-dark': '#58595B'
      },
      fontFamily: {
        display: ['Archivo', 'Arial Black', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif']
      },
      // Ombres portées dures, sans flou
      boxShadow: {
        'dur-3': '3px 3px 0 0 #6D3BD9',
        'dur-4': '4px 4px 0 0 #6D3BD9',
        'dur-6': '6px 6px 0 0 #1D1C6F',
        'dur-8': '8px 8px 0 0 #1D1C6F',
        'dur-10': '10px 10px 0 0 #6D3BD9',
        'dur-12': '12px 12px 0 0 #6D3BD9'
      }
    }
  },
  plugins: []
}
