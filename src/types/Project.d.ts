export interface Project {
    id: string;
    title: string;
    synopsis: string;
    picture: string;
    subject: string;
    category: string;
    description: string;
    devstack: string[];
    link? : string;
    color: string;
}