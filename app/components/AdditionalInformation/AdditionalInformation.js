"use client";

import styles from "./AdditionalInformation.module.css";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

const AdditionalInformation = ({ sendCheck }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [messageOnCake, setMessageOnCake] = useState("");
  const [colorOfMessageText, setColorOfMessageText] = useState("");
  const [colorOfCake, setColorOfCake] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  useEffect(() => {
    const now = new Date();

    // Add 2 days
    const futureDate = new Date(now);
    futureDate.setDate(futureDate.getDate() + 2);

    // Format date: YYYY-MM-DD
    const date = futureDate.toISOString().split("T")[0];

    // Format time: HH:MM
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const time = `${hours}:${minutes}`;

    setPickupDate(date);
    setPickupTime(time);
  }, []);
  useEffect(() => {
    const isNameValid = name.trim() !== "";
    const isDateValid = pickupDate.trim() !== "";
    const isTimeValid = pickupTime.trim() !== "";

    const isPhoneValid = /^\d{7,15}$/.test(phoneNumber);
    // simple check: only digits, 7-15 digits long (adjust as needed)

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (
      isNameValid &&
      isPhoneValid &&
      isEmailValid &&
      isTimeValid &&
      isDateValid
    ) {
      sendCheck(
        true,
        name,
        phoneNumber,
        email,
        messageOnCake,
        colorOfMessageText,
        colorOfCake,
        additionalInformation,
        pickupDate,
        pickupTime
      );
    } else {
      sendCheck(false);
    }
  }, [name, phoneNumber, email]);

  return (
    <div className={styles.mainSizeSelectionDiv}>
      <div style={{ marginBottom: "20px" }}>
        <InputTextBox
          inputType={"text"}
          placeHolder={"Message on cake"}
          helpText={"Tell us what message you'd like on the cake (Optional)"}
          inputData={(newMessage) => {
            setMessageOnCake(newMessage);
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <InputTextBox
          inputType={"text"}
          placeHolder={"Color of message on cake"}
          helpText={
            "Tell us your preferred message color if you'd like something different from the cake picture (Optional)"
          }
          inputData={(newColorMessage) => {
            setColorOfMessageText(newColorMessage);
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <InputTextBox
          inputType={"text"}
          placeHolder={"Color of cake"}
          helpText={
            "Tell us your preferred cake color if you'd like something different from the cake picture (Optional)"
          }
          inputData={(newColorOfCake) => {
            setColorOfCake(newColorOfCake);
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <InputTextBox
          inputType={"text"}
          placeHolder={"Additional Information"}
          helpText={
            "Tell us if you want to add any other information (Optional)"
          }
          inputData={(newAdditionalInfo) => {
            setAdditionalInformation(newAdditionalInfo);
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <InputBox
          inputType={"text"}
          placeHolder={"Name"}
          helpText={"Required*"}
          inputData={(newName) => {
            setName(newName);
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <InputBox
          inputType={"date"}
          placeHolder={
            "When would you like to pick up your cake? Let us know the date!"
          }
          helpText={"Required*"}
          inputData={(newName) => {
            setPickupDate(newName);
          }}
          value={pickupDate}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <InputBox
          inputType={"time"}
          placeHolder={
            "When would you like to pick up your cake? Let us know the time!"
          }
          helpText={"Required*"}
          inputData={(newName) => {
            setPickupTime(newName);
          }}
          value={pickupTime}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <InputBox
          inputType={"number"}
          placeHolder={"Phone Number"}
          helpText={
            "Our team will contact you at this number if they have any questions (Required*)"
          }
          inputData={(newPhone) => {
            setPhoneNumber(newPhone);
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <InputBox
          inputType={"email"}
          placeHolder={"Email"}
          helpText={
            "Our team will send you confirmation at this email (Required*)"
          }
          inputData={(newEmail) => {
            setEmail(newEmail);
          }}
        />
      </div>
    </div>
  );
};

const InputTextBox = ({ inputType, placeHolder, helpText, inputData }) => {
  const handleChange = (e) => {
    inputData(e.target.value);
  };
  return (
    <div className={styles.inputTextMainDiv}>
      <div className={styles.inputTextSecondMainDiv}>
        <textarea
          rows="4"
          cols="50"
          className={styles.inputTextBox}
          type={inputType}
          onChange={handleChange}
          placeholder={placeHolder}
        ></textarea>
        <small className={styles.helpText}>{helpText}</small>
      </div>
    </div>
  );
};
const InputBox = ({ inputType, placeHolder, helpText, inputData, value }) => {
  const handleChange = (e) => {
    inputData(e.target.value);
  };

  return (
    <div className={styles.inputTextMainDiv}>
      <div className={styles.inputTextSecondMainDiv}>
        {inputData === "date" ? (
          <input
            className={styles.inputTextBox}
            type={inputType}
            onChange={handleChange}
            placeholder={placeHolder}
            value={value}
            min={value}
          ></input>
        ) : (
          <input
            className={styles.inputTextBox}
            type={inputType}
            onChange={handleChange}
            placeholder={placeHolder}
            value={value}
          ></input>
        )}
        <small className={styles.helpText}>{helpText}</small>
      </div>
    </div>
  );
};
export { AdditionalInformation };
