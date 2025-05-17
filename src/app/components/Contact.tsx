import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Ensure you have this component
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    const formData = {
      access_key: "fc73c789-2565-43da-823c-71e1bb13fb6c",
      name: data.name,
      email: data.email,
      message: data.message,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 z-0"
    >
      <div className="container mx-auto px-4 py-10 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
              Get In Touch
            </h2>
            <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="p-2">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                      <Mail className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-white">
                        Email
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        shreestybajracharya@gmail.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-2">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                      <Phone className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-white">
                        Phone
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        +977-9861399664
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-2">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                      <MapPin className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-white">
                        Location
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Kathmandu, Nepal
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter your name"
                                  {...field}
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
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter your email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Enter your message"
                                className="min-h-32"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-teal-500 hover:bg-teal-600"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
