angular.module('testModule', [])
    .directive('testDirective', function() {
        return {
            restrict: 'E',
            templateUrl: require('../../index.js?relativeTo=src/!html-loader!./test.html')
        }
    });

console.log(require('../../index.js!html-loader!./test.html'));
console.log(require('../../index.js!raw-loader!./test.html'));
console.log(require('../../index.js?module=testModule!html-loader!./test.html'));
console.log(require('../../index.js?relativeTo=/test/src/!html-loader!./test.html'));
console.log(require('../../index.js?relativeTo=src/!html-loader!./test.html'));
console.log(require('../../index.js?relativeTo=' + __dirname + '/!html-loader!./test.html'));
console.log(require('../../index.js?relativeTo=/' + __dirname + '/!html-loader!./test.html'));
console.log(require('../../index.js?prefix=/prefix!html-loader!./test.html'));
console.log(require('../../index.js?prefix=/prefix/&relativeTo=/' + __dirname + '/!html-loader!./test.html'));
console.log(require('../../index.js?pathSep=\\&prefix=\\prefix\\&relativeTo=' + __dirname + '\\!html-loader!.\\test.html'));