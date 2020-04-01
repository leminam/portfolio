const portfolioTemplate = require('modules/portfolio/portfolio.hbs');
document.addEventListener("DOMContentLoaded", function() {
  var div = document.createElement('div');
  div.innerHTML = portfolioTemplate({
    items: [
      { logo: "static/img/icons/jhon.png",
        previewBackgroundClass: "portfolio__preview-background_mob",
        portfolioPreviewDevice: "portfolio__preview-device_mob",
        portfolioPreviewImage: "portfolio__preview-image_mob",
        device: "desktop",
        device_wrapper: "static/img/mac_1.png",
        title: "Vivamus pulvinar",
        info_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",
        devices_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",        
        screenshot: "static/img/john1-desk.png",
      },
      { logo: "static/img/icons/alibi.png",
        previewBackgroundClass: "portfolio__preview-background_ipad",
        portfolioPreviewDevice: "portfolio__preview-device_ipad",
        portfolioPreviewImage: "portfolio__preview-image_ipad",
        device: "tablet",        
        device_wrapper: "static/img/mac_1.png",
        title: "Vivamus pulvinar",
        info_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",
        devices_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",        
        screenshot: "static/img/john2-desk.png",
      },
      { logo: "static/img/icons/ave.png",
        previewBackgroundClass: "portfolio__preview-background_mac",
        portfolioPreviewDevice: "portfolio__preview-device_mac",
        portfolioPreviewImage: "portfolio__preview-image_mac",
        device: "mobile",        
        device_wrapper: "static/img/mac_1.png",
        title: "Vivamus pulvinar",
        info_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",
        devices_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",        
        screenshot: "static/img/john3-desk.png",
      },
    ]
  });
  document.getElementById('module-portfolio').appendChild(div);
}); 

