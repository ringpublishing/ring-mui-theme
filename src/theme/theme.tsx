import {
    CssBaseline,
    PaletteMode,
    Theme,
    ThemeProvider,
    createTheme,
    PaletteColor,
    PaletteOptions
} from '@mui/material';
import { palette } from './config/palette';
import { breakpoints } from './config/breakpoints';
import { shape } from './config/shape';
import { typography } from './config/typography';
import { spacing } from './config/spacing';
import React from 'react';
import { CommonLanguages } from '../helpers/commonTypes';
import { plPL as corePL, enUS as coreUS } from '@mui/material/locale';

declare module '@mui/material/styles' {
    interface Palette {
        components: PaletteComponents;
        contrast: PaletteColor;
        common: CommonColors;
    }

    interface CommonColors {
        grey: string;
    }

    interface PaletteOptions {
        components: PaletteComponents;
        common?: Partial<CommonColors>;
    }

    interface PaletteComponents {
        datagrid: PaletteComponentDataGrid;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any;
    }

    type PaletteComponentDataGrid = {
        border: string;
    };

    interface TypographyVariants {
        label: React.CSSProperties;
        headline1: React.CSSProperties;
        headline2: React.CSSProperties;
        headline3: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        label?: React.CSSProperties;
        headline1?: React.CSSProperties;
        headline2?: React.CSSProperties;
        headline3?: React.CSSProperties;
    }

    interface Theme {
        locale?: CommonLanguages;
    }
    interface ThemeOptions {
        locale?: CommonLanguages;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        label: true;
        headline1: true;
        headline2: true;
        headline3: true;
    }
}

declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
        borderless: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        contrast: true;
    }
}

declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        contrast: true;
    }
}

export const getTheme = (
    mode: PaletteMode | string,
    language: CommonLanguages = CommonLanguages.enUS,
    externalComponentsTheme = {},
    externalLocales: object[] = []
): Theme => {
    const coreLocale = (language === CommonLanguages.plPL) ? corePL : coreUS;

    return createTheme({
        locale: language,
        palette: {
            ...palette[mode as PaletteMode] as PaletteOptions
        },
        breakpoints: {
            keys: ['xs', 'sm', 'md', 'lg', 'xl'],
            values: breakpoints
        },
        spacing,
        shape,
        typography,
        components: {
            ...externalComponentsTheme,
            MuiAutocomplete: {
                styleOverrides: {
                    root: ({ ownerState, theme }) => {
                        return {
                            ...(ownerState.multiple && {
                                '.MuiAutocomplete-endAdornment': {
                                    'height': `calc(100% - ${theme.spacing(1)})`,
                                    'display': 'flex',
                                    'align-items': 'end'
                                }
                            }),
                            '.MuiAutocomplete-clearIndicator': {
                                visibility: 'visible'
                            },
                            '.MuiInputBase-root': {
                                borderColor: 'red!important'
                            }
                        };
                    }
                }
            },
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        fontSize: '10px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '14px'
                    }
                }
            },
            MuiPaper: {
                variants: [
                    {
                        props: { variant: 'borderless' },
                        style: {
                            '&.MuiPaper-borderless::before': {
                                height: 0
                            }
                        }
                    }
                ]
            },
            // Changes to the Accordion component to remove padding and margin and lower minHeight, so that the component can be used in a more compact way
            MuiAccordion: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        'backgroundColor': 'transparent',
                        'minHeight': theme.spacing(4),
                        'margin': 0,
                        '&.Mui-expanded': {
                            margin: 0,
                            minHeight: theme.spacing(4)
                        }
                    })
                }
            },
            MuiAccordionSummary: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        'padding': 0,
                        'minHeight': theme.spacing(4),
                        '&.Mui-expanded': {
                            padding: 0,
                            minHeight: theme.spacing(4)
                        }
                    }),
                    content: ({ theme }) => ({
                        'margin': theme.spacing(1, 0),
                        '&.Mui-expanded': {
                            margin: theme.spacing(1, 0)
                        }
                    })
                }
            },
            MuiAccordionDetails: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        'padding': theme.spacing(1, 0),
                        '&.Mui-expanded': {
                            padding: theme.spacing(1, 0)
                        }
                    })
                }
            },
            /**
                 * Set the default variant for all possible components 'standard'.
                 * Components `MuiInputAdornment` and `MuiInputLabel` are not changed because they break components using variants other than 'standard'
                 * they inherit the variant from the parent component.
                 */
            MuiAlert: {
                defaultProps: {
                    variant: 'standard'
                }
            },
            MuiTextField: {
                defaultProps: {
                    variant: 'standard'
                }
            },
            MuiNativeSelect: {
                defaultProps: {
                    variant: 'standard'
                }
            },
            MuiFormControl: {
                defaultProps: {
                    variant: 'standard'
                }
            },
            MuiSelect: {
                defaultProps: {
                    variant: 'standard'
                }
            },
            MuiBadge: {
                defaultProps: {
                    variant: 'standard'
                }
            },
            MuiSvgIcon: {
                styleOverrides: {
                    fontSizeLarge: {
                        fontSize: '3.25rem'
                    }
                }
            },
            MuiAppBar: {
                styleOverrides: {
                    colorPrimary: ({ theme }) => {
                        return ({
                            backgroundColor: theme.palette.background.default
                        });
                    }
                }
            }
        }

    },
        coreLocale,
        ...externalLocales
    );
};

interface ThemeConfigProps {
    mode: PaletteMode;
    children: React.ReactNode[] | React.ReactNode;
    language?: CommonLanguages;
    externalLocales?: object[];
    externalComponentsTheme?: object;
}

export const ThemeConfig = ({ mode, children, language, externalLocales, externalComponentsTheme }: ThemeConfigProps): React.ReactNode[] | React.ReactNode => {
    return (
        <ThemeProvider theme={getTheme(mode, language, externalComponentsTheme, externalLocales)}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export const basicGrey100 = '#D9D9D9';
export const basicGrey200 = '#7b7b7b';
