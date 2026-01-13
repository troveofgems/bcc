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
} from "@/components/ui/form.tsx";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

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
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder="terry@gmail.com" type={"text"} />
                        <FormDescription>
                            This is your email address.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <Input placeholder="+1 (480) 000-0000" type={"text"} />
                        <FormDescription>
                            This is your contact phone number.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
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
                        <FormLabel>Referral Contact Number</FormLabel>
                        <Input placeholder="Phone" type={"text"} />
                        <FormDescription>
                            Please provide their phone number.
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
                        <FormItem>
                            <FormLabel className={"smallPadBottom"}>Preferred Days</FormLabel>
                            <FormDescription className={"smallPadBottom"}>
                                What days are you looking for services?
                            </FormDescription>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-wrap gap-2 addPad">
                                    <Checkbox id={"monday"} className={"collapseBtn"} />
                                    <Label htmlFor="monday">Monday</Label>
                                    <Checkbox id={"tuesday"} className={"collapseBtn"} />
                                    <Label htmlFor="tuesday">Tuesday</Label>
                                    <Checkbox id={"wednesday"} className={"collapseBtn"} />
                                    <Label htmlFor="wednesday">Wednesday</Label>
                                    <Checkbox id={"thursday"} className={"collapseBtn"} />
                                    <Label htmlFor="thursday">Thursday</Label>
                                    <Checkbox id={"friday"} className={"collapseBtn"} />
                                    <Label htmlFor="friday">Friday</Label>
                                    <Checkbox id={"saturday"} className={"collapseBtn"} />
                                    <Label htmlFor="saturday">Saturday</Label>
                                    <Checkbox id={"sunday"} className={"collapseBtn"} />
                                    <Label htmlFor="sunday">Sunday</Label>
                                </div>
                            </div>
                            <FormMessage />
                        </FormItem>
                        <FormItem>
                            <FormLabel className={"smallPadBottom"}>Preferred Times</FormLabel>
                            <FormDescription className={"smallPadBottom"}>
                                What times are you looking for services?
                            </FormDescription>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2 addPad">
                                    <Checkbox id={"morning"} className={"collapseBtn"} />
                                    <Label htmlFor="morning">Morning</Label>
                                    <Checkbox id={"early_afternoon"} className={"collapseBtn"} />
                                    <Label htmlFor="early_afternoon">Early Afternoon</Label>
                                    <Checkbox id={"evening"} className={"collapseBtn"} />
                                    <Label htmlFor="evening">Evening</Label>
                                    <Checkbox id={"late_afternoon"} className={"collapseBtn"} />
                                    <Label htmlFor="late_afternoon">Late Afternoon</Label>
                                </div>
                            </div>
                            <FormMessage />
                        </FormItem>
                    </div>

                    <h4 className={"major"}>Recurring Services</h4>
                    <FormItem className={"addPad"}>
                        <FormLabel className={"smallPadBottom"}>Would you like recurring services?</FormLabel>
                        <FormDescription className={"hidden"}>
                            Would you like Recurring Services?
                        </FormDescription>
                        <RadioGroup defaultValue="option-one" className={"flex flex-row"}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one" className={"collapseBtn"}/>
                                <Label htmlFor="option-one">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-two" id="option-two" className={"collapseBtn"} />
                                <Label htmlFor="option-two">No</Label>
                            </div>
                        </RadioGroup>
                        <FormMessage />
                    </FormItem>

                    <FormItem className={"addPad"}>
                        <FormLabel className={"smallPadBottom"}>At What Frequency?</FormLabel>
                        <FormDescription className={"hidden"}>
                            Would you like Recurring Services?
                        </FormDescription>
                        <Select className={"forceFlex"}>
                            <SelectTrigger className={"forceFlex"}>
                                <SelectValue placeholder="Frequency Options" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="biweekly">Bi-Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>

                    <div className="flex items-start gap-3 addPadTopLarge">
                        <div className="grid gap-2">
                            <Checkbox id="terms" className={"collapseBtn"}  />
                            <Label htmlFor="terms">Accept terms and conditions</Label>
                            <p className="text-muted-foreground text-sm">
                                By clicking this checkbox, you agree to the terms and conditions.
                            </p>
                        </div>
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
