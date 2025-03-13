export interface Technology {
    name: string
    className: string
  }
  
  export interface Project {
    title: string
    description: string
    imageUrl: string
    projectUrl: string
    status: string
    technologies: Technology[]
  }
  
  