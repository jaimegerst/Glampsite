import React, {useState} from 'react';
import * as Font from 'expo-font';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
    'Chilanka-Regular': require('./assets/fonts/Chilanka-Regular.ttf')
  });

const store = ConfigureStore();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
        <Provider store={store}>
          <Main />
        </Provider>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
      />
    )
  }
}