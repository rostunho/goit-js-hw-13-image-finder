export default class LoadMoreBtn {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);

    hidden && this.hide();
  }

  getRefs(selector) {
    const refs = {
      button: document.querySelector(selector),
      label: this.refs.button.querySelector('.label'),
      spinner: this.refs.button.querySelector('.spinner'),
    };

    return refs;
  }

  enable() {
    this.refs.button.disabled = false;
    this.refs.label.textContent = 'LOAD MORE';
    this.refs.spinner.classList.add('is-hidden');
  }

  disable() {
    this.refs.button.disable = true;
    this.refs.label.textContent = 'loading';
    this.refs.spinner.classList.remove('.is-hidden');
  }

  show() {
    this.refs.button.classList.remove('is-hidden');
  }

  hide() {
    this.refs.button.classList.add('is-hidden');
  }
}
