import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import theme from './chakra/theme.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
      </QueryClientProvider>
  </StrictMode>,
)
