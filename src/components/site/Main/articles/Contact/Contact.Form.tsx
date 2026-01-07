import "tailwindcss";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../../../ui/form";
import { Input } from "../../../../ui/input";

import { Button } from "../../../../ui/button";

export const ContactForm = () => {
    const formSchema = z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <h4 className={"major"}>Client Info</h4>
                    <FormItem>
                        <FormLabel>Client Full Name</FormLabel>
                        <Input placeholder="Full Name" type={"text"} />
                        <FormDescription>
                            This is your full name.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    <FormItem>
                        <FormLabel>Service Address</FormLabel>
                        <Input placeholder="123 Main Street, Phoenix AZ 85245" type={"text"} />
                        <FormDescription>
                            This is the requested service address.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    <div className={"flex"}>
                        <div className={"w-1/2"}>
                            <FormItem className={"paddingRight"}>
                                <FormLabel>Email</FormLabel>
                                <Input placeholder="terry@gmail.com" type={"text"} />
                                <FormDescription>
                                    This is your email address.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        </div>
                        <div className={"w-1/2"}>
                            <FormItem className={"paddingRight"}>
                                <FormLabel>Phone</FormLabel>
                                <Input placeholder="+1 (480) 000-0000" type={"text"} />
                                <FormDescription>
                                    This is your contact phone number.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        </div>
                    </div>
                    <h4 className={"major"}>Referral Info</h4>
                    <FormItem>
                        <FormLabel>Referred By</FormLabel>
                        <Input placeholder="John Smith" type={"text"} />
                        <FormDescription>
                            This is who referred you to this service.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    <FormItem>
                        <FormLabel>Relationship to the Referral</FormLabel>
                        <Input placeholder="Spouse" type={"text"} />
                        <FormDescription>
                            What is your relationship to the person who referred you to this service?
                        </FormDescription>
                        <FormMessage />
                    </FormItem>

                    <h4 className={"major"}>Scheduling Preferences</h4>
                    <div>

                    </div>

                    <div className={"flex justify-evenly paddingTopL"}>
                        <Button type="submit" className={"primary"}>Send</Button>
                        <Button type="reset">Reset</Button>
                    </div>
                </form>
            </Form>
        </>
    );
};

/*
<form method="post" action="#">
    <div className="fields">



        <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={4}></textarea>
        </div>
    </div>
    <div className="field">
        <label htmlFor="recurring">Recurring Sessions</label>
        <select name="demo-category" id="demo-category">
            <option value="">-</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
        <p>
            Clients who maintain regular service may receive priority scheduling and lower pricing based
            on frequency.
        </p>
    </div>
    <h4>Scheduling Preferences</h4>
    <div className="field half">
        <h5>Preferred Days</h5>
        <div className={""}>
            <input type="checkbox" id="monday" name="monday"/>
            <label htmlFor="monday">Monday</label>

            <input type="checkbox" id="tuesday" name="tuesday"/>
            <label htmlFor="tuesday">Tuesday</label>

            <input type="checkbox" id="wednesday" name="wednesday"/>
            <label htmlFor="wednesday">Wednesday</label>

            <input type="checkbox" id="thursday" name="thursday"/>
            <label htmlFor="thursday">Thursday</label>

            <input type="checkbox" id="friday" name="friday"/>
            <label htmlFor="friday">Friday</label>

            <input type="checkbox" id="saturday" name="saturday"/>
            <label htmlFor="saturday">Saturday</label>

            <input type="checkbox" id="sunday" name="sunday"/>
            <label htmlFor="sunday">Sunday</label>
        </div>
    </div>
    <div>
        <h5>Preferred Times</h5>
        <input type="checkbox" id="morning" name="morning"/>
        <label htmlFor="morning">Morning</label>

        <input type="checkbox" id="earlyAfternoon" name="earlyAfternoon"/>
        <label htmlFor="earlyAfternoon">Early Afternoon</label>

        <input type="checkbox" id="lateAfternoon" name="lateAfternoon"/>
        <label htmlFor="lateAfternoon">Late Afternoon</label>

        <input type="checkbox" id="evening" name="evening"/>
        <label htmlFor="thursday">Evening</label>
    </div>
</form>*/
