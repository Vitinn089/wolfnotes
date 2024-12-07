import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from "./styles/theme"

import { AuthProvide } from './hooks/auth'
import {Routes} from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
	<ThemeProvider theme={theme}>
		<GlobalStyles />
			<AuthProvide>
				<Routes />
			</AuthProvide>
	</ThemeProvider>
  </StrictMode>,
)