const portfolioTemplate = require('modules/portfolio/portfolio.hbs');
document.addEventListener("DOMContentLoaded", function() {
  var div = document.createElement('div');
  div.innerHTML = portfolioTemplate({
    items: [
      { logo: "static/img/icons/jhon.png",
        previewBackgroundClass: "portfolio__preview-background_desktop",
        portfolioPreviewDevice: "portfolio__preview-device_desktop",
        portfolioPreviewImage: "portfolio__preview-image_desktop",
        device: "desktop",
        device_wrapper: "static/img/mac_1.png",
        title: "Vivamus pulvinar",
        info_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",
        devices_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",        
        screenshot: "static/img/john1-desk.png",
        images: [
          {
            type: 'desktop',
            items: [
              {src :'static/img/john1-desk.png', type: 'desktop'},
              {src: 'static/img/john2-desk.png', type: 'desktop'},
              {src: 'static/img/john3-desk.png', type: 'desktop'},
            ]
          },
          {
            type: 'tablet',
            items: [
              {src :'static/img/john4-tab.png', type: 'tablet'},
              {src: 'static/img/john5-tab.png', type: 'tablet'},
              {src: 'static/img/john6-tab.png', type: 'tablet'},
            ]
          },
          {
            type: 'mobile',
            items: [
              {src :'static/img/john7-mob.png', type: 'mobile'},
              {src: 'static/img/john8-mob.png', type: 'mobile'},
              {src: 'static/img/john9-mob.png', type: 'mobile'},
            ]
          },
        ]
      },
      { logo: "static/img/icons/alibi.png",
        previewBackgroundClass: "portfolio__preview-background_tab",
        portfolioPreviewDevice: "portfolio__preview-device_tab",
        portfolioPreviewImage: "portfolio__preview-image_tab",
        device: "tablet",        
        device_wrapper: "static/img/mac_1.png",
        title: "Vivamus pulvinar",
        info_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",
        devices_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",        
        screenshot: "static/img/john2-desk.png",
      },
      { logo: "static/img/icons/ave.png",
        previewBackgroundClass: "portfolio__preview-background_mob",
        portfolioPreviewDevice: "portfolio__preview-device_mob",
        portfolioPreviewImage: "portfolio__preview-image_mob",
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

