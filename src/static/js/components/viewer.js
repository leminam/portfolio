export default class Viewer {
  constructor(elem, params = {}) {
    this.elem = elem;
    this.params = params;
    this.currentType = null;

    this.construct();
  }

  construct() {
    this.elsType = this.elem.getElementsByClassName('JS-View-Type');
    this.elsImage = this.elem.getElementsByClassName('JS-View-Image');

    this.init();
    this.ready();
  }

  init() {
    var _this = this;

    let imagesArr = this.elsImage;
    Array.prototype.forEach.call(imagesArr, function(imageEl) {
      imageEl.addEventListener('click', _this.handleClickImage.bind(_this, imageEl));
    });

    let typesArr = this.elsType;
    Array.prototype.forEach.call(typesArr, function(typeEl) {
      typeEl.addEventListener('click', _this.handleClickType.bind(_this, typeEl));
    });
  }

  ready() {
    this.elem.classList.add('JS-Viewer-Ready');
  }

  setViewType(type) {
    this.currentType = type;
  }

  handleClickType(typeEl) {
    let clickType = this.elsType;
    this.setViewType(clickType);
    console.log('clickType', clickType);
  }

  handleClickImage() {
    console.log('handle click image')
  }
}
