import { MantineProvider } from '@mantine/core';
import { themeOverride } from '_styles/theme';
import { Provider } from 'react-redux';
import { store } from '_store/store';

import Layout from '_components/layout/Layout';
import HomeView from '_views/HomeView';

function App() {

  return (
    <div className="App">
      <MantineProvider withGlobalStyles withNormalizeCSS theme={themeOverride} >
        <Provider store={store}>
          <Layout>
            <HomeView />
          </Layout>
        </Provider>
      </MantineProvider>
    </div>
  )
}

export default App
