import React, { FormEvent, useRef } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

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
        <input {...register("name")} type="text" className="form-control" />
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
