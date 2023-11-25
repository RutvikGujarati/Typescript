var Colleges = /** @class */ (function () {
    function Colleges(privates, publics, college) {
        this.privates = privates;
        this.publics = publics;
        this.college = college;
    }
    Object.defineProperty(Colleges.prototype, "AllColleges", {
        get: function () {
            return 46;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Colleges.prototype, "seePrivate", {
        get: function () {
            return this.college;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Colleges.prototype, "CollegeCount", {
        set: function (counter) {
            this.privates = counter;
            counter = 45;
        },
        enumerable: false,
        configurable: true
    });
    return Colleges;
}());
var Coll = new Colleges(36, 483, 49);
console.log(Coll);
