import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderEventCreated {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userID: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
