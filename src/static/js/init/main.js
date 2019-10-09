import GLOBAL from '../global/global';
import Viewer from '../components/viewer';
import './data';

function initViewer() {
  if (typeof Viewer === 'undefined') {
    return false;
  }

  const common = {};

  Array.prototype.forEach.call(document.getElementsByClassName('JS-View'), function(elem) {
    if (!elem.classList.contains("JS-Viewer-Ready")) {
      const elParams = GLOBAL.parseData(elem.dataset.viewerParams);
      const params = Object.assign({}, common, elParams);

      new Viewer(elem, params);
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initViewer();
});