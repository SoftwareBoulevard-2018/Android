var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { InstantProjectb } from './instantProjectb';
var BiddingProjectb = /** @class */ (function (_super) {
    __extends(BiddingProjectb, _super);
    function BiddingProjectb(id, name, numberOfDevelopingQuestionsPerAnalyst, numberOfDevelopingQuestionsPerTester, numberOfDevelopingQuestionsPerDeveloper, rewarded_K, time, cost, required_K, required_analyst_level, required_developer_level, required_tester_level) {
        var _this = _super.call(this, id, name, numberOfDevelopingQuestionsPerAnalyst, numberOfDevelopingQuestionsPerDeveloper, numberOfDevelopingQuestionsPerTester, rewarded_K) || this;
        _this.time = time;
        _this.cost = cost;
        _this.required_K = required_K;
        _this.required_analyst_level = required_analyst_level;
        _this.required_developer_level = required_developer_level;
        _this.required_tester_level = required_tester_level;
        return _this;
    }
    return BiddingProjectb;
}(InstantProjectb));
export { BiddingProjectb };
//This was the original class, its consistent with the database, it was created due to the fack that someone changed the model at the last minute
//# sourceMappingURL=biddingProjectb.js.map