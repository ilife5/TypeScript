//// [file1.ts]

class C {
    /*! remove pinned comment anywhere else */
    public foo(x: string, y: any)
    public foo(x: string, y: number) { }
}

var x = 10;

/*! remove pinned comment anywhere else */
declare var OData: any;

//// [file1.js]
var C = (function () {
    function C() {
    }
    C.prototype.foo = function (x, y) { };
    return C;
})();
var x = 10;
