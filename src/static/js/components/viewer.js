export default class Viewer {
  constructor(elem, params = {}) {
    this.elem = elem;
    this.params = params;
    this.currentDevice = null;
    this.currentImage = null;
    this.currentWrapperClass = null;

    this.devicesImages = {
      desktop: "static/img/mac_1.png",
      tablet: "static/img/ipad_1.png",
      mobile: "static/img/mob_1.png",
    }

    this.devicesRootElClasses = {
      desktop: "portfolio__item_desktop",
      tablet: "portfolio__item_tablet",
      mobile: "portfolio__item_mobile",
    }

    this.allTypes = [];
    for (const type in this.devicesRootElClasses) {
      this.allTypes.push(this.devicesRootElClasses[type])
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

  clearRootClassNameFromTypes() {
    const newList = []
    this.elem.classList.forEach(classItem => {
      if (!this.allTypes.includes(classItem)) {
        newList.push(classItem)
      }
    })

    this.elem.classList = ''
    newList.forEach(item => { this.elem.classList.add(item) })
  }

  setViewDevice(device) {
    this.currentDevice = device;
    this.elWrapper.src = this.devicesImages[device];

    this.clearRootClassNameFromTypes()
    const className = this.devicesRootElClasses[device];
    this.elem.classList.add(className);

    this.setViewImage(this.getFirstImageByDevice(device))
  }

  getFirstImageByDevice(device) {
    let firstImg;
    Array.prototype.map.call(this.elsImage, el => {
      if (device === el.dataset.device && !firstImg) {
        firstImg = el.src
      }
    })
    return firstImg
  }

  setViewImage(image) {
    this.currentImage = image;
    this.elCurrent.src = image;
  }

  handleClickDevice(deviceEl) {
    this.setViewDevice(deviceEl.dataset.type);
  }

  handleClickImage(imageEl) {
    this.setViewImage(imageEl.src);
    this.removeActiveImageClass();
    this.addActiveImageClass();
  }

  removeActiveImageClass() {
    Array.prototype.map.call(this.elsImage, el => {
      el.classList.remove('portfolio__devices-screenshot_active')
    })
  }
  
  addActiveImageClass(element){
    element.classList.add('portfolio__devices-screenshot_active')
  }
}
