const portfolioTemplate = require('modules/portfolio/portfolio.hbs');
document.addEventListener("DOMContentLoaded", function() {
  var div = document.createElement('div');
  div.innerHTML = portfolioTemplate({
    items: [
      { logo: "static/img/icons/jhon.png",
        previewBackgroundClass: "portfolio__preview-background_mob",
        portfolioPreviewClass: "portfolio__preview-image_mob",
        device: "static/img/mob_1.png",
        title: "Vivamus pulvinar",
        info_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",
        devices_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",        
        screenshot: "static/img/screenshot_1.png",
      },
      { logo: "static/img/icons/alibi.png",
        previewBackgroundClass: "portfolio__preview-background_ipad",
        portfolioPreviewClass: "portfolio__preview-image_ipad",
        device: "static/img/ipad_2.png",
        title: "Vivamus pulvinar",
        info_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",
        devices_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",        
        screenshot: "static/img/screenshot_2.png",
      },
      { logo: "static/img/icons/ave.png",
        previewBackgroundClass: "portfolio__preview-background_mac",
        portfolioPreviewClass: "portfolio__preview-image_mac",
        device: "static/img/mac_3.png",
        title: "Vivamus pulvinar",
        info_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",
        devices_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",        
        screenshot: "static/img/screenshot_3.png",
      },
    ]
  });
  document.getElementById('module-portfolio').appendChild(div);
}); 

