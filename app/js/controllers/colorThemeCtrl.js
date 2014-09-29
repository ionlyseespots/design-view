Simple.app.controller("colorThemeCtrl", function($scope){
    $scope.visible1 = false;
    $scope.visible2 = false;
    $scope.visible3 = false;
    //== Data
    $scope.designviewdiv = [
        {
            "tag":              "div",
            "class":            "col-xs-12",
            "hello":            "",
            "children": [
            {
                "tag":          "span",
                "html":         "prexisitingText: {newText}"
            }
        ]}
    ];
    $scope.designviewdivyou = [
        {
            "tag":              "div",
            "class":            "col-sm-6",
            "hello":            "Left Side",
            "title":            "Left",
            "children": [
                {
                    "tag":          "span",
                    "html":         "prexisitingText: {newText}"
                }
            ]},
        {
            "tag":              "div",
            "class":            "col-sm-6",
            "hello":            "Right Side",
            "title":            "Right",
            "children": [
                {
                    "tag":          "span",
                    "html":         "prexisitingText: {newText}"
                }
            ]},
    ];
    $scope.designviewdivus = [
        {
            "tag":              "div",
            "class":            "col-sm-4",
            "hello":            "Left side",
            "title":            "Left",
            "children": [
                {
                    "tag":          "span",
                    "html":         "prexisitingText: {newText}"
                }
            ]},
        {
            "tag":              "div",
            "class":            "col-sm-4",
            "hello":            "Center",
            "title":            "Center",
            "children": [
                {
                    "tag":          "span",
                    "html":         "prexisitingText: {newText}"
                }
            ]},
        {
            "tag":              "div",
            "class":            "col-sm-4",
            "hello":            "Right Side",
            "title":            "Right",

            "children": [
                {
                    "tag":          "span",
                    "html":         "prexisitingText: {newText}"
                }
            ]}
    ];

    $scope.data = [
        {
            "class":                "col-xs-1"
        },
        {
            "class": "col-xs-2"
        },
        {
            "class":                "col-xs-3"
        },
        {
            "class":                "col-xs-4"
        },
        {
            "class":                "col-xs-5"
        },
        {
            "class":                "col-xs-6"
        },
        {
            "class":                "col-xs-7"
        },
        {
            "class":                "col-xs-8"        },
        {

            "class":                "col-xs-9"
        },
        {
            "class":               "col-xs-10"
        },
        {
            "class":               "col-xs-11"
        },
        {
            "class":               "col-xs-12"
        }
    ];



    $scope.content = '';

    //** Format JSON to HTML
    function format(d){
        angular.forEach(d, function(i){
            var tagopen = '<' + i.tag;
            var t = i.tag;
            var c = i.class;
            var pe = i.children;
            var el = i.html;
            var designinner = i.hello;
            var tagclose = '</' + i.tag + '>';
            $scope.templatefile += tagopen + ' class="' + c + '">' + designinner + tagclose + '\n' + ' \r';

        });

    }

    $scope.gome = function() {
        $scope.visible1 = true;
        $scope.visible2 = false;
        $scope.visible3 = false;
        $scope.templatefile = "";
        format($scope.designviewdiv);
        console.log($scope.templatefile);
    };
    $scope.goyou = function() {
        $scope.visible1 = false;
        $scope.visible2 = true;
        $scope.visible3 = false;
        $scope.templatefile = "";
        format($scope.designviewdivyou);
        console.log($scope.templatefile);
    };
    $scope.gous = function() {
        $scope.visible1 = false;
        $scope.visible2 = false;
        $scope.visible3 = true;
        $scope.templatefile = "";
        format($scope.designviewdivus);
        console.log($scope.templatefile);
    };

    $scope.addcolumncount = function() {


    };
    $scope.subtractcolumncount = function() {

    };
    //http://stackoverflow.com/questions/20439439/on-click-how-can-i-cycle-through-json-one-by-one-in-angularjs
    $scope.current = 0;
    $scope.Next = function() {
        $scope.current = ($scope.current + 1) % $scope.data.length;
    };
    $scope.Prev = function() {
        $scope.current = ($scope.current - 1) % $scope.data.length;
    };
});