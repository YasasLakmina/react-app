import React, { FormEvent, useRef } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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
        <input
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is requied.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 3 characters</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
