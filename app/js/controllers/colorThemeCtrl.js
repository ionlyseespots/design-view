Simple.app.controller("colorThemeCtrl", function($scope){
    $scope.visible1 = false;
    $scope.visible2 = false;
    $scope.visible3 = false;
    //== Data
    $scope.designviewdiv = [
        {
            "tag":              "div",
            "class":            "text-info",
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
            "class":            "pull-right",
            "hello":            "text area text",
            "children": [
                {
                    "tag":          "span",
                    "html":         "prexisitingText: {newText}"
                }
            ]}
    ];
    $scope.designviewdivus = [
        {
            "tag":              "div",
            "class":            "col-sm-4",
            "hello":            "text area text",
            "children": [
                {
                    "tag":          "span",
                    "html":         "prexisitingText: {newText}"
                }
            ]},
        {
            "tag":              "div",
            "class":            "col-sm-4",
            "hello":            "text area text",
            "children": [
                {
                    "tag":          "span",
                    "html":         "prexisitingText: {newText}"
                }
            ]},
        {
            "tag":              "div",
            "class":            "col-sm-4",
            "hello":            "text area text",
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
        $scope.visible1 = !$scope.visible1;
        $scope.templatefile = "";
        format($scope.designviewdiv);
        console.log($scope.templatefile);
    };
    $scope.goyou = function() {
        $scope.visible2 = !$scope.visible2;
        $scope.templatefile = "";
        format($scope.designviewdivyou);
        console.log($scope.templatefile);
    };
    $scope.gous = function() {
        $scope.visible3 = !$scope.visible3;
        $scope.templatefile = "";
        format($scope.designviewdivus);
        console.log($scope.templatefile);
    };
});