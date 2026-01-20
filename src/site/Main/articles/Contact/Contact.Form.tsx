import {useState} from "react";
import "tailwindcss";
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm, type UseFormReturn, useWatch} from "react-hook-form";
import {z} from "zod";
import "../../../../assets/css/main.css";
import {
    Form,
    FormControl,
    FormDescription,
    FormItem,
    FormField,
    FormLabel,
    FormMessage,
} from "../../../../components/ui/form.tsx";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../../../components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../../components/ui/select";
import { Input } from "../../../../components/ui/input";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Button } from "../../../../components/ui/button";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group"
import {Textarea} from "../../../../components/ui/textarea.tsx";
import { Calendar } from "../../../../components/ui/calendar";
import { format } from "date-fns";
import {TermsAndConditionsArticle} from "../TermsAndConditions/TermsAndConditions.Article.tsx";
import {CleaningSuppliesPolicyArticle} from "../CleaningSuppliesPolicy/CleaningSuppliesPolicy.Article.tsx";

const formSchema = z.object({
    client_name: z.string().max(150, {
        message: "Client name must be no more than 150 characters.",
    }),
    client_requested_service_date: z.string().max(100, {
        message: "Date cannot be more than 100 characters.",
    }),
    client_service_address: z.string().max(320, {
        message: "Client address must be no more than 320 characters.",
    }),
    client_contact_phone: z.string().max(12, {
        message: "Client phone must be no more than 12 characters.",
    }),
    client_contact_email: z.string().max(300, {
        message: "Client email must be no more than 300 characters."
    }),
    client_referral_relationship: z.string().max(300, {
        message: "Client email must be no more than 300 characters."
    }),
    client_referral_from: z.string().max(150, {
        message: "Client name must be no more than 150 characters.",
    }),
    client_referral_contact_email_or_phone: z.string().max(300, {
        message: "Client name must be no more than 300 characters.",
    }),
    client_requests_recurring_services: z.string().max(25, {
        message: "Please make a selection",
    }),
    client_recurring_request_frequency: z.string().max(300, {
        message: "Please make a selection",
    }),
    client_additional_notes: z.string().max(500, {
        message: "Additional Notes must not exceed 500 characters.",
    }),
    client_accepts_toc: z.boolean({ message: "You must accept the terms and conditions."}),
    client_accepts_cleaning_supplies_agreement: z.boolean({ message: "You must accept the Cleaning Supplies Policy."}),
    client_scheduling_day_preferences: z.object({
        monday: z.boolean(),
        tuesday: z.boolean(),
        wednesday: z.boolean(),
        thursday: z.boolean(),
        friday: z.boolean(),
        saturday: z.boolean(),
        sunday: z.boolean(),
    }),
    client_scheduling_time_preferences: z.object({
        morning: z.boolean(),
        early_afternoon: z.boolean(),
        late_afternoon: z.boolean(),
        evening: z.boolean(),
    }),
});

function ConditionalSection_RecurrenceFrequency({ form }: { form: UseFormReturn<z.infer<typeof formSchema>> }) {
    const showSection = useWatch({
        control: form.control,
        name: "client_requests_recurring_services", // Subscribe specifically to this field
        defaultValue: "yes_to_recurring_services"   // Initial value
    });

    return showSection === "yes_to_recurring_services" ? (
        <FormField
            control={form.control}
            name={"client_recurring_request_frequency"}
            render={({field}) => (
                <FormItem className={"addPad"}>
                    <FormLabel className={"smallPadBottom"}>At What Frequency?</FormLabel>
                    <FormDescription className={"hidden"}>
                        Would you like Recurring Services?
                    </FormDescription>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                    >
                        <SelectTrigger className={"forceFlex"}>
                            <SelectValue placeholder="Frequency Options" />
                        </SelectTrigger>
                        <SelectContent className={"select_content_box"}>
                            <SelectItem value="weekly" className={"select_content_box_option"}>Weekly</SelectItem>
                            <SelectItem value="biweekly" className={"select_content_box_option"}>Bi-Weekly</SelectItem>
                            <SelectItem value="monthly" className={"select_content_box_option"}>Monthly</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    ) : null;
}

export const ContactForm = () => {
    const
        [viewingToc, setViewingToc] = useState(false),
        [viewingCsp, setViewingCsp] = useState(false),
        [formSubmitted, setFormSubmitted] = useState(false),
        form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                client_name: "",
                client_requested_service_date: "",
                client_contact_phone: "",
                client_contact_email: "",
                client_service_address: "",
                client_referral_from: "",
                client_referral_contact_email_or_phone: "",
                client_referral_relationship: "",
                client_scheduling_day_preferences: {
                    monday: false,
                    tuesday: false,
                    wednesday: false,
                    thursday: false,
                    friday: false,
                    saturday: false,
                    sunday: false
                },
                client_scheduling_time_preferences: {
                    morning: false,
                    early_afternoon: false,
                    late_afternoon: false,
                    evening: false
                },
                client_requests_recurring_services: "yes_to_recurring_services",
                client_recurring_request_frequency: "weekly",
                client_additional_notes: "No notes provided.",
                client_accepts_toc: false,
                client_accepts_cleaning_supplies_agreement: false
            }
        });

    const sendEmail = async (formData: FormData, values: z.infer<typeof formSchema>) => {
        //event.preventDefault();
        const
            serviceAddress = values.client_service_address,
            subjectParser = values.client_requests_recurring_services,
            isRecurringServiceRequest = subjectParser === "yes_to_recurring_services",
            subject = isRecurringServiceRequest ?
                `0SR - ${values.client_recurring_request_frequency} - ${serviceAddress}` :
                `1SR - ${serviceAddress}`;

        formData.append("access_key", "1dc25855-b299-4927-ad4f-d84fe593dc72");
        formData.append('subject', subject);
        formData.append('email', "info@barecleanco.com");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object, null, 2);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.error("Email Send Failed...", err);
        }
    }

    const handleAcceptedTerms = ({ acceptedForm }: { acceptedForm: string }) => {
        if(acceptedForm === "toc") {
            setViewingToc(false);
            form.setValue("client_accepts_toc", true);
        } else if (acceptedForm === "csp") {
            setViewingCsp(false);
            form.setValue("client_accepts_cleaning_supplies_agreement", true);
        } else {
            setViewingToc(false);
            setViewingCsp(false);
        }
    };

    const capitalizeFirstLetter = (string: string) => {
        if (string.length === 0) {
            return string;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const getTrueKeysEntries = (obj: object) => {
        return Object.entries(obj)
            .filter(([, value]) => value === true)
            .map(([key]) => capitalizeFirstLetter(key));
    };

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Form Values? ", values);

        const formData = new FormData();

        const recurringServicesRequested = values.client_requests_recurring_services === "yes_to_recurring_services" ?
            `Yes, recurring service requested at a ${values.client_recurring_request_frequency} basis.` :
            "No, this is a one-time request.";

        const
            dayPreferences = getTrueKeysEntries(values.client_scheduling_day_preferences),
            timePreferences = getTrueKeysEntries(values.client_scheduling_time_preferences);

        formData.append("client", `${values.client_name}\n${values.client_service_address}\n${values.client_contact_email} / ${values.client_contact_phone}`);
        formData.append("referral", `${values.client_referral_from}\n${values.client_referral_contact_email_or_phone}\n${values.client_referral_relationship}`);
        formData.append("Requested Service Date", values.client_requested_service_date);
        formData.append("Recurring Services Requested", recurringServicesRequested);
        formData.append("Day Preferences", dayPreferences.join(", "));
        formData.append("Time Preferences", timePreferences.join(", ").replaceAll("_", " "));
        formData.append("Additional Notes", values.client_additional_notes);
        formData.append("Client Acknowledged", "Terms and Conditions\nCleaning Supplies Policy");

        sendEmail(formData, values).then(() => {
            console.log("Called Send Email...");
            setFormSubmitted(true);
        });
    }

    return !formSubmitted ? (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={"fullWidth contact_form"}>
                    <h4 className={"major"}>Client Info</h4>
                    <FormField
                        control={form.control}
                        name={"client_name"}
                        render={({field}) => (
                            <FormItem itemID={"clientName"}>
                                <FormLabel className={"label"}>Client Full Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Full Name" type={"text"} />
                                </FormControl>
                                <FormDescription className={"input_description"}>
                                    This is your full name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name={"client_requested_service_date"}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={"label"}>Tentative Service Date</FormLabel>
                                <FormControl>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                data-empty={!field.value}
                                                className="data-[empty=true]:text-muted-foreground font-normal"
                                            >
                                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <Calendar
                                                mode="single"
                                                selected={new Date(field.value)}
                                                onSelect={(date) => {
                                                    console.log("Date? ", date);
                                                    field.onChange(`${date}`);
                                                }}
                                                defaultMonth={new Date()}
                                                className={"date_picker_calendar"}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormControl>
                                <FormDescription className={"input_description"}>
                                    When would you like to schedule your cleaning service?
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"client_service_address"}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={"label"}>Service Address</FormLabel>
                                <Input placeholder="123 Main Street, Phoenix AZ 85245" type={"text"} {...field} />
                                <FormDescription>
                                    This is the requested service address.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"client_contact_email"}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={"label"}>Email</FormLabel>
                                <Input placeholder="terry@gmail.com" type={"text"} {...field} />
                                <FormDescription>
                                    This is your email address.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"client_contact_phone"}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={"label"}>Phone</FormLabel>
                                <Input placeholder="+1 (480) 000-0000" type={"text"} {...field} />
                                <FormDescription>
                                    This is your contact phone number.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <h4 className={"major"}>Referral Info</h4>
                    <FormField
                        control={form.control}
                        name={"client_referral_from"}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={"label"}>Referred By</FormLabel>
                                <Input placeholder="John Smith" type={"text"} {...field} />
                                <FormDescription>
                                    This is who referred you to this service.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"client_referral_contact_email_or_phone"}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={"label"}>Referral Contact Number or Email</FormLabel>
                                <Input placeholder="Phone" type={"text"} {...field} />
                                <FormDescription>
                                    Please provide their phone number or email.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"client_referral_relationship"}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={"label"}>Relationship to the Referral</FormLabel>
                                <Input placeholder="Spouse" type={"text"} {...field} />
                                <FormDescription>
                                    What is your relationship to the person who referred you to this service?
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <h4 className={"major addMarginBottom"}>Scheduling Preferences</h4>
                    <FormLabel>Preferred Days</FormLabel>
                    <div className="flex flex-col addMarginBottom">
                        <div className={"flex flex-row flex-wrap gap-6 addMarginBottom"}>
                            <FormField
                                control={form.control}
                                name={"client_scheduling_day_preferences.monday"}
                                render={({field}) => (
                                    <FormItem>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col flex-wrap">
                                                <div className={"flex flex-row flex-wrap justify-start"}>
                                                    <div className={"flex flex-row items-center place-items-start"}>
                                                        <Checkbox
                                                            name={"monday"}
                                                            aria-label={"Monday"}
                                                            onCheckedChange={field.onChange}
                                                            className={"addSmallRightMargin"}
                                                        />
                                                        <span>Monday</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={"client_scheduling_day_preferences.tuesday"}
                                render={({field}) => (
                                    <FormItem>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col flex-wrap">
                                                <div className={"flex flex-row flex-wrap justify-start"}>
                                                    <div className={"flex flex-row items-center place-items-start"}>
                                                        <Checkbox
                                                            name={"tuesday"}
                                                            aria-label={"Tuesday"}
                                                            onCheckedChange={field.onChange}
                                                            className={"addSmallRightMargin"}
                                                        />
                                                        Tuesday
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={"client_scheduling_day_preferences.wednesday"}
                                render={({field}) => (
                                    <FormItem>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col flex-wrap">
                                                <div className={"flex flex-row flex-wrap justify-start"}>
                                                    <div className={"flex flex-row items-center place-items-start"}>
                                                        <Checkbox
                                                            name={"wednesday"}
                                                            aria-label={"Wednesday"}
                                                            onCheckedChange={field.onChange}
                                                            className={"addSmallRightMargin"}
                                                        />
                                                        Wednesday
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={"client_scheduling_day_preferences.thursday"}
                                render={({field}) => (
                                    <FormItem>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col flex-wrap">
                                                <div className={"flex flex-row flex-wrap justify-start"}>
                                                    <div className={"flex flex-row items-center place-items-start"}>
                                                        <Checkbox
                                                            name={"thursday"}
                                                            aria-label={"Thursday"}
                                                            className={"addSmallRightMargin"}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                        Thursday
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={"client_scheduling_day_preferences.friday"}
                                render={({field}) => (
                                    <FormItem>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col flex-wrap">
                                                <div className={"flex flex-row flex-wrap justify-start"}>
                                                    <div className={"flex flex-row items-center place-items-start"}>
                                                        <Checkbox
                                                            name={"friday"}
                                                            aria-label={"Friday"}
                                                            className={"addSmallRightMargin"}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                        Friday
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={"client_scheduling_day_preferences.saturday"}
                                render={({field}) => (
                                    <FormItem>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col flex-wrap">
                                                <div className={"flex flex-row flex-wrap justify-start"}>
                                                    <div className={"flex flex-row items-center place-items-start"}>
                                                        <Checkbox
                                                            name={"saturday"}
                                                            aria-label={"Saturday"}
                                                            className={"addSmallRightMargin"}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                        Saturday
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={"client_scheduling_day_preferences.sunday"}
                                render={({field}) => (
                                    <FormItem>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col flex-wrap">
                                                <div className={"flex flex-row flex-wrap justify-around"}>
                                                    <div className={"flex flex-row items-center place-items-start"}>
                                                        <Checkbox
                                                            name={"sunday"}
                                                            aria-label={"Sunday"}
                                                            className={"addSmallRightMargin"}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                        Sunday
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <FormLabel>Preferred Times</FormLabel>
                    <div className="flex flex-col addMarginBottom">
                        <div className={"flex flex-row flex-wrap gap-3 addMarginBottom justify-start"}>
                            <div className={"flex gap-3"}>
                                <FormField
                                    control={form.control}
                                    name={"client_scheduling_time_preferences.early_afternoon"}
                                    render={({field}) => (
                                        <FormItem>
                                            <div className="flex flex-col">
                                                <div className="flex flex-col flex-wrap">
                                                    <div className={"flex flex-row flex-wrap justify-start"}>
                                                        <div className={"flex flex-row items-center place-items-start"}>
                                                            <Checkbox
                                                                name={"early_afternoon"}
                                                                aria-label={"Early Afternoon"}
                                                                className={"addSmallRightMargin"}
                                                                onChange={field.onChange}
                                                                checked={field.value === true}
                                                                onCheckedChange={field.onChange}
                                                            />
                                                            Early Afternoon
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={"client_scheduling_time_preferences.late_afternoon"}
                                    render={({field}) => (
                                        <FormItem>
                                            <div className="flex flex-col">
                                                <div className="flex flex-col flex-wrap">
                                                    <div className={"flex flex-row flex-wrap justify-start"}>
                                                        <div className={"flex flex-row items-center place-items-start"}>
                                                            <Checkbox
                                                                name={"late_afternoon"}
                                                                aria-label={"Late Afternoon"}
                                                                onChange={field.onChange}
                                                                checked={field.value === true}
                                                                onCheckedChange={field.onChange}
                                                                className={"addSmallRightMargin"}
                                                            />
                                                            Late Afternoon
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className={"flex gap-3"}>
                                <FormField
                                    control={form.control}
                                    name={"client_scheduling_time_preferences.morning"}
                                    render={({field}) => (
                                        <FormItem>
                                            <div className="flex flex-col">
                                                <div className="flex flex-col flex-wrap">
                                                    <div className={"flex flex-row flex-wrap justify-start"}>
                                                        <div className={"flex flex-row items-center place-items-start"}>
                                                            <Checkbox
                                                                name={"morning"}
                                                                aria-label={"Morning"}
                                                                onChange={field.onChange}
                                                                checked={field.value === true}
                                                                onCheckedChange={field.onChange}
                                                                className={"addSmallRightMargin"}
                                                            />
                                                            <span>Morning</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={"client_scheduling_time_preferences.evening"}
                                    render={({field}) => (
                                        <FormItem>
                                            <div className="flex flex-col addLeftMargin">
                                                <div className="flex flex-col flex-wrap addLeftMargin">
                                                    <div className={"flex flex-row flex-wrap justify-start addLeftMargin"}>
                                                        <div className={"flex flex-row items-center place-items-start"}>
                                                            <Checkbox
                                                                name={"evening"}
                                                                aria-label={"Evening"}
                                                                className={"addSmallRightMargin"}
                                                                onChange={field.onChange}
                                                                checked={field.value === true}
                                                                onCheckedChange={field.onChange}
                                                            />
                                                            Evening
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    <h4 className={"major addMarginTop"}>Recurring Services</h4>
                    <FormField
                        control={form.control}
                        name={"client_requests_recurring_services"}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={"smallPadBottom"}>Would you like recurring services?</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className={"flex flex-row align-center addPadBottom justify-start"}
                                    >
                                        <FormItem className={"flex flex-row items-center"}>
                                            <RadioGroupItem value={"yes_to_recurring_services"} className={"radioOverride"} />
                                            Yes
                                        </FormItem>
                                        <FormItem className={"flex flex-row items-center addLeftMargin"}>
                                            <RadioGroupItem value={"no_to_recurring_services"} className={"radioOverride"} />
                                            No
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className={"addBottomMargin"}>
                        <ConditionalSection_RecurrenceFrequency form={form} />
                    </div>

                    <h4 className={"major addMarginTop"}>Additional Notes</h4>
                    <FormField
                        control={form.control}
                        name={"client_additional_notes"}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={"label smallPadBottom"}>Should we know anything else?</FormLabel>
                                <div className={"flex flex-col gap-2"}>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            value={field.value}
                                            onChange={field.onChange}
                                            placeholder="Type your message here."
                                        />
                                    </FormControl>
                                    <FormDescription className={"label"}>
                                        Additional Service Requests, Uniform Requests,...etc.
                                    </FormDescription>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <h4 className={"major addMarginTop"}>Agreements</h4>
                    <FormField
                        control={form.control}
                        name={"client_accepts_toc"}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={"smallPadBottom"}>Accept terms and conditions</FormLabel>
                                <div className={"flex flex-row justify-start"}>
                                    <FormControl>
                                        <Checkbox
                                            onChange={field.onChange}
                                            checked={field.value === true}
                                            onCheckedChange={field.onChange}
                                            disabled={true}
                                        />
                                    </FormControl>
                                    <FormDescription className={"addLeftMargin"}>
                                        <Button
                                            className={"smBtn"}
                                            type={"button"}
                                            onClick={() => {
                                        console.log("Toc was clicked!");
                                        setViewingToc(true);
                                        console.log("Past ToC?");
                                    }}>terms and conditions</Button>.
                                    </FormDescription>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name={"client_accepts_cleaning_supplies_agreement"}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={"smallPadBottom"}>Accept Cleaning Supplies Agreement</FormLabel>
                                <div className={"flex flex-row justify-start"}>
                                    <FormControl>
                                        <Checkbox
                                            onChange={field.onChange}
                                            checked={field.value === true}
                                            onCheckedChange={field.onChange}
                                            disabled={true}
                                        />
                                    </FormControl>
                                    <FormDescription className={""}>
                                        <Button type={"button"} className={"addLeftMargin smBtn"} onClick={() => {
                                        setViewingCsp(true);
                                    }}>Cleaning Supplies Agreement</Button>
                                    </FormDescription>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className={"flex justify-evenly paddingTopL"}>
                        <Button type="reset">Reset</Button>
                        <Button type="submit" className={"primary"}>Send</Button>
                    </div>
                </form>
            </Form>
            {
                viewingToc && (
                    <TermsAndConditionsArticle fromContactForm={true} handleAcceptedTerms={handleAcceptedTerms} />
                )
            }
            {
                viewingCsp && (
                    <CleaningSuppliesPolicyArticle fromContactForm={true} handleAcceptedTerms={handleAcceptedTerms} />
                )
            }
        </>
    ) : (
        <>
            <div>
                Your request has been successfully submitted. You will hear back from Bare and Clean Co within
                the next few business days. For any additional questions, you can send an email to
                info@barecleanco.com
            </div>
            <div>
                Thank you for your business!
            </div>
        </>
    );
};