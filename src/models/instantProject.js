var InstantProject = /** @class */ (function () {
    function InstantProject(id, name, numberOfDevelopingQuestionsPerAnalyst, numberOfDevelopingQuestionsPerDeveloper, numberOfDevelopingQuestionsPerTester, rewarded_k) {
        this.id = id;
        this.name = name;
        this.rewarded_k = rewarded_k;
        this.numberOfDevelopingQuestionsPerAnalyst = numberOfDevelopingQuestionsPerAnalyst;
        this.numberOfDevelopingQuestionsPerDeveloper = numberOfDevelopingQuestionsPerDeveloper;
        this.numberOfDevelopingQuestionsPerTester = numberOfDevelopingQuestionsPerTester;
    }
    return InstantProject;
}());
export { InstantProject };
//This was the original class, its consistent with the database, it was created due to the fack that someone changed the model at the last minute 
//# sourceMappingURL=instantProject.js.map