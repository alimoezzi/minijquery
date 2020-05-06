class MinijQuery {
  constructor(element) {
    this.element = element;
  }

  addClass(classes) {
    this.element.className.concat(` ${classes}`);
  }

  attr(attrName) {
    return this.element[attrName];
  }

  children() {
    return this.element.children;
  }

  click(callback) {
    this.element.onclick = callback;
  }

  empty() {
    Array(this.element.children).map(value => (
      this.element.removeChild(value)), this);
  }

  fadeToggle(durationTimeSecond) {
    let i = this.element.style.opacity;
    if (i === '' || i === 1) {
      this.element.style.transition = `all ${durationTimeSecond}s ease```;
      i = 0;
    } else {
      this.element.style.transition = `all ${durationTimeSecond}s ease`;
      i = 1;
    }
  }

  hasClass(className) {
    const i = this.element.className;
    const r = i.match(className);
    return r !== null;
  }

  hover(callback) {
    this.element.onmouseenter = callback;
    this.element.onmouseleave = callback;
  }

  removeAttr(attrName) {
    this.element.removeAttribute(attrName);
  }

  toggleClass(className) {
    this.element.classList.toggle(className);
  }
}

export default MinijQuery;
