import './App.css';
import { createMuiTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Movie from './components/Details/Movie';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <div style={{width: '100%', maxWidth: '1000px', margin: 'auto', padding: '0 16px'}}>
          <Router>
            <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movie" component={Movie} />
            </Switch>
          </Router>
        </div>
    </ThemeProvider>
  );
}

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#DF2935',  //red
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#3772FF',
      contrastText: '#FFFFFF'
    },
    grey: {
      100: '#2D292D'
    },
    background: {
      default: '#161316'
    },
    text: {
      primary: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 12,
    button: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 'normal',
    },
  }
});

theme = responsiveFontSizes(theme);
// theme.typography.h1 = {

// }

export default App;
