if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}
	var myConfig = {
    graphset: [
      {
        type: "wordcloud",
        options: {
          style: {
            tooltip: {
              visible: true,
              text: "%text: %hits"
            }
          },
          words: [
            {
              text: "React.js",
              count: "300"
            },
            {
              text: "Javascript",
              count: "342"
            },
            {
              text: "Node.js",
              count: "190"
            },
            {
              text: "HTML5",
              count: "212"
            },
            {
              text: "jQuery",
              count: "201"
            },
            {
              text: "MySQL",
              count: "183"
            },
            {
              text: "Bootstrap",
              count: "130"
            },
            {
              text: "Express",
              count: "125"
            },
            {
              text: "CSS",
              count: "121"
            },
            {
              text: "Git",
              count: "117"
            }
          ]
        }
      }
    ]
  };

  zingchart.render({
    id: "myChart",
    data: myConfig,
    height: "100%",
    width: "100%"
	});
	
