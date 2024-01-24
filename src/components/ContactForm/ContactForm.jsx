import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "./ContactForm.module.css";
import { Button } from "react-bootstrap";

const ContactForm = () => {
  const form = useRef();
  const [step, setStep] = useState(1);

  // State for form fields
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    from_email: "",
    phone: "",
    instagram_telegram: "",
    body_weight: "",
    best_sq: "",
    best_bp: "",
    best_dl: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kj8pd1c",
        "template_dyqopou",
        formData,
        "BPwHVQ2oWCbe07BQG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormData({
      first_name: "",
      last_name: "",
      from_email: "",
      phone: "",
      instagram_telegram: "",
      body_weight: "",
      best_sq: "",
      best_bp: "",
      best_dl: "",
      message: "",
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={style.msform}>
      {/* progressbar */}
      <ul className={style.progressBar}>
        <li
          className={step === 1 || step === 2 || step === 3 ? style.active : ""}
          onClick={() => setStep(1)}
        >
          Account Setup
        </li>
        <li
          className={step === 2 || step === 3 ? style.active : ""}
          onClick={() => setStep(2)}
        >
          Social Profiles
        </li>
        <li
          className={step === 3 ? style.active : ""}
          onClick={() => setStep(3)}
        >
          Personal Details
        </li>
      </ul>

      {/* fieldsets */}
      {step === 1 && (
        <fieldset className={style.fieldset}>
          <h2 className={style.fsTitle}>Please fill out this information</h2>
          <h3 className={style.fsSubtitle}>This is step 1</h3>
          <label className={style.fsTitle}> First Name</label>
          <input
            type="text"
            name="first_name"
            className={style.input}
            value={formData.first_name}
            onChange={handleChange}
          />
          <label className={style.fsTitle}> Last Name</label>
          <input
            type="text"
            name="last_name"
            className={style.input}
            value={formData.last_name}
            onChange={handleChange}
          />

          <Button
            type="button"
            name="next"
            value="Next"
            onClick={handleNext}
            className={style.button_next}
          >
            Next
          </Button>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className={style.fieldset}>
          <h2 className={style.fsTitle}>Social Profiles</h2>
          <h3 className={style.fsSubtitle}>
            Your presence on the social network
          </h3>
          <label className={style.fsTitle}>Email</label>
          <input
            type="email"
            name="from_email"
            className={style.input}
            value={formData.from_email}
            onChange={handleChange}
          />
          <label className={style.fsTitle}>Phone</label>
          <input
            type="text"
            name="phone"
            className={style.input}
            value={formData.phone}
            onChange={handleChange}
          />
          <label className={style.fsTitle}>Instagram/Telegram</label>
          <input
            type="text"
            name="instagram_telegram"
            className={style.input}
            value={formData.instagram_telegram}
            onChange={handleChange}
          />

          <Button
            type="button"
            name="previous"
            value="Previous"
            onClick={handlePrevious}
            className={style.button_next}
          >
            {" "}
            Previous
          </Button>
          <Button
            type="button"
            name="next"
            value="Next"
            onClick={handleNext}
            className={style.button}
          >
            {" "}
            Next{" "}
          </Button>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className={style.fieldset}>
          <h2 className={style.fsTitle}>Personal Details</h2>
          <h3 className={style.fsSubtitle}>
            Please type your current body weight and results in kg
          </h3>

          <label className={style.fsTitle}>Body weight</label>
          <input
            type="text"
            name="body_weight"
            className={style.input}
            value={formData.body_weight}
            onChange={handleChange}
          />
          <label className={style.fsTitle}>Best squat</label>
          <input
            type="text"
            name="best_sq"
            className={style.input}
            value={formData.best_sq}
            onChange={handleChange}
          />
          <label className={style.fsTitle}>Best bench-press</label>
          <input
            type="text"
            name="best_bp"
            className={style.input}
            value={formData.best_bp}
            onChange={handleChange}
          />
          <label className={style.fsTitle}>Best deadlift</label>
          <input
            type="text"
            name="best_dl"
            className={style.input}
            value={formData.best_dl}
            onChange={handleChange}
          />
          <label className={style.fsTitle}>Message</label>
          <textarea
            name="message"
            className={style.input}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <Button
            type="button"
            name="previous"
            value="Previous"
            onClick={handlePrevious}
            className={style.button_next}
          >
            {" "}
            Previous{" "}
          </Button>
          <Button type="submit" className={style.button}>
            Submit
          </Button>
        </fieldset>
      )}
    </form>
  );
};

export default ContactForm;
