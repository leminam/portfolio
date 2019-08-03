export default class Viewer {
  constructor(elem, params = {}) {
    this.elem = elem;
    this.params = params;

    this.cssElemType = this.params.cssElemType || '';
    this.cssElemImage = this.params.cssElemImage || '';

    this.construct();
  }

  construct() {
    this.elType = this.elem.getElementsByClassName('JS-View-Type')[0];
    this.elImage = this.elem.getElementsByClassName('JS-View-Image')[0];

    this.init();
    this.ready();
  }

  init() {
    var _this = this;
    this.elType.addEventListener('click', this.types.bind(this));
    this.elImage.addEventListener('click', this.images.bind(this));
  }

  ready() {
    this.elem.classList.add('JS-Viewer-Ready');
  }

  types() {
    this.elem.classList.add(this.cssElemType);
  }

  images() {
    this.elem.classList.add(this.cssElemImage);
  }
}
