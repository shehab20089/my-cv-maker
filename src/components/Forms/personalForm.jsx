import React from "react";
import { useForm } from "react-hook-form";

export function PersonalForm({ onChange }) {
  const { register, watch } = useForm();

  watch((data) => {
    onChange(data);
  });
  return (
    <div>
      <h2>Personal Info</h2>
      <form>
        <div className="form-item">
          <input
            type="text"
            {...register("fullName")}
            placeholder="Type Your Full Name"
          />
        </div>
        <div className="form-item">
          <input
            type="tel"
            {...register("phone")}
            placeholder="Type Your Phone"
          />
        </div>
        <div className="form-item">
          <input
            type="email"
            {...register("email")}
            placeholder="Type Your Email"
          />
        </div>

        <div className="form-item">
          <input
            type="text"
            placeholder="Type Your Github Link"
            {...register("githubLink", {})}
          />
        </div>
        <div className="form-item">
          <input
            type="text"
            placeholder="Type Your linkedIn Link"
            {...register("linkedInLink", {})}
          />
        </div>
      </form>
    </div>
  );
}
