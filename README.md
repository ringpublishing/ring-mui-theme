# Ring MUI Theme

## Package includes *Ring Publishing* theme for MUI components.
## Theme was created with assumption 1rem = 10px. Before using add below css to your project.
```css
html {
    font-size: 62.5%;
}
```

## Ring Mui Theme version 0.1.0 supports:
* "@mui/material": "^5.0.0"
* "@mui/x-data-grid": "7.14.0"
* "@mui/x-data-grid-pro": "7.14.0"
* "@mui/x-date-pickers": "7.14.0"
* "@mui/x-date-pickers-pro": "7.14.0"

## Installation

```shell
npm install @ring-internal/ring-mui-theme
```

## Minimal usage example
```jsx
import {ThemeConfig} from '@ring-internal/ring-mui-theme';
import {TablePagination} from '@mui/material';
function App() {
    return(
        <ThemeConfig mode={'light'}>
            <TablePagination
                count={2000}
                rowsPerPage={10}
                page={1}
                component="div"
                onPageChange={() => {
                }}
            />
        </ThemeConfig>
    )
}

```


## With language and custom locales
### Note: default language is 'enUS' and it works 'out of the box', if you want to support other locales follow example below.
### PL locales for mui core also are available, just set language to 'plPL'
```jsx
import {ThemeConfig} from '@ring-internal/ring-mui-theme';
import {TablePagination} from '@mui/material';
import { zhCN } from '@mui/material/locale';
import { plPL as xDataGridPl } from '@mui/x-data-grid/locales';

function App() {
    return(
        <ThemeConfig mode={'light'} language={'plPL'} externalLocales={[xDataGridPl, zhCN]}>
            <TablePagination
                count={2000}
                rowsPerPage={10}
                page={1}
                component="div"
                onPageChange={() => {
                }}
            />
        </ThemeConfig>
    )
}

```


## With custom components theme fragment
```jsx
import {ThemeConfig} from '@ring-internal/ring-mui-theme';
import {TablePagination} from '@mui/material';

function App() {
    
    const MuiDataGridPart = {
        components: {
            MuiDataGrid: {
                styleOverrides: {
                    root: {
                        backgroundColor: 'red',
                    },
                },
            },
        },
    };
    
    return(
        <ThemeConfig mode={'light'} externalComponentsTheme={MuiDataGridPart}>
            <TablePagination
                count={2000}
                rowsPerPage={10}
                page={1}
                component="div"
                onPageChange={() => {
                }}
            />
        </ThemeConfig>
    )
}
```