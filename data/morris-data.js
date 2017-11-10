function MyMorris(ykeys_arg, color) {

    Morris.Line({
        element: 'order-history-chart',
        data: [{
            period: '2016 Q1',
            Ebay: 20,
            PayTM: 50,
            Amazon: 10,
            Flipkart: 30
        }, {
            period: '2016 Q2',
            Ebay: 27,
            PayTM: 20,
            Amazon: 20,
            Flipkart: 25
        }, {
            period: '2016 Q3',
            Ebay: 30,
            PayTM: 32,
            Amazon: 24,
            Flipkart: 21
        }, {
            period: '2016 Q4',
            Ebay: 37,
            PayTM: 14,
            Amazon: 30,
            Flipkart: 24
        }, {
            period: '2017 Q1',
            Ebay: 40,
            PayTM: 30,
            Amazon: 50,
            Flipkart: 40
        }, {
            period: '2017 Q2',
            Ebay: 15,
            PayTM: 15,
            Amazon: 45,
            Flipkart: 30
        }, {
            period: '2017 Q3',
            Ebay: 38,
            PayTM: 40,
            Amazon: 60,
            Flipkart: 50
        }],
        xkey: 'period',
        ymax: 60,
        ymin: 0,
        lineColors: color,
        ykeys: ykeys_arg,
        labels: ykeys_arg,
        pointSize: 3,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Amazon",
            value: 1
        }, {
            label: "Flipkart",
            value: 1
        }, {
            label: "Ebay",
            value: 1
        }, {
            label: "PayTM",
            value: 2
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2016',
            a: 50,
            b: 40
        }, {
            y: '2017',
            a: 75,
            b: 65
        }, {
            y: '2018',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
};
