var BiddingProject = /** @class */ (function () {
    function BiddingProject(id, name, numberOfDevelopingQuestionsPerAnalyst, numberOfDevelopingQuestionsPerDeveloper, numberOfDevelopingQuestionsPerTester, required_K, rewarded_K, cost, time, required_tester_level, required_developer_level, required_analyst_level) {
        this.id = id;
        this.name = name;
        this.numberOfDevelopingQuestionsPerAnalyst = numberOfDevelopingQuestionsPerAnalyst;
        this.numberOfDevelopingQuestionsPerDeveloper = numberOfDevelopingQuestionsPerDeveloper;
        this.numberOfDevelopingQuestionsPerTester = numberOfDevelopingQuestionsPerTester;
        this.required_K = required_K;
        this.rewarded_K = rewarded_K;
        this.cost = cost;
        this.time = time;
        this.required_tester_level = required_tester_level;
        this.required_developer_level = required_developer_level;
        this.required_analyst_level = required_analyst_level;
    }
    return BiddingProject;
}());
export { BiddingProject };
//# sourceMappingURL=biddingProject.js.map