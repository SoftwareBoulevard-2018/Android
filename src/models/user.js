var User = /** @class */ (function () {
    function User(id, username, companyId, name, password, createdAt, role, competencyLevel, correctTrainingQuestions, correctProjectQuestions, resourcesSpent) {
        this.id = id;
        this.username = username;
        this.companyId = companyId;
        this.name = name;
        this.password = password;
        this.createdAt = createdAt;
        this.role = role;
        this.competencyLevel = competencyLevel;
        this.correctTrainingQuestions = correctTrainingQuestions;
        this.correctProjectQuestions = correctProjectQuestions;
        this.resourcesSpent = resourcesSpent;
    }
    return User;
}());
export { User };
//# sourceMappingURL=user.js.map