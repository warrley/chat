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
                <form className="flex md:flex-row md:w-4/5 md:mx-auto md:gap-4 md:h-16 flex-col gap-2 h-16 px-3" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="md:flex-1">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="h-8 md:h-12 md:text-xl" placeholder="enter your name" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    >

                    </FormField>
                    </div>
                    <Button className="flex-1 md:flex-initial h-6 md:h-12 md:text-xl" type="submit">Start Chat</Button>
                </form>
            </Form>
        </div>
    )
}