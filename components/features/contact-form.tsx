"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";
import { formSchema } from "@/lib/schemas";
import { send } from "@/lib/email";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

// Hardcoded card options for dropdown
const cardOptions = [
  {
    id: '1',
    name: 'Travel Rewards Card',
    benefits: 'Earn unlimited 1.5 points for every $1 you spend.',
    annualFee: '$0',
    interestRate: '15.24% - 25.24% Variable APR',
    colorScheme: 'bg-blue-500 text-white',
    mask: '1234',
  },
  {
    id: '2',
    name: 'Cash Rewards Card',
    benefits: 'Earn 3% cash back in the category of your choice.',
    annualFee: '$0',
    interestRate: '13.99% - 23.99% Variable APR',
    colorScheme: 'bg-green-500 text-white',
    mask: '5678',
  },
  {
    id: '3',
    name: 'Premium Rewards Card',
    benefits: 'Earn 2 points for every $1 spent on travel and dining.',
    annualFee: '$95',
    interestRate: '16.99% - 24.99% Variable APR',
    colorScheme: 'bg-purple-500 text-white',
    mask: '9876',
  },
];

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "", // This is where you would store the selected card
      lastName: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    send(values);
  }

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-24 font-bold">Application</CardTitle>

      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

              {/* Dropdown for Card Selection */}
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="firstName" // Use "firstName" for the card field here
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Choose Your Card</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full p-2 border-[#000000] rounded-md"
                        >
                          <option value="" className="text-gray-400">Select a card...</option>
                          {cardOptions.map((card) => (
                            <option key={card.id} value={card.name}>
                              {card.name}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Other fields */}
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>


            <div className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monthly Income</FormLabel>
                    <FormControl>
                      <Textarea
                        id="message"
                        placeholder="Type in your income details here"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="ml-auto">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
