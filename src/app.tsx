import React from 'react';
import styles from './app.module.scss';
import { Announcement } from 'kagr-ui';

function App() {
  return (
    <div className={styles.app}>
      <div>
        content test test test test test
          <Announcement
              type="secondary"
              hasExitIcon={true}
          />
      </div>
    </div>
  );
}

export default App;
