import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function EducationForm({ onChange }) {
  // console.log("hello");
  const [educationForms, setEducationForms] = useState([{ id: 1 }]);
  useEffect(() => {
    onChange(educationForms);
  }, [educationForms]);

  const handleEducationFormItemChange = (data) => {
    const educationFormIndex = educationForms.findIndex(
      (f) => f.id === data.id
    );
    const newArr = [...educationForms];
    newArr[educationFormIndex] = data;
    setEducationForms(newArr);
  };
  const handleAddEduForm = () => {
    setEducationForms([
      ...educationForms,
      { id: educationForms.length + Date.now() },
    ]);
  };
  const handleFormItemDelete = (data) => {
    setEducationForms([...educationForms.filter((fi) => fi.id !== data.id)]);
  };
  return (
    <div>
      <h2>Education Info</h2>
      {educationForms.map((eduF) => (
        <EductionFormItem
          onChange={handleEducationFormItemChange}
          onDelete={handleFormItemDelete}
          data={eduF}
          key={eduF.id}
        />
      ))}
      <button onClick={handleAddEduForm}>Add new Education</button>
    </div>
  );
}

function EductionFormItem({ data, onChange, onDelete }) {
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
        <input
          type="text"
          {...register("schoolName")}
          placeholder="Type Your University Name"
        />
      </div>
      <div className="form-item">
        <input type="text" {...register("degree")} placeholder="Type Degree" />
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

      <div className="form-item">
        <input
          type="text"
          placeholder="Type Your grade"
          {...register("grade", {})}
        />
      </div>
      <button className="delete-btn" onClick={deleteItem} type="button">
        Delete Item
      </button>
    </form>
  );
}
