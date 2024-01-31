import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import style from "./ContactForm.module.css";
import { Button, Modal } from "react-bootstrap";
import Pre from "../Pre";
import { useProjectContext } from "../ProjectContext";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const { selectedProject, setProject, selectedProgram, setProgram } =
    useProjectContext();
  const form = useRef();
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // State for form fields
  const [formData, setFormData] = useState({
    service: selectedProject,
    programs: selectedProgram,
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
  const [formErrors, setFormErrors] = useState({
    service: false,
    programs: false,
    first_name: false,
    last_name: false,
    from_email: false,
    phone: false,
    instagram_telegram: false,
    body_weight: false,
    best_sq: false,
    best_bp: false,
    best_dl: false,
  });

  const [errorMessages] = useState({
    service: "Choose your sevice please",
    programs: "Choose your program please",
    first_name: "First name is required",
    last_name: "Last name is required",
    from_email: "Email is required",
    phone: "Phone is required",
    body_weight: "Body weight is required",
    best_sq: "Best squat is required",
    best_bp: "Best bench is required",
    best_dl: "Best deadlift is required",
  });
  const errors = {
    service: formData.service == null,
    programs:
      formData.service === t("services.trainingPlan") &&
      formData.programs === null,

    first_name: formData.first_name.trim() === "",
    last_name: formData.last_name.trim() === "",
    from_email: formData.from_email.trim() === "",
    phone: formData.phone.trim() === "",
    body_weight: formData.body_weight.trim() === "",
    best_sq: formData.best_sq.trim() === "",
    best_bp: formData.best_bp.trim() === "",
    best_dl: formData.best_dl.trim() === "",
  };
  // useEffect(() => {
  //   switch (true) {
  //     case formErrors.first_name ||
  //       formErrors.last_name ||
  //       formErrors.service ||
  //       formErrors.programs:
  //       setStep(1);
  //       break;
  //     case formErrors.phone || formErrors.from_email:
  //       setStep(2);
  //       break;
  //     case formErrors.body_weight ||
  //       formErrors.best_sq ||
  //       formErrors.best_bp ||
  //       formErrors.best_dl:
  //       setStep(3);

  //     default:
  //   }
  // }, [formErrors]);
  const sendEmail = async (e) => {
    e.preventDefault();

    setFormErrors(errors);
    if (Object.values(errors).some((error) => error)) {
      if (
        errors.first_name ||
        errors.last_name ||
        errors.service ||
        errors.programs
      ) {
        setStep(1);
      } else if (errors.phone || errors.from_email) {
        setStep(2);
      } else {
        setStep(3);
      }
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        "service_kj8pd1c",
        "template_dyqopou",
        formData,
        "BPwHVQ2oWCbe07BQG"
      );

      // Show the modal on successful submission
      setShowModal(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    setFormData({
      service: selectedProject,
      programs: selectedProgram,
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
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "",
    }));
  };
  const handleCloseModal = () => {
    // Close the modal and reset any necessary state
    setShowModal(false);
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail} className={style.msform}>
        {/* progressbar */}
        <ul className={style.progressBar}>
          <li
            className={
              step === 1 || step === 2 || step === 3 ? style.active : ""
            }
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
            <label className={style.fsTitle}>
              {" "}
              Service <span className={style.form_name}> *</span>
            </label>
            <select
              type="select"
              name="service"
              className={
                formErrors.service
                  ? `${style.input_select} ${style.error}`
                  : style.input_select
              }
              value={formData.service || ""}
              onChange={handleChange}
            >
              {" "}
              <option className={style.dropdown_item} value="" disabled>
                Select a service
              </option>
              <option
                className={style.dropdown_item}
                value={t("services.onlineTraining")}
              >
                {t("services.onlineTraining")}
              </option>
              <option
                className={style.dropdown_item}
                value={t("services.consultation")}
              >
                {t("services.consultation")}
              </option>
              <option
                className={style.dropdown_item}
                value={t("services.trainingPlan")}
              >
                {t("services.trainingPlan")}
              </option>
            </select>
            {formErrors.service && (
              <span className={style.error_message}>
                {errorMessages.service}
              </span>
            )}
            {formData.service === t("services.trainingPlan") && (
              <>
                <label className={style.fsTitle}>
                  {" "}
                  Programs <span className={style.form_name}> *</span>
                </label>
                <select
                  type="select"
                  name="programs"
                  className={
                    formErrors.programs
                      ? `${style.input_select} ${style.error}`
                      : style.input_select
                  }
                  value={formData.programs || ""}
                  onChange={handleChange}
                >
                  {" "}
                  <option className={style.dropdown_item} value="" disabled>
                    Select a program
                  </option>
                  <option value={t("freePrograms.powerliftingProgram")}>
                    {t("freePrograms.powerliftingProgram")}
                  </option>
                  <option value={t("freePrograms.benchPressProgram")}>
                    {t("freePrograms.benchPressProgram")}
                  </option>
                  <option value={t("powerliftingPrograms.powerliftingProgram")}>
                    {" "}
                    {t("powerliftingPrograms.powerliftingProgram")}
                  </option>
                  <option
                    value={t("powerliftingPrograms.powerliftingProgram2")}
                  >
                    {" "}
                    {t("powerliftingPrograms.powerliftingProgram2")}
                  </option>
                </select>
                {formErrors.programs && (
                  <span className={style.error_message}>
                    {errorMessages.programs}
                  </span>
                )}
              </>
            )}
            <label className={style.fsTitle}>
              {" "}
              First Name <span className={style.form_name}> *</span>
            </label>
            <input
              type="text"
              name="first_name"
              className={
                formErrors.first_name
                  ? `${style.input} ${style.error}`
                  : style.input
              }
              value={formData.first_name}
              onChange={handleChange}
            />
            {formErrors.first_name && (
              <span className={style.error_message}>
                {errorMessages.first_name}
              </span>
            )}
            <label className={style.fsTitle}>
              {" "}
              Last Name <span className={style.form_name}> *</span>
            </label>
            <input
              type="text"
              name="last_name"
              className={
                formErrors.last_name
                  ? `${style.input} ${style.error}`
                  : style.input
              }
              value={formData.last_name}
              onChange={handleChange}
            />
            {formErrors.last_name && (
              <span className={style.error_message}>
                {errorMessages.last_name}
              </span>
            )}

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
            <label className={style.fsTitle}>
              Email <span className={style.form_name}> *</span>
            </label>
            <input
              type="email"
              name="from_email"
              className={
                formErrors.from_email
                  ? `${style.input} ${style.error}`
                  : style.input
              }
              value={formData.from_email}
              onChange={handleChange}
            />
            {formErrors.from_email && (
              <span className={style.error_message}>
                {errorMessages.from_email}
              </span>
            )}
            <label className={style.fsTitle}>
              Phone <span className={style.form_name}> *</span>
            </label>
            <input
              type="text"
              name="phone"
              className={
                formErrors.phone ? `${style.input} ${style.error}` : style.input
              }
              value={formData.phone}
              onChange={handleChange}
            />
            {formErrors.phone && (
              <span className={style.error_message}>{errorMessages.phone}</span>
            )}
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

            <label className={style.fsTitle}>
              Body weight <span className={style.form_name}> *</span>
            </label>

            <input
              type="text"
              name="body_weight"
              className={
                formErrors.body_weight
                  ? `${style.input} ${style.error}`
                  : style.input
              }
              value={formData.body_weight}
              onChange={handleChange}
            />
            {formErrors.body_weight && (
              <span className={style.error_message}>
                {errorMessages.body_weight}
              </span>
            )}

            <label className={style.fsTitle}>
              Best squat <span className={style.form_name}> *</span>
            </label>
            <input
              type="text"
              name="best_sq"
              className={
                formErrors.best_sq
                  ? `${style.input} ${style.error}`
                  : style.input
              }
              value={formData.best_sq}
              onChange={handleChange}
            />
            {formErrors.best_sq && (
              <span className={style.error_message}>
                {errorMessages.best_sq}
              </span>
            )}
            <label className={style.fsTitle}>
              Best bench-press <span className={style.form_name}> *</span>
            </label>
            <input
              type="text"
              name="best_bp"
              className={
                formErrors.best_bp
                  ? `${style.input} ${style.error}`
                  : style.input
              }
              value={formData.best_bp}
              onChange={handleChange}
            />
            {formErrors.best_bp && (
              <span className={style.error_message}>
                {errorMessages.best_bp}
              </span>
            )}
            <label className={style.fsTitle}>
              Best deadlift <span className={style.form_name}> *</span>
            </label>
            <input
              type="text"
              name="best_dl"
              className={
                formErrors.best_dl
                  ? `${style.input} ${style.error}`
                  : style.input
              }
              value={formData.best_dl}
              onChange={handleChange}
            />
            {formErrors.best_dl && (
              <span className={style.error_message}>
                {errorMessages.best_dl}
              </span>
            )}
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

      <Modal className={style.modal} show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Submission Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for submitting the form. Your information has been received.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className={style.preloaderOverlay}>
        <Pre load={loading} />
      </div>
    </>
  );
};

export default ContactForm;
