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
            "children": [
                {
                    "tag":          "span",
                    "html":         "prexisitingText: {newText}"
                }
            ]}
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
});