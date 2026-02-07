"use client";

import { trackEvent } from "@/lib/analytics";
import { Button, type ButtonProps } from "@/components/ui/button";

const bookingUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL ||
  "https://calendly.com/hotlistai/lyftemail";

type Props = ButtonProps & {
  eventLocation: string;
};

export function BookDemoButton({ eventLocation, onClick, ...props }: Props) {
  return (
    <Button
      {...props}
      onClick={(e) => {
        trackEvent("book_demo_click", { location: eventLocation, url: bookingUrl });
        onClick?.(e);
        window.open(bookingUrl, "_blank", "noopener,noreferrer");
      }}
    />
  );
}
