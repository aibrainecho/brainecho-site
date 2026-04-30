export interface Notice {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  pinned: boolean;
}

export interface NoticeFormData {
  title: string;
  content: string;
  password: string;
  pinned?: boolean;
}
