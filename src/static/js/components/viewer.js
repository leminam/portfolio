export default class Viewer {
  constructor(elem, params = {}) {
    this.elem = elem;
    this.params = params;

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

    let imagesArr = Array.prototype.slice.call(this.elsImage);
    imagesArr.map(function(imageEl){
      imageEl.addEventListener('click', _this.handleClickImage.bind(_this));
    });

    //let typesArr = Array.prototype.slice.call(this.elsType);
    //typesArr.map(function(typeEl){
      //typeEl.addEventListener('click', _this.handleClickType.bind(_this));
    //});


Array.from(document.getElementsByClassName('JS-View-Type')).forEach(
  function(typeEl) {
    typeEl.addEventListener('click', _this.handleClickType.bind(_this));
    }
);


  }

  ready() {
    this.elem.classList.add('JS-Viewer-Ready');
  }

  handleClickType() {
    console.log('handle click type')
  }

  handleClickImage() {
    console.log('handle click image')
  }
}
