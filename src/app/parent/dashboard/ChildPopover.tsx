"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserPlus, X, Send, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

const ChildPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      // TODO: Implement API call to send verification email
      console.log("Sending verification to:", values);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form and close drawer on success
      form.reset();
      setIsOpen(false);
    } catch (error) {
      console.error("Error sending verification:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleClose() {
    if (!isSubmitting) {
      form.reset();
      setIsOpen(false);
    }
  }

  return (
    <>
      <Button
        key="add-child"
        variant="outline"
        className="w-full h-auto p-6 border-dashed border-2 border-border/60 hover:border-primary/50 bg-card/30 hover:bg-card/50 transition-all duration-200 group"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex flex-col items-center justify-center gap-3 w-full">
          <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
            <UserPlus className="w-6 h-6 text-primary" />
          </div>
          <div className="text-center">
            <h3 className="text-base font-light text-foreground group-hover:text-primary transition-colors mb-1">
              Add New Child
            </h3>
            <p className="text-sm font-light text-muted-foreground">
              Create a new child account to track their progress
            </p>
          </div>
        </div>
      </Button>

      <Drawer open={isOpen} onOpenChange={handleClose} direction="right">
        <DrawerContent className="h-full w-[600px] max-w-[90vw] sm:max-w-[600px]!">
          <DrawerHeader className="border-b border-border/50 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <DrawerTitle className="text-2xl font-light tracking-tight">
                  Add New Child
                </DrawerTitle>
                <DrawerDescription className="mt-2 text-base text-muted-foreground">
                  Enter your child's information to send them a verification
                  email
                </DrawerDescription>
              </div>
            </div>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 p-6"
              >
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-sm font-medium text-foreground">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter child's full name"
                            className="h-11 text-base bg-background border-border/50 focus:border-ring transition-colors"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-sm font-medium text-foreground">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="child@example.com"
                            className="h-11 text-base bg-background border-border/50 focus:border-ring transition-colors"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full h-11 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Verification Email
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          <DrawerFooter className="border-t border-border/50 pt-4">
            <Button
              variant="ghost"
              onClick={handleClose}
              disabled={isSubmitting}
              className="h-10"
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ChildPopover;
