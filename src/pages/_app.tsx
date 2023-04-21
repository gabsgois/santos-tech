import { AppProps } from 'next/app';
import { PulseLoader } from 'react-spinners';
import { Box } from '../components';
import { ProviderHubId } from '../providers';
import theme from '../theme';
import GlobalStyle from '../theme/global';

const App = ({ Component, pageProps }: AppProps) => {
  const Loader = (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
    >
      <PulseLoader color={theme.colors.golden} />
    </Box>
  );

  return (
    <ProviderHubId
      hubid=""
      googleAnalytics=""
      googleTagManager=""
      loading={Loader}
    >
      <>
        <GlobalStyle />

        <Component {...pageProps} />
      </>
    </ProviderHubId>
  );
};

export default App;
