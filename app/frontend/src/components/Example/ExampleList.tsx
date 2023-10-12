import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What are top 3 lectures from JavaCro 2022 and 2021?",
        value: "What are top 3 lectures from JavaCro 2022 and 2021?"
    },
    {
        text: "Can you cross reference the list of speakers in JavaCro 2022 and 2021 and give me only the names that had lectures in both?",
        value: "Can you cross reference the list of speakers in JavaCro 2022 and 2021 and give me only the names that had lectures in both?"
    },
    {
        text: "Can you list me top ranked lecture in JavaCro 2022?",
        value: "Can you list me top ranked lecture in JavaCro 2022?"
    }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
