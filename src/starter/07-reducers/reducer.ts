export type CounterState = {
  count: number;
  status: string;
};

export const initialState: CounterState = {
  count: 0,
  status: "Pending...",
};

