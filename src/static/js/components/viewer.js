export default class Viewer {
  constructor(elem, params = {}) {
    this.elem = elem;
    this.params = params;
    this.currentDevice = null;
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
      desktop: {
        image: this.params.desktop.image,
        class: this.params.desktop.class,
      },      
      tablet: {
        image: this.params.tablet.image,
        class: this.params.tablet.class,
      },
      mobile: {
        image: this.params.mobile.image,
        class: this.params.mobile.class,
      },      
    }

    this.construct();
  }

  construct() {
    this.elsDevice = this.elem.getElementsByClassName('JS-View-Device');
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

    let devicesArr = this.elsDevice;
    Array.prototype.forEach.call(devicesArr, function(deviceEl) {
      deviceEl.addEventListener('click', _this.handleClickDevice.bind(_this, deviceEl));
    });
  }

  ready() {
    this.elem.classList.add('JS-Viewer-Ready');
  }

  setViewDevice(device) {
    this.currentDevice = device; //ToDo: rename to currentDevice
    this.elWrapper.src = this.devicesImages[device];

    // this.elWrapper.src = this.devices[device].image;
    // set current class
    // this.elWrapper.classList.add(this.devices[device].class);

    // set appropriate image
  }

  setViewImage(image) {
    this.currentImage = image;
    this.elCurrent.src = image;
  }

  handleClickDevice(deviceEl) {
    this.setViewDevice(deviceEl.dataset.device);
    console.log('clickDevice', deviceEl.dataset.device);
  }

  handleClickImage(imageEl) {
    this.setViewImage(imageEl.dataset.image);
    console.log('clickImage', imageEl.dataset.image);
  }
}
