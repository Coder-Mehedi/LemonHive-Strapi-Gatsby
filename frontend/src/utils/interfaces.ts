export interface IJob {
  id: string;
  created_at: string;
  updated_at: string;
  Title: string;
  Description: string;
  Deadline: Date;
  published_at: Date;
}
export interface IProject {
  id: string;
  image: {
    url: string;
  };
}
export interface IService {
  id: string;
  title: string;
  description: string;
  icon: {
    url: string;
  };
}
