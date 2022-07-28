import {ThemeProvider} from 'styled-components';
import {BodyContainer} from './components/styles/Container.styled';
import content from './content.js';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './components/styles/Global';


const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff', 
    footer: '#003333',
    VeryPalCyan: 'hsl(193, 100%, 96%)',
    VeryDarkCyan: 'hsl(192, 100%, 9%)',
    GrayishBlue: 'hsl(208, 11%, 55%)',
    pink: 'hsl(322, 100%, 66%)',
  },

  mobile: '786px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

          <Header />

          <BodyContainer>
            {content.map((item) => {
                return <Card item={item}/>
              })
            }
          </BodyContainer>


          {/* Finish Responsive in the Footer! */}
          <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

