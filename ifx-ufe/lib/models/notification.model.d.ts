import { NotificationType } from './notification-type';
export interface NotificationModel {
    notificationType: NotificationType;
    title: string;
    message?: string;
    details?: string[];
}
