export interface Wish {
  id: string;
  recipient_name: string;
  sender_name: string;
  wish_type: string;
  custom_message?: string;
  youtube_url?: string;
  video_upload_url?: string;
  created_at?: string;
}

export type WishType = 
  | "Happy Birthday"
  | "Happy Anniversary"
  | "Congratulations"
  | "Happy Married Life"
  | "Best Wishes for Your Future"
  | "Get Well Soon"
  | "Good Luck"
  | "Happy New Year"
  | "Merry Christmas"
  | "Welcome Baby"
  | "Happy Graduation"
  | "Happy Housewarming"
  | "Happy Friendship Day"
  | "Happy Valentine’s Day"
  | "Thank You"
  | "Miss You"
  | "Thinking of You"
  | "Happy Retirement"
  | "Happy Promotion"
  | "Best of Luck for Exams";

export const WISH_TYPES: WishType[] = [
  "Happy Birthday",
  "Happy Anniversary",
  "Congratulations",
  "Happy Married Life",
  "Best Wishes for Your Future",
  "Get Well Soon",
  "Good Luck",
  "Happy New Year",
  "Merry Christmas",
  "Welcome Baby",
  "Happy Graduation",
  "Happy Housewarming",
  "Happy Friendship Day",
  "Happy Valentine’s Day",
  "Thank You",
  "Miss You",
  "Thinking of You",
  "Happy Retirement",
  "Happy Promotion",
  "Best of Luck for Exams"
];
