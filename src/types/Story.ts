type Story = {
  by: string;
  deleted?: boolean;
  descendants: number;
  id: number;
  kids?: number[]
  score: number;
  text?: string;
  time: number;
  title: string;
  type: string;
  url?: string;
};

export default Story;
