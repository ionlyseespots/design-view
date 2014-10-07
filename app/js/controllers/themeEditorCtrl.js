Simple.app.controller("themeEditorCtrl", function($scope){
    $scope.visible1 = false;
    $scope.visible2 = false;
    $scope.visible3 = false;
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
            "hello":            '<img ng-bind-html src="http://www.four51.com/images/company/c5a12ff8ea8f4cb0aaf8dc662ea7085e.png"/><h2>Company Name</h2>',
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

    $scope.content = '';
    $scope.headerpane = true;
    $scope.visible4 = true;
    $scope.showhtml = false;
    $scope.showcss = false;





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
            $scope.cssfile += pc + cc + pe + el + cl + ' {' + i.property + ': ' + i.value + i.important + ';}\r';
        });
    }



    $scope.gome = function() {
        $scope.visible1 = true;
        $scope.visible2 = false;
        $scope.visible3 = false;
        $scope.visible4 = false;
        $scope.templatefile = "";
        format($scope.designviewdiv);
        console.log($scope.templatefile);

    };
    $scope.goyou = function() {
        $scope.visible1 = false;
        $scope.visible2 = true;
        $scope.visible3 = false;
        $scope.visible4 = false;
        $scope.templatefile = "";
        format($scope.designviewdivyou);
        console.log($scope.templatefile);
    };
    $scope.gous = function() {
        $scope.visible1 = false;
        $scope.visible2 = false;
        $scope.visible3 = true;
        $scope.visible4 = false;
        $scope.templatefile = "";
        format($scope.designviewdivus);
        console.log($scope.templatefile);
    };

    $scope.goimageheader = function() {
        $scope.firstpaneisopen = false;

        $scope.visible4 = false;
        $scope.visible5 = true;
        $scope.hidehtml= true;
        $scope.templatefile = "";
        format($scope.designviewdefault);
        console.log($scope.cssfile);
        $scope.cssfile = "";


    };

    $scope.goimagelogin = function() {
        $scope.firstpaneisopen = false;
        $scope.headerpane = false;
        $scope.visible1 = false;
        $scope.visible2 = false;
        $scope.visible3 = false;
        $scope.visible4 = false;
        $scope.visible5 = false;
        $scope.visible6 = true;
        $scope.visible7 = false;
        $scope.cssfile = "";


    };
    $scope.goimagebody = function() {
        $scope.firstpaneisopen = false;
        $scope.headerpane = false;
        $scope.visible1 = false;
        $scope.visible2 = false;
        $scope.visible3 = false;
        $scope.visible4 = false;
        $scope.visible5 = false;
        $scope.visible6 = false;
        $scope.visible7 = true;
        $scope.cssfile = "";


    };
    $scope.gothem = function() {
        $scope.firstpaneisopen = false;
        $scope.headerpane = true;
        $scope.visible1 = false;
        $scope.visible2 = false;
        $scope.visible3 = false;
        $scope.visible4 = true;
        $scope.visible5 = false;
        $scope.visible6 = false;
        $scope.visible7 = false;

        $scope.templatefile = "";
        format($scope.designviewdefault);

        var opencontainer = '<!-- branding.html -->' + '\n' + '<section class="jumbotron container-fluid">' + '\n';
        var closecontainer = '</section>';

        $scope.templatefile = opencontainer + $scope.templatefile + closecontainer;

        console.log($scope.templatefile);
    };

    $scope.goclear = function() {
        $scope.visible1 = false;
        $scope.visible2 = false;
        $scope.visible3 = false;
        $scope.visible4 = false;
        $scope.visible5 = false;
        $scope.visible6 = false;
        $scope.visible7 = false;
    };
    // stuff, I want to add/subract class names in array at some point
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