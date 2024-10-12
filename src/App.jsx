// App.js. ปรับ App.js: ต้องการให้ใช้ store ที่สร้างขึ้นใน Redux
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppRouter from './AppRouter';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
