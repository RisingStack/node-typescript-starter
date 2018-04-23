import App from './App';
import DBHandleDispatcher from './database/DBHandlerDispatcher';

// Configurations
const port = process.env.PORT || 3000;

// Initialization sequence
(async () => {
  try {
    // Start connection with database
    await DBHandleDispatcher.initialize();
    // Start main application
    await App.initialize();
  }
  catch (e) {
    const error: Error = e;
    console.log('[ERROR]', error.message);
    console.log('[FATAL] Terminating due to error in initialization sequence.');
    process.exit(1);
  }
})();
