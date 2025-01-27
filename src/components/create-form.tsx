"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

export function CreateForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [pitch, setPitch] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const image = formData.get("image") as string;
    const description = formData.get("description") as string;
    // const pitch = formData.get("pitch") as string;
    console.log(title, image, description, pitch);
    // TODO: Add post
  };
  return (
    <div
      className={cn("flex flex-col gap-6 bg-black/90", className)}
      {...props}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create Blog</CardTitle>
          <CardDescription>Must be confirm checking </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Enter Title"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image">Image</Label>
                <Input
                  id="image"
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  name="description"
                  rows={5}
                  placeholder="Enter Description"
                  className="resize-none"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Pitch</Label>
                <MDEditor
                  value={pitch}
                  onChange={(value) => setPitch(value as string)}
                  id="pitch"
                  preview="live"
                  height={300}
                  style={{ borderRadius: "10px", overflow: "hidden" }}
                  textareaProps={{
                    placeholder: "Briefly describe your startup idea",
                  }}
                  previewOptions={{
                    disallowedElements: ["style"],
                  }}
                />
              </div>
              <Button type="submit" className="w-full" disabled={!pitch}>
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
