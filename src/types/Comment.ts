type Comment = {
  by: string;
  deleted?: boolean;
  id: number;
  kids?: number[];
  parent: number,
  text?: string;
  time: number;
  type: string;
};

export default Comment;
