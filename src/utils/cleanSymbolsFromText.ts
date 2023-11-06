export const cleanSymbolsFromText = (str: string) => {
    const cleanedPlainText = str
        .replaceAll(/%/gi, 'Percent')
        .replaceAll(/@/gi, 'At')
        .replaceAll(/&/gi, 'And')
        .replaceAll(/\+/gi, 'Plus')
        .replaceAll(/=/gi, 'Equals')
        .replaceAll(/\*/gi, ' ')
        .replaceAll(/\$/gi, ' ')
        .replaceAll(/\(/gi, ' ')
        .replaceAll(/\)/gi, ' ')
        .replaceAll(/-/gi, ' ')
        .replaceAll(/#/gi, ' ')
        .replaceAll(/!/gi, ' ')
        .replaceAll(/\?/gi, ' ')
        .replaceAll(/,/gi, ' ')
        .replaceAll(/:/gi, ' ')
        .replaceAll(/;/gi, ' ')
        .replaceAll(/'/gi, ' ')
        .replaceAll(/\[/gi, ' ')
        .replaceAll(/\]/gi, ' ')
        .replaceAll(/\^/gi, ' ')
        .replaceAll(/_/gi, ' ')
        .replaceAll(/\|/gi, ' ')
        .replaceAll(/\{/gi, ' ')
        .replaceAll(/\}/gi, ' ')
        .replaceAll(/</gi, ' ')
        .replaceAll(/>/gi, ' ')
        .replaceAll(/~/gi, ' ');

    return cleanedPlainText;
};
