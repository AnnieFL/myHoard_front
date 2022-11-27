import React from "react"
import { FormMain, FormContent, Field, Input, Select, Option, InputFile, LabelFile, SubmitButton, FormMessage, FormLink } from "../../styled"

export default function Form(props) {
    return (
        <FormMain>
            <FormContent onSubmit={(event) => props.onSubmit(event)}>
                {props.fields.map((field, fieldIndex) => (
                    <Field key={fieldIndex}>
                        {field.type !== "select" && field.type !== "file" &&
                            <Input
                                type={field.type}
                                value={field.value}
                                placeholder={field.placeholder}
                                onChange={(e) => field.onChange(e.currentTarget.value)}
                            />
                        }
                        {field.type === "select" &&
                            <Select
                                placeholder={field.placeholder}
                                value={field.value}
                                onChange={(e) => field.onChange(e.currentTarget.value)}
                            >
                                {field.options.map((option) => (
                                    <Option value={option.value}>{option.label}</Option>
                                ))}
                            </Select>
                        }
                        {field.type === "file" &&
                        <>
                            <InputFile
                                id={field.placeholder}
                                type={field.type}
                                value={field.value}
                                accept={field.accept}
                                onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : "")}
                            />
                            <LabelFile htmlFor={field.placeholder}>
                                {field.placeholder}
                            </LabelFile>
                        </>
                        }
                    </Field>
                ))}
                <SubmitButton type="submit">{props.buttonLabel}</SubmitButton>
                {props.login &&
                    <FormMessage>Don't have an account? <FormLink to="/login" state= {{signup: true}}>Sign up</FormLink> then!</FormMessage>
                }
                {props.signup &&
                    <FormMessage>Already got an account? <FormLink to="/login">Log in</FormLink> then!</FormMessage>
                }
            </FormContent>
        </FormMain>
    )
}