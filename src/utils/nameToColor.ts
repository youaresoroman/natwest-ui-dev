export const nameToColor = (name: string): string => {
    const colorMap: { [x: string]: string } = {
        red: '#f44336',
        green: '#4caf50',
        blue: '#2196f3',
        yellow: '#ffeb3b',
        black: '#000000',
        white: '#ffffff',
        orange: '#ff9800',
        purple: '#9c27b0',
        pink: '#e91e63',
    };

    return colorMap[name.toLowerCase()] || '#000000'
}