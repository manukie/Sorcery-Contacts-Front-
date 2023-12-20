import GlobalStyle from "./styles/GlobalStyles"
import { RoutesMain } from "./routes"
import { AuthProvider } from "./providers/AuthProviders"

function App() {

  return (
    <>
      <GlobalStyle />
        <AuthProvider>
            <RoutesMain />
        </AuthProvider>
    </>
  )
}

export default App