import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Faq.module.css";

function Faq({ title, data }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <div className={styles.container}>
        {Object.keys(data).map((faqCategory) =>
          data[faqCategory].slice(0, 2).map((faq, innerIndex) => (
            <Accordion
              key={innerIndex}
              style={{
                borderRadius: `0.625rem`,
                border: `1px solid var(--color-white)`,
              }}
              className={styles.accordian}
            >
              <AccordionSummary
                style={{
                  borderRadius: `0.625rem`,
                  backgroundColor: `var(--color-black)`,
                  color: `var(--color-white)`,

                  height: `4.875rem`,
                }}
                expandIcon={
                  <ExpandMoreIcon
                    style={{
                      color: `var(--color-primary)`,
                    }}
                    fontSize="large"
                  />
                }
                aria-controls={`panel-content-${innerIndex}`}
                id={`panel-header-${innerIndex}`}
              >
                <Typography
                  style={{
                    fontWeight: "500",
                    fontSize: "1.25rem",
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  backgroundColor: `var(--color-white)`,
                  color: `var(--color-black)`,
                  borderRadius: `0 0 0.625rem 0.625rem`,
                  textAlign: `left`,
                  padding: `1rem`,
                }}
              >
                <Typography
                  style={{
                    fontWeight: "500",
                    fontSize: "1.125rem",
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))
        )}
      </div>
    </div>
  );
}

export default Faq;
