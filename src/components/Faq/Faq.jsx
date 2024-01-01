import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Faq.module.css";
import { styled } from "@mui/system";

function Faq({ title, data }) {
  const StyledIcon = styled(ExpandMoreIcon)({
    color: `var(--color-primary)`,
    width: "35px",
    height: "40px",
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <div className={styles.container}>
        {Object.keys(data).map((faqCategory) =>
          data[faqCategory].map((faq, innerIndex) => (
            <Accordion key={innerIndex} className={styles.accordian}>
              <AccordionSummary
                expandIcon={<StyledIcon />}
                aria-controls={`panel-content-${innerIndex}`}
                id={`panel-header-${innerIndex}`}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.answer}>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))
        )}
      </div>
    </div>
  );
}

export default Faq;
