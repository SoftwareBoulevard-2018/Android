var PuzzleTile = /** @class */ (function () {
    /*
      constructor(real_placement: number, current_placement: number, image, isEmpty: boolean) {
        this.real_placement = real_placement;
        this.current_placement = current_placement;
        this.image = image;
        this.isEmpty = isEmpty;
      }
    */
    function PuzzleTile(real_placement, current_placement, isEmpty, image) {
        this.image = 'https://dondelaviste.cl/public/images/species/1/delfin_austral.png';
        this.real_placement = real_placement;
        this.current_placement = current_placement;
        this.isEmpty = isEmpty;
        this.image = image;
    }
    PuzzleTile.prototype.getReal_placement = function () {
        return this.real_placement;
    };
    PuzzleTile.prototype.setReal_placement = function (value) {
        this.real_placement = value;
    };
    PuzzleTile.prototype.getCurrent_placement = function () {
        return this.current_placement;
    };
    PuzzleTile.prototype.setCurrent_placement = function (value) {
        this.current_placement = value;
    };
    return PuzzleTile;
}());
export { PuzzleTile };
//This is the model por puzzle tiles
//# sourceMappingURL=puzzleTile.js.map