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
export interface ITeamMember {
  id: string;
  job_role: string;
  name: string;
  avatar: {
    url: string;
  };
}

export interface IMenuItem {
  id: number;
  label: string;
  url: string;
  strapi_component: string;
}
