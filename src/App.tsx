import React from 'react';
import { Router as BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { create } from 'jss';
import rtl from 'jss-rtl';
import jssPreset from "@mui/styles/jssPreset"
import StylesProvider from "@mui/styles/StylesProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { ThemeProvider } from './contexts/ThemeContext';
import GlobalStyles from 'src/components/GlobalStyles';
import routes, { renderRoutes } from 'src/routes';


import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

import useSWR, { SWRConfig } from 'swr'





export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    1, // Mainet
    3, // Ropsten
    4, // Rinkeby
    5, // Goerli
    42, // Kovan
  ],
})

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}


export const Wallet = () => {
  const { chainId, account, activate, active } = useWeb3React<Web3Provider>()

  const onClick = () => {
    activate(injectedConnector)
  }

  return (
    <div>
      <div>ChainId: {chainId}</div>
      <div>Account: {account}</div>
      {active ? (
        <div>✅ </div>
      ) : (
        <button type="button" onClick={onClick}>
          Connect
        </button>
      )}
    </div>
  )
}




const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const history = createBrowserHistory();

function App() {
  return (
    <ThemeProvider>
      <StylesProvider jss={jss}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <SWRConfig
            value={{
              refreshInterval: 3000,
              fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
            }}
          >
            <BrowserRouter history={history}>
              <GlobalStyles />
              <Web3ReactProvider getLibrary={getLibrary}>
                <Wallet />
              </Web3ReactProvider>
              {/* {renderRoutes(routes)} */}
              {/* <TestComponents /> */}
            </BrowserRouter>
          </SWRConfig>
        </LocalizationProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
