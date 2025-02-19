"use client"

import { Button } from "./ui/button"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { useUserStore } from "./store/store-name"

const formSchema = z.object({
    name: z.string().min(2, "The name needs at least 2 characters"),
})

export const FormInputs = () => {
    const {name, setName } = useUserStore();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ''
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setName(values.name)
    }

    return (
        <div>
            <Form {...form}>
                <form className="flex gap-4 h-16 w-4/5 mx-auto" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex-1">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="h-12" placeholder="enter your name" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    >

                    </FormField>
                    </div>
                    <Button className="h-12" type="submit">Start Chat</Button>
                </form>
            </Form>
        </div>
    )
}