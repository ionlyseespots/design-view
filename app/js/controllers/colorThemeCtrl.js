Simple.app.controller("colorThemeCtrl", function($scope){

    //== Data
    $scope.designviewdiv = [
        {
            "tag":              "div",
            "class":            "text-info",
            "hello":            "text area text",
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
        $scope.templatefile = "";
        format($scope.designviewdiv);
        console.log($scope.templatefile);
    };
    $scope.goyou = function() {
        $scope.templatefile = "";
        format($scope.designviewdivyou);
        console.log($scope.templatefile);
    };
    $scope.gous = function() {
        $scope.templatefile = "";
        format($scope.designviewdivus);
        console.log($scope.templatefile);
    };
});

