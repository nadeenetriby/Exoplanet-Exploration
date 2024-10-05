import { paragraph } from "../data/data";
import styles from "./paragraph1.module.css";

export default function Paragraph1({question}) {
const list=["1","2","3","4","5"];



return <div className={styles.container}>
    <p className={styles.pStyle}>{question}</p>
</div>;
}