import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Banks from './components/Banks'
import Navbar from './components/Navbar'

const queryClient = new QueryClient()

const App = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <Navbar />
            <div className="container">
                <Banks />
                
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
