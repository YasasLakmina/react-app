import React, { FormEvent, useRef } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  /*this will check type is number and wether it is grater than 18*/
  age: z.number({ invalid_type_error: "Age field is required." }).min(18),
});

type FormData = z.infer<typeof schema>;

// interface FormData {
//   name: string;
//   age: number;
// }

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const nameref = useRef<HTMLInputElement>(null);
  const ageref = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     if (nameref.current !== null && ageref.current !== null) {
  //       person.name = nameref.current.value;
  //       person.age = parseInt(ageref.current.value);
  //       console.log(person);
  //     }
  //   };

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="text" className="form-lable">
          Name
        </label>
        {/* <input
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          className="form-control"
        /> */}
        {/* {errors.name?.type === "required" && (
          <p className="text-danger">The name field is requied.</p>
        )} */}
        <input {...register("name")} type="text" className="form-control" />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", {
            valueAsNumber: true /* this will convert the type to string*/,
          })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
