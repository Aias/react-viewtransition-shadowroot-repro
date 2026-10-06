import { startTransition, useState, ViewTransition } from 'react';
import { createRoot } from 'react-dom/client';

const log = (message) => {
  document.getElementById('log').textContent += `${message}\n`;
};
window.addEventListener('error', (event) => log(`error: ${event.message}`));
window.addEventListener('unhandledrejection', (event) => log(`unhandled rejection: ${event.reason}`));

function App() {
  const [shown, setShown] = useState(false);
  return (
    <>
      <button onClick={() => startTransition(() => setShown((s) => !s))}>Toggle</button>
      <p>Box is {shown ? 'shown' : 'hidden'}</p>
      {shown && (
        <ViewTransition>
          <div style={{ width: 100, height: 100, background: 'tomato' }} />
        </ViewTransition>
      )}
    </>
  );
}

const host = document.getElementById('host');
const useShadowRoot = new URLSearchParams(location.search).get('container') !== 'element';
createRoot(useShadowRoot ? host.attachShadow({ mode: 'open' }) : host).render(<App />);
log(`container: ${useShadowRoot ? 'ShadowRoot' : 'Element'}`);
