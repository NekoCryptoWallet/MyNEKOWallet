import { vi } from 'vitest';
import 'fake-indexeddb/auto';
vi.spyOn(console, 'warn').mockImplementation((message) => {
    if (message?.includes && message?.includes('[vue]')) return;
});

// We need to attach the component to a HTML,
// or .isVisible() function does not work
document.body.innerHTML = `
  <div>
      <div id="app"></div>
      <div id="analytics"></div>
      <div id="masternodeTab"></div>
  </div>
`;

// Mock indexDB
vi.stubGlobal('indexedDB', new IDBFactory());

// eslint-disable-next-line
process.env.TZ = 'UTC';
