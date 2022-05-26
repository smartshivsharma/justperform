import { Accordion } from "react-bootstrap";

import FaqsItem from "./FaqsItem";



const Faqs = (props) => {

    return (
        <>
            <Accordion>
                {props.faqLists.map((faq) => (
                    <FaqsItem
                        key={faq.id}
                        id={faq.id}
                        eventKey={faq.eventKey}
                        ques={faq.ques}
                        ans={faq.ans}
                    />
                ))}
            </Accordion>
        </>

    )
}

export default Faqs;