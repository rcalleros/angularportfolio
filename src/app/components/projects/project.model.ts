export class Project {
    public Name = '';
    public Content = '';
    public Image = '';
}

export class ProjectModel {
        public Id = null;
        public IsValid = false;
        public IsDeleted = false;
        public Values = new Project();
}

export class ProjectViewModel {
   FirstName = '';
   LastName = '';
   Projects = [];
}
