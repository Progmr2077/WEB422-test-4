import React from "react";
import { useForm } from "react-hook-form";

const StudentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Student Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-body">
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            className="form-input"
            {...register("fullName", { required: "Full Name is required" })}
          />
          {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
        </div>

        <div className="form-group">
          <label>Student ID:</label>
          <input
            type="number"
            className="form-input"
            {...register("studentId", {
              required: "Student ID is required",
              valueAsNumber: true,
            })}
          />
          {errors.studentId && <p className="error-message">{errors.studentId.message}</p>}
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            className="form-input"
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label>Program:</label>
          <select className="form-input" {...register("program", { required: "Please select a program" })}>
            <option value="">Select Program</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Business">Business</option>
          </select>
          {errors.program && <p className="error-message">{errors.program.message}</p>}
        </div>

        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;