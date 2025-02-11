export interface Technology {
    name: string
    className: string
  }
  
  export interface Project {
    title: string
    description: string
    imageUrl: string
    technologies: Technology[]
  }
  
  