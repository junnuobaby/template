import appInit from 'src/app';

appInit();

if (module.hot) {
  module.hot.accept('./app.js', () => {
    appInit();
  });
}
