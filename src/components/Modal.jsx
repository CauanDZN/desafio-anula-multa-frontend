import clsx from "clsx";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";
import classes from "./Modal.module.css";

export default function Modal({ children, className }) {
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const back = (e) => {
    e.stopPropagation();
    navigate(-1); // This replaces history.goBack()
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        navigate(-1); // This replaces history.goBack()
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navigate]);

  return (
    <div className={classes.container}>
      <div className={classes.overlay} />
      <div className={clsx(classes.modal, className)} ref={modalRef}>
        {children}
        <button className={classes.closeButton} onClick={back}>
          <Icon name="close" />
        </button>
      </div>
    </div>
  );
}
