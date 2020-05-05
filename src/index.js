class MinijQuery {
  constructor({ element }) {
    this.element = element
  }

  addClass(classes) {
    this.element.className.concat(` ${ a.classes }`);
  }

  attr(attrName) {
    return this.element[attrName];
  }

  children() {
    return this.element.children;
  }

  click(callback) {
    return this.element.onclick = callback;
  }

  empty(callback) {
    Array(this.element.children).map(value => {
      this.element.removeChild(value);
    }, this)
  }

  fadeToggle(duration_time_second) {
    let i = this.element.style.opacity;
    let j = this.element.style.transition;
    if (i === "" || i === 1) {
      j = `all ${ duration_time_second }s ease```;
      i = 0;
    } else {
      j = `all ${ duration_time_second }s ease`;
      i = 1;
    }
  }

  hasClass(className) {
    let i = this.element.className;
    let r = i.match(className);
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

export { MinijQuery };
