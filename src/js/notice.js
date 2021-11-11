import { info, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function noticeInfo() {
  info({
    text: 'Please enter your search.',
    shadow: true,
    width: '450px',
    minHeight: '20px',
    delay: 3000,
  });
}

function noticeError() {
  error({
    text: 'Please enter CORRECT search.',
    shadow: true,
    width: '450px',
    minHeight: '20px',
    delay: 4000,
  });
}

export { noticeInfo, noticeError };
