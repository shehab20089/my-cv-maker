import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function ExperienceForm({ onChange }) {
  const [experienceForms, setExperienceForms] = useState([{ id: 1 }]);
  useEffect(() => {
    onChange(experienceForms);
  }, [experienceForms]);

  const handleEducationFormItemChange = (data) => {
    const educationFormIndex = experienceForms.findIndex(
      (f) => f.id === data.id
    );
    const newArr = [...experienceForms];
    newArr[educationFormIndex] = data;
    setExperienceForms(newArr);
  };
  const handleAddEduForm = () => {
    setExperienceForms([
      ...experienceForms,
      { id: experienceForms.length + Date.now() },
    ]);
  };
  const handleFormItemDelete = (data) => {
    setExperienceForms([...experienceForms.filter((fi) => fi.id !== data.id)]);
  };
  return (
    <div>
      <h2>Experience Info</h2>
      {experienceForms.map((eduF) => (
        <ExperienceFormItem
          onChange={handleEducationFormItemChange}
          onDelete={handleFormItemDelete}
          data={eduF}
          key={eduF.id}
        />
      ))}
      <button onClick={handleAddEduForm}>Add new Experience</button>
    </div>
  );
}

function ExperienceFormItem({ data, onChange, onDelete }) {
  const { register, watch } = useForm({
    defaultValues: {
      ...data,
    },
  });
  watch((data) => {
    onChange(data);
  });
  function deleteItem() {
    onDelete(data);
  }
  return (
    <form>
      <div className="form-item">
        <input type="text" {...register("role")} placeholder="Type Your Role" />
      </div>
      <div className="form-item">
        <input
          type="text"
          {...register("companyName")}
          placeholder="Type Company Name"
        />
      </div>
      <div className="form-item">
        <input
          type="text"
          {...register("location")}
          placeholder="Type company location"
        />
      </div>
      <div className="form-item">
        <textarea
          style={{ width: "100%", padding: "1rem" }}
          name=""
          id=""
          rows="10"
          {...register("description")}
          placeholder="Type Description"
        ></textarea>
      </div>
      <div className="form-item">
        <input
          type="text"
          {...register("startTime")}
          placeholder="Type Start Month/Year"
        />
      </div>
      <div className="form-item">
        <input
          type="text"
          {...register("endTime")}
          placeholder="Type end Month/Year"
        />
      </div>

      <button className="delete-btn" onClick={deleteItem} type="button">
        Delete Item
      </button>
    </form>
  );
}
