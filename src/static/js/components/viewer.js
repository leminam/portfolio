export default class Viewer {
  constructor(elem, params = {}) {
    this.elem = elem;
    this.params = params;
    this.currentType = null;
    this.currentImage = null;
    this.currentWrapperClass = null;

    // ToDo: temp will delete
    // как параметры в меню
    // <div class="JS-Menu header__menu" data-viewer-params="{'desktop': {'image': 'static/img/mac_1.png', 'class': 'portfolio__preview-size_mob'}}">
    this.devicesImages = {
      desktop: "static/img/mac_1.png",
      tablet: "static/img/ipad_1.png",
      mobile: "static/img/mob_1.png",
    }

    // will get from params
    this.devices = {
      tablet: {
        // image: this.params.tablet.image,
        // class: this.params.tablet.class,
      },
    }

    this.construct();
  }

  construct() {
    this.elsType = this.elem.getElementsByClassName('JS-View-Type');
    this.elsImage = this.elem.getElementsByClassName('JS-View-Image');

    this.elWrapper = this.elem.getElementsByClassName('JS-View-Wrapper')[0];
    this.elCurrent = this.elem.getElementsByClassName('JS-View-Current')[0];

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
    this.currentType = type; //ToDo: rename to currentDevice
    this.elWrapper.src = this.devicesImages[type];

    // this.elWrapper.src = this.devices[type].image;
    // set current class
    // this.elWrapper.classList.add(this.devices[type].class);

    // set appropriate image
  }

  setViewImage(image) {
    this.currentImage = image;
    this.elCurrent.src = image;
  }

  handleClickType(typeEl) {
    this.setViewType(typeEl.dataset.type);
    console.log('clickType', typeEl.dataset.type);
  }

  handleClickImage(imageEl) {
    this.setViewImage(imageEl.dataset.image);
    console.log('clickImage', imageEl.dataset.image);
  }
}
