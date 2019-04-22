export class ProjectModel {
    constructor(
        public Id: number,
        public IsValid,
        public IsDeleted,
        public Values: Project
    ) {}
}

export class Project {
    constructor(
        public Name: string,
        public Content: string,
        public Image: string,
    ) {}
}
