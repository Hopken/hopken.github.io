"use client";

import { useState, type FormEvent } from "react";
import { Mail, SendHorizonal } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionHeading } from "@/components/ui";

export default function Contact() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const from = String(data.get("email") ?? "");
    const body = `From: ${name} <${from}>\n\n${String(data.get("message") ?? "")}`;
    const subject = String(data.get("subject") ?? `Message from ${name}`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsDialogOpen(true);
  };

  return (
    <>
      <section id="contact">
        <Card className="h-full border border-line bg-card px-6 py-8 sm:px-8">
          <SectionHeading icon={<Mail className="h-6 w-6" />} title="CONTACT ME" />

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="sr-only">Name</span>
                <Input name="name" required placeholder="Your Name" className="rounded-xl border-line bg-card-2 text-fg placeholder:text-muted" />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <Input name="email" type="email" required placeholder="Your Email" className="rounded-xl border-line bg-card-2 text-fg placeholder:text-muted" />
              </label>
            </div>

            <label className="block">
              <span className="sr-only">Subject</span>
              <Input name="subject" placeholder="Subject" className="rounded-xl border-line bg-card-2 text-fg placeholder:text-muted" />
            </label>

            <label className="block">
              <span className="sr-only">Message</span>
              <Textarea name="message" required rows={5} placeholder="Your Message" className="resize-y rounded-xl border-line bg-card-2 text-fg placeholder:text-muted" />
            </label>

            <Button type="submit" className="inline-flex items-center gap-2 rounded-full border border-accent bg-transparent text-fg hover:bg-accent hover:text-white">
              Send Message <SendHorizonal className="h-4 w-4" />
            </Button>
          </form>
        </Card>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your message is ready</DialogTitle>
            <DialogDescription>
              Your email app should open with a pre-filled message for {profile.email}. If it does not,
              you can send the message directly from there.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter showCloseButton>
            <a href={`mailto:${profile.email}`} className="text-sm font-medium text-accent hover:underline">
              Email directly
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
