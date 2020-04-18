const portfolioTemplate = require('modules/portfolio/portfolio.hbs');
document.addEventListener("DOMContentLoaded", function() {
  var div = document.createElement('div');
  div.innerHTML = portfolioTemplate({
    items: [
      { logo: "static/img/icons/jhon.png",
        title: "Vivamus pulvinar",
        info_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",
        devices_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",        
        screenshot: "static/img/content/musician/john1-desk.png",
        images: [
          {
            type: 'desktop',
            items: [
              {src :'static/img/content/musician/john1-desk.png', type: 'desktop'},
              {src: 'static/img/content/musician/john2-desk.png', type: 'desktop'},
              {src: 'static/img/content/musician/john3-desk.png', type: 'desktop'},
            ]
          },
          {
            type: 'tablet',
            items: [
              {src :'static/img/content/musician/john4-tab.png', type: 'tablet'},
              {src: 'static/img/content/musician/john5-tab.png', type: 'tablet'},
              {src: 'static/img/content/musician/john6-tab.png', type: 'tablet'},
            ]
          },
          {
            type: 'mobile',
            items: [
              {src :'static/img/content/musician/john7-mob.png', type: 'mobile'},
              {src: 'static/img/content/musician/john8-mob.png', type: 'mobile'},
              {src: 'static/img/content/musician/john9-mob.png', type: 'mobile'},
            ]
          },
        ]
      },
      { logo: "static/img/icons/alibi.png",
        title: "Vivamus pulvinar",
        info_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",
        devices_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",        
        screenshot: "static/img/content/tamtam/tam5-desk.png",
        images: [
          {
            type: 'desktop',
            items: [
              {src :'static/img/content/tamtam/tam1-desk.png', type: 'desktop'},
              {src: 'static/img/content/tamtam/tam5-desk.png', type: 'desktop'},
              {src: 'static/img/content/tamtam/tam6-desk.png', type: 'desktop'},
            ]
          },
          {
            type: 'tablet',
            items: [
              {src :'static/img/content/tamtam/tam2-tab.png', type: 'tablet'},
              {src: 'static/img/content/tamtam/tam3-tab.png', type: 'tablet'},
              {src: 'static/img/content/tamtam/tam4-tab.png', type: 'tablet'},
            ]
          },
          {
            type: 'mobile',
            items: [
              {src :'static/img/content/tamtam/tam7-mob.png', type: 'mobile'},
              {src: 'static/img/content/tamtam/tam8-mob.png', type: 'mobile'},
              {src: 'static/img/content/tamtam/tam9-mob.png', type: 'mobile'},
            ]
          },
        ]        
      },
      { logo: "static/img/icons/ave.png",
        title: "Vivamus pulvinar",
        info_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",
        devices_description: "Vivamus pulvinar sem non urna vulputate, a molestie nibh volutp. Ut at sem nec justo consequat",        
        screenshot: "static/img/content/ave/ave1-desk.png",
        images: [
          {
            type: 'desktop',
            items: [
              {src :'static/img/content/ave/ave1-desk.png', type: 'desktop'},
              {src: 'static/img/content/ave/ave2-desk.png', type: 'desktop'},
              {src: 'static/img/content/ave/ave3-desk.png', type: 'desktop'},
            ]
          },
        ]
      },
    ]
  });
  document.getElementById('module-portfolio').appendChild(div);
}); 

