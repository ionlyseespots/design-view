Simple.app.controller("themeEditorCtrl", function($scope){
    //== Data
    $scope.designviewdiv = [
        {
            "tag":              "div",
            "class":            "col-xs-12",
            "hello":            "1-column",
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
            "hello":            "Left column",
            "title":            "Left",
            "class":            "col-sm-6"
        },
        {
            "tag":              "div",
            "class":            "col-sm-6",
            "hello":            "Right column",
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
            "hello":            "Left column",
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
            "hello":            "Right column",
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
            "class":                "col-xs-2"
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

    $scope.designviewdefault = [
        {
            "tag":              "div",
            "hello":            '<img src="http://www.four51.com/images/company/c5a12ff8ea8f4cb0aaf8dc662ea7085e.png"/><h2>Company Name</h2>',
            "class":            "col-xs-12"
        }
    ];


    $scope.designviewimage = [
        {
            "tag":              "div",
            "hello":            '<img src="http://www.four51.com/images/company/c5a12ff8ea8f4cb0aaf8dc662ea7085e.png"/>',
            "title":            "Left",
            "class":            "col-sm-6"
        },
    ];

    $scope.designloginbackground = [
        {
            "name":             "loginbackground",
            "parentclass":      "panel-product-list",
            "class":            "well",
             "property":        "background-image",
            "value":            "",
            "important":        ""
        }
    ];
    $scope.designbodybackground = [
        {
            "name":             "bodybackground",
            "parentclass":      "panel-product-list",
            "class":            "well",
            "property":         "background-image",
            "value":            "",
            "important":        ""
        }
    ];

    // Toggle
    $scope.showhtml = false;
    $scope.showcss = false;
    $scope.visible1 = false;
    $scope.visible2 = false;
    $scope.visible3 = false;


    //** Format JSON to HTML
    function format(d){
        angular.forEach(d, function(i){
           //html
            var tagopen = '<' + i.tag;
            var t = i.tag;
            var c = i.class;
            var pe = i.children;
            var el = i.html;
            var logo = i.logo;
            var designinner = i.hello;
            var tagclose = '</' + i.tag + '>';
            $scope.templatefile += tagopen + ' class="' + c + '">' + designinner + tagclose + '\n' + ' \r';
            //css
            var dot = ".";
            var pc = i.parentclass ? dot + i.parentclass + ' ' : '';
            var cc = i.childclass ? dot + i.childclass + ' ' : '';
            var pe = i.parentelement ? i.parentelement + ' ' : '';
            var el = i.element ? i.element + ' ' : '';
            var cl = i.class ? dot + i.class + ' ' : '';
            $scope.cssfile += pc + cc + pe + el + cl + ' {' + i.property + ': ' + 'url("' + i.value + '")' + i.important + ';}\r';
        });
    }

    $scope.goNewCustom = function() {
        $scope.visible1 = true;
        $scope.visible2 = false;
        $scope.visible3 = false;
        $scope.templatefile = "";
        format($scope.designviewdiv);
        console.log($scope.templatefile);
    };
    $scope.goNewTwocol = function() {
        $scope.visible1 = false;
        $scope.visible2 = true;
        $scope.visible3 = false;
        $scope.templatefile = "";
        format($scope.designviewdivyou);
        console.log($scope.templatefile);
    };
    $scope.goNewThreecol = function() {
        $scope.visible1 = false;
        $scope.visible2 = false;
        $scope.visible3 = true;
        $scope.templatefile = "";
        format($scope.designviewdivus);
        console.log($scope.templatefile);
    };
    $scope.goHeaderBackground = function() {
        $scope.hidehtml= true;
        $scope.templatefile = "";
        format($scope.designviewdefault);
        console.log($scope.cssfile);
        $scope.cssfile = "";
    };
    $scope.goLoginBackground = function() {
        $scope.cssfile = "";
        format($scope.designloginbackground);
        $scope.cssfile = '/* custom.css */' + '\n' + '/* login background */' + '\n' + $scope.cssfile;
        console.log($scope.cssfile);
    };
    $scope.goBodyBackground = function() {
        $scope.cssfile = "";
        format($scope.designbodybackground);
        $scope.cssfile = '/* custom.css */' + '\n' + '/* body background */' + '\n' + $scope.cssfile;
        console.log($scope.cssfile);
    };
    $scope.goHeaderDefault = function() {
        $scope.templatefile = "";
        format($scope.designviewdefault);
        var opencontainer = '<!-- branding.html -->' + '\n' + '<section class="jumbotron container-fluid">' + '\n';
        var closecontainer = '</section>';
        $scope.templatefile = opencontainer + $scope.templatefile + closecontainer;
        console.log($scope.templatefile);
    };

    // stuff, I want to add/subtract class names in array at some point
    $scope.addcolumncount = function() {

    };
    $scope.subtractcolumncount = function() {

    };
    //http://stackoverflow.com/questions/20439439/on-click-how-can-i-cycle-through-json-one-by-one-in-angularjs
    $scope.current = 0;
    $scope.NextGo = function() {
        $scope.current = ($scope.current + 1) % $scope.data.length;
    };
    $scope.PrevGo = function() {
        $scope.current = ($scope.current - 1) % $scope.data.length;
    };
});