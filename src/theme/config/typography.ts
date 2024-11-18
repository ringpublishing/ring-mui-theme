/*
* Contents of this configuration have been generated with [Mui Figma Plugin](https://stash.grupa.onet/projects/RDS/repos/mui-figma-plugin/browse)
* Do not modify these values directly.
*/
import { TypographyOptions } from '@mui/material/styles/createTypography';

const HTML_FONT_SIZE = 16;

type ExtendedTypographyOptions = TypographyOptions
    & {pxToRem: (size: number) => string;};

export const typography: ExtendedTypographyOptions = {
    htmlFontSize: HTML_FONT_SIZE,
    h1: {
        fontSize: '96px',
        fontFamily: 'Neue Haas Grotesk Text Pro, sans-serif',
        lineHeight: '112px',
        fontWeight: 400,
        fontStyle: 'normal'
    },
    h2: {
        fontSize: '60px',
        fontFamily: 'Neue Haas Grotesk Text Pro, sans-serif',
        letterSpacing: '-0.5px',
        lineHeight: '72px',
        fontWeight: 400,
        fontStyle: 'normal'
    },
    h3: {
        fontSize: '48px',
        fontFamily: 'Neue Haas Grotesk Text Pro, sans-serif',
        lineHeight: '56px'
    },
    h4: {
        fontSize: '34px',
        fontFamily: 'Neue Haas Grotesk Text Pro, sans-serif',
        lineHeight: '42px'
    },
    h5: {
        fontSize: '22px',
        fontFamily: 'Neue Haas Grotesk Text Pro, sans-serif',
        lineHeight: '32px'
    },
    h6: {
        fontSize: '18px',
        fontFamily: 'Neue Haas Grotesk Text Pro, sans-serif',
        lineHeight: '24px',
        fontWeight: 600,
        fontStyle: 'normal'
    },
    body1: {
        fontSize: '14px',
        fontFamily: 'Neue Haas Grotesk Text Pro, sans-serif',
        letterSpacing: '0.15px',
        lineHeight: '24px',
        fontWeight: 400,
        fontStyle: 'normal'
    },
    body2: {
        fontSize: '13px',
        fontFamily: 'Neue Haas Grotesk Text Pro, sans-serif',
        lineHeight: '20px',
        fontWeight: 400,
        fontStyle: 'normal'
    },
    subtitle1: {
        fontSize: '16px',
        fontFamily: 'Neue Haas Grotesk Text Pro, sans-serif',
        letterSpacing: '0.15px',
        lineHeight: '28px',
        fontWeight: 400,
        fontStyle: 'normal'
    },
    subtitle2: {
        fontSize: '14px',
        fontFamily: 'Neue Haas Grotesk Text Pro, sans-serif',
        lineHeight: '22px',
        fontWeight: 600,
        fontStyle: 'normal'
    },
    overline: {
        fontSize: '12px',
        fontFamily: 'Neue Haas Grotesk Text Pro, sans-serif',
        letterSpacing: '1px',
        lineHeight: '36px',
        textTransform: 'uppercase',
        fontWeight: 400,
        fontStyle: 'normal'
    },
    caption: {
        fontSize: '12px',
        fontFamily: 'Neue Haas Grotesk Text Pro, sans-serif',
        lineHeight: '20px',
        fontWeight: 400,
        fontStyle: 'normal'
    },
    label: {
        fontSize: '12px',
        fontFamily: 'Neue Haas Grotesk Text Pro, sans-serif',
        lineHeight: '20px',
        textTransform: 'uppercase',
        fontWeight: 400,
        fontStyle: 'normal'
    },
    headline1: {
        fontSize: '16px',
        fontFamily: 'Neue Haas Grotesk Text Pro, sans-serif',
        lineHeight: '28px',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontStyle: 'normal'
    },
    headline2: {
        fontSize: '14px',
        fontFamily: 'Neue Haas Grotesk Text Pro, sans-serif',
        lineHeight: '24px',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontStyle: 'normal'
    },
    headline3: {
        fontSize: '12px',
        fontFamily: 'Neue Haas Grotesk Text Pro, sans-serif',
        lineHeight: '22px',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontStyle: 'normal'
    },
    pxToRem(size: number): string {
        return `${(size / HTML_FONT_SIZE) * 1.5}rem`;
    }
};
